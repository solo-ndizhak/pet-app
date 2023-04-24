import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, Subject, forkJoin } from 'rxjs';
import { Filters, Item, ItemDetails } from './pet_interfaces';
import { NotificationService } from '../notifications.service';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private apiUrl = 'http://localhost:3000/pets';
  private apiDetailUrl = 'http://localhost:3000/petDetails';

  private pagination = new Subject<string | null>()
  private pets = new Subject<Item[] | null>()
  private petDetails = new Subject<ItemDetails>()
  pagination$ = this.pagination.asObservable()
  pets$ = this.pets.asObservable()
  petDetails$ = this.petDetails.asObservable()

  nameOrBreed: string = ''
  gender: string = ''
  type: string = ''
  page: number = 1


  constructor(private http: HttpClient, private notification: NotificationService) { }

  updateFiltersAndSearch(filters: Filters): void {
    this.nameOrBreed = filters.nameOrBreed
    this.type = filters.type
    this.gender = filters.gender
    this.page = 1
    this.getItems()
  }

  getItems(): void {
    let queryParams = new HttpParams()

    queryParams = queryParams.append('_page', this.page)
    queryParams = this.nameOrBreed ? queryParams.append('nameOrBreed_like', this.nameOrBreed) : queryParams
    queryParams = this.gender ? queryParams.append('gender', this.gender) : queryParams
    queryParams = this.type ? queryParams.append('type', this.type) : queryParams

    this.http.get<Item[]>(this.apiUrl, {
      params: queryParams,
      observe: 'response'
    }).subscribe((resp: HttpResponse<Item[]>) => {
      this.pagination.next(resp.headers.get('Link'))
      this.pets.next(resp.body)
    });
  }

  goToPage(page: string): void {
    this.page = Number(page);
    this.getItems();
  }

  getItem(id: number): void {
    const url = `${this.apiDetailUrl}/${id}`;
    this.http.get<ItemDetails>(url).subscribe(details => this.petDetails.next(details));
  }

  adoptPet(id: number): void {
    const detailUrl = `${this.apiDetailUrl}/${id}`;
    const listUrl = `${this.apiUrl}/${id}`;

    forkJoin([
      this.http.patch<ItemDetails>(detailUrl, { 'taken': true }),
      this.http.patch<ItemDetails>(listUrl, { 'taken': true })
    ]).subscribe(data => {
      this.petDetails.next(data[0])
      this.notification.sendNotification('Congratulations! You have adopted an adorable pet!', "I'm Happy!")
    })
  }
}