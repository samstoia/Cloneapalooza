import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Email } from '../email.model';
import { EmailService } from '../email.service';


@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css'],
  providers: [EmailService]
})
export class EmailsComponent implements OnInit {
  emailId: string;
  emailToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private emailService: EmailService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.emailId = urlParameters['id'];
  });
  this.emailToDisplay = this.emailService.getEmailById(this.emailId);
  }
}
