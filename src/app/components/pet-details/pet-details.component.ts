import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/services/pets/item';
import { PetsService } from 'src/app/services/pets/pets.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent {
  id: number = 0
  item: Item = {} as Item

  constructor(
    private route: ActivatedRoute,
    private petsService: PetsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.getItem()
    });
  }

  getItem() {
    this.petsService.getItem(this.id).subscribe(item => {
      console.log(item)
      this.item = item
    })
  }

}
