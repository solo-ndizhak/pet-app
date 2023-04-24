import { transition } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { PetsService } from 'src/app/services/pets/pets.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  reactiveForm: FormGroup

  constructor(private petsService: PetsService) {
    this.reactiveForm = new FormGroup({
      nameOrBreed: new FormControl(petsService.nameOrBreed),
      gender: new FormControl(petsService.gender),
      type: new FormControl(petsService.type),
    })

    this.reactiveForm
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe(() => this.onSubmit())
  }

  onSubmit(): void {
    this.petsService.updateFiltersAndSearch(this.reactiveForm.value)
  }
}
