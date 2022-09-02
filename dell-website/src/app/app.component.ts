import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selected = 'pl';
  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   console.log("Scrolling!");
  // }
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
  }
  ngOnInit(): void {

  }

  selectLang(lang: string) {
    this.selected = lang;
    this.translate.use(this.selected)
  }

  onChange() {
    console.log(`language changed`, this.selected);
    this.translate.use(this.selected)
  }


}
