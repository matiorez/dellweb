import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';




@NgModule({
  declarations: [NavbarComponent, FooterComponent, LanguagesListComponent],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule.forChild(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    AccordionModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    RouterModule,
    FontAwesomeModule,
    LanguagesListComponent,
    AccordionModule
  ],
  providers: []
})
export class SharedModule {
  constructor(public translationService: TranslateService) {

    this.translationService.store.onLangChange
      .subscribe((lang: LangChangeEvent) => {
        console.log(' ==> FeatureModule ', lang);
        this.translationService.use(lang.lang);
      });
  }
}
