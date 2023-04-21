import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  reactiveForm = new FormGroup({
    nameOrBreed: new FormControl(''),
    gender: new FormControl(''),
    type: new FormControl(''),
  })

  onSubmit() {
    console.log(this.reactiveForm.value)
  }
}
