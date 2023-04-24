import { Component, Input } from '@angular/core';
import { Item, ItemDetails } from 'src/app/services/pets/pet_interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() animal: Item | ItemDetails = {} as ItemDetails
}
