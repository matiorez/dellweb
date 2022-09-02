import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CurrencyService } from 'src/app/Api-services/currency.service';
import { CurrencyData } from 'src/app/Api-services/currency.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']


})
export class NavbarComponent implements OnInit {
  rates:CurrencyData[]= [];
  date: string = "";

  constructor(protected translationService: TranslateService, private currencyService:CurrencyService) { }
  navLinks = ['/contact', '/aboutus'];
  faBars = faBars;
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
    },
    {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
    }
];

  ngOnInit(): void {
    this.translationService.store.onLangChange
      .subscribe((lang: LangChangeEvent) => {
        this.translationService.use(lang.lang);
      });
    this.translationService.use(this.translationService.store.currentLang);
    this.currencyService.getCurrency().subscribe(result => {
      this.rates = result[0].rates;
      this.date = result[0].effectiveDate;
      
    });
  }

}
