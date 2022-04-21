import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { FooterComponent } from './elements/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  // { path: '', component:NavbarComponent},
  // { path: '', component:FooterComponent},
  { path: 'accueil', component:AccueilComponent},
  { path: 'presentation', component:PresentationComponent},
  { path: 'blog', component:BlogComponent},
  { path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
