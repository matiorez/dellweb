import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhone, faFax, faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faFax = faFax;
  faAt = faAt;
  constructor() { }

  ngOnInit(): void {
  }

}
