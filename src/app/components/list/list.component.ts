import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/pets/pet_interfaces';
import { PetsService } from '../../services/pets/pets.service';
import { HttpResponse } from '@angular/common/http';

export interface Pagination { title: string, page: string }

export const getPaginationItems = (pagStr: string | null) => {
  if (!pagStr) return []

  return pagStr.split(',').map(route => {
    const match = route.match(/_page=(\d+).+rel\=\"(.+)\"/)
    if (!match) return { title: 'error', page: 'error' }
    return {
      title: match[2],
      page: match[1]
    }
  })
}

@Component({
  selector: 'app-item-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  itemList: Item[] | null = [];
  paginationItems: Pagination[] = []

  constructor(private petsService: PetsService) {
    petsService.pets$.subscribe(items => this.itemList = items)
    petsService.pagination$.subscribe(paginationString => {
      this.paginationItems = getPaginationItems(paginationString) || [];
    })
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.petsService.getItems()
  }

  goToPage(page: string): void {
    this.petsService.goToPage(page)
  }
}