import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Email } from '../email.model';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [EmailService]
})
export class AdminComponent implements OnInit {
  emails: FirebaseListObservable<any[]>;

  constructor(private router: Router, private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails()
  }

  goToDetailPage(clickedEmail) {
    this.router.navigate(['emails', clickedEmail.$key]);
  };

}
