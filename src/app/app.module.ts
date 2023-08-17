import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PublicityComponent } from './pages/publicity/publicity.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { CreateReservationComponent } from './pages/reservation/create-reservation/create-reservation.component';
import { CommentComponent } from './pages/comment/comment.component';
import { ReservationListComponent } from './component/reservation-list/reservation-list.component';
import { AlertDefaultComponent } from './component/alert-default/alert-default.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PublicityComponent,
    JourneyComponent,
    ReservationComponent,
    CreateReservationComponent,
    CommentComponent,
    ReservationListComponent,
    AlertDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
