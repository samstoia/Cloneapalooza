import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from '../email.model';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.component.html',
  styleUrls: ['./edit-email.component.css'],
  providers: [EmailService]
})
export class EditEmailComponent implements OnInit {

  @Input() emailToEdit;
  @Output() sendClick = new EventEmitter()
  
  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }
  doneButtonClicked(email) {
    this.sendClick.emit(email);
    this.emailService.updateEmail(email);
  }

  deleteButtonClicked(email) {
    this.sendClick.emit(email);
    this.emailService.deleteEmail(email);
  }
}
