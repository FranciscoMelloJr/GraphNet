import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroProvedorComponent } from './cadastro-provedor/cadastro-provedor.component';
import { AgmCoreModule } from '@agm/core';
import { LoginProvedorComponent } from './login-provedor/login-provedor.component';
import { ProvedorComponent } from './provedor/provedor.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login-provedor/auth.service';
import { DatePipe } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutComponent,
    ContactComponent,
    ReviewsComponent,
    CadastroComponent,
    CadastroProvedorComponent,
    LoginProvedorComponent,
    ProvedorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: '(Colocar a chave de API aqui)',
      libraries: ['geometry', 'places', 'directions']
    }),
    MatBadgeModule
  ],
  exports:[
    RouterModule
  ],
  providers: [AuthGuard, AuthService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
