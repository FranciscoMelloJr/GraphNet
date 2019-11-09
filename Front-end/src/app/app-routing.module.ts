import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroProvedorComponent } from './cadastro-provedor/cadastro-provedor.component';
import { LoginProvedorComponent } from './login-provedor/login-provedor.component';
import { ProvedorComponent } from './provedor/provedor.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'quem-somos', component: AboutComponent},
  { path: 'contato', component: ContactComponent},
  { path: 'analises', component: ReviewsComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'cadastro-provedor', component: CadastroProvedorComponent},
  { path: 'login', component: LoginProvedorComponent},
  { path: 'provedor', component: ProvedorComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
