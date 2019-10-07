import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroProvedorComponent } from './cadastro-provedor/cadastro-provedor.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'quem-somos', component: AboutComponent},
  { path: 'contato', component: ContactComponent},
  { path: 'analises', component: ReviewsComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'cadastro-provedor', component: CadastroProvedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }