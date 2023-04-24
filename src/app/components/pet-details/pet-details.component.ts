import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, ItemDetails } from 'src/app/services/pets/pet_interfaces';
import { PetsService } from 'src/app/services/pets/pets.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent {
  id: number = 0
  animal: ItemDetails = {} as ItemDetails

  constructor(
    private route: ActivatedRoute,
    private petsService: PetsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.petsService.getItem(this.id)
    });
    this.petsService.petDetails$.subscribe(details => this.animal = details)
  }

  onAdoptClick(): void {
    this.petsService.adoptPet(this.id)
  }

}
