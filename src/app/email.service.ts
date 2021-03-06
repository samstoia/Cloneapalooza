import { Injectable } from '@angular/core';
import { Email } from './email.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EmailService {
  emails: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.emails = database.list('emails');
  }

  getEmails() {
    return this.emails;
  }

  addEmail(newEmail: Email) {
    this.emails.push(newEmail);
  }

  getEmailById(emailId: string){
    return this.database.object('emails/' + emailId);
  }

  updateEmail(localUpdatedEmail) {
    var emailEntryInFirebase = this.getEmailById(localUpdatedEmail.$key);
    emailEntryInFirebase.update({emailAddress: localUpdatedEmail.emailAddress});

  }

  deleteEmail(localEmailToDelete){
    var emailEntryInFirebase = this.getEmailById(localEmailToDelete.$key);
    emailEntryInFirebase.remove();
  }

}
