import { Component, Input } from '@angular/core';
import { Item } from 'src/app/services/pets/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() animal: Item = {} as Item
}
