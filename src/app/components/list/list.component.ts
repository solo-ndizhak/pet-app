import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/pets/item';
import { PetsService } from '../../services/pets/pets.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  itemList: Item[] = [];

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.petsService.getItems()
      .subscribe(items => this.itemList = items);
  }
}