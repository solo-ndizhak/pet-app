import { Component } from '@angular/core';
import { NotificationService } from './services/notifications.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private notificationService: NotificationService, private _snackBar: MatSnackBar) {
    this.notificationService.notification$.subscribe(({ message, action }) => {
      this._snackBar.open(message, action)
    })
  }

  title = 'pet-app';
}
