import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent {
  selected: string = 'pl';

  

  constructor(private translate: TranslateService) { }

  selectLang(lang: string) {
    this.selected = lang;
    this.translate.use(this.selected)
  }

}
