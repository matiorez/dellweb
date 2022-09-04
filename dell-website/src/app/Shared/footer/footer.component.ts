import { Component, OnInit } from '@angular/core';
import { faAt, faFax, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faFax = faFax;
  faAt = faAt;
  footerItems = [{icon:faPhone, text:'footer.phone', isTel:true}, {icon:faAt, text:'footer.mail', isTel:false}]

  constructor() { }

  ngOnInit(): void {
    const todayDay = new Date().getUTCDay();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const todayTime = new Date().getTime();
    const timeOpen ="";
    console.log(weekday[todayDay], todayTime,timeOpen);
    console.log(this.isSupportActive(9, 15));
  }

  isSupportActive(hourFrom: number, hourTo: number) {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const isWeekend = day === 0 || day === 6 ? true : false;
    const isOpen = hour >= hourFrom && hour < hourTo ? true : false;

    return isOpen && !isWeekend ? true : false;
  }

}
