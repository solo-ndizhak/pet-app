import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item, ItemDetails } from './item';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private apiUrl = 'http://localhost:3000/pets';
  private apiDetailUrl = 'http://localhost:3000/petDetails';

  constructor(private http: HttpClient) { }

  getItems(page: number = 0, onPage: number = 10): Observable<Item[]> {
    let queryParams = new HttpParams()

    queryParams = queryParams.append('_page', page)
    queryParams = queryParams.append('_limit', onPage)

    return this.http.get<Item[]>(this.apiUrl, {
      params: queryParams
    });
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.apiDetailUrl}/${id}`;
    return this.http.get<Item>(url);
  }
}