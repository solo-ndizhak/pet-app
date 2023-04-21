import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface NotificationPayload {
  message: string
  action: string
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<NotificationPayload>();
  notification$ = this.notificationSubject.asObservable();

  sendNotification(message: string, action: string) {
    this.notificationSubject.next({ message, action });
  }
}
