import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Email } from '../email.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [EmailService]
})
export class NavbarComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  submitForm(email: string) {
    var newEmail: Email = new Email(email);
    this.emailService.addEmail(newEmail);
  }

}
