import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeViewComponent } from './views/home.view/home.view.component';
import { ServicesComponent } from './views/services/services.component';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
    data: { state: 'home' }
  },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path:'services',component:ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
