import { Injectable } from '@angular/core';
import { Email } from './email.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EmailService {
  emails: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.emails = database.list('emails');
  }

  addEmail(newEmail: Email) {
    this.emails.push(newEmail);
  }

}
