import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard} from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { PublicityComponent } from './pages/publicity/publicity.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { CommentComponent } from './pages/comment/comment.component';
import { CreateReservationComponent } from './pages/reservation/create-reservation/create-reservation.component';

const routes: Routes =
  [
    {path: 'login', component: LoginComponent, canActivate:[AuthGuard]},
    {path: 'register', component: RegisterComponent, canActivate:[AuthGuard]},
    {path: 'profile', component: ProfileComponent,canActivate:[NotAuthGuard]},
    {path: 'home', component: HomeComponent,canActivate:[NotAuthGuard]},
    {path: 'publicity', component: PublicityComponent,canActivate:[NotAuthGuard]},
    {path: 'journey', component: JourneyComponent,canActivate:[NotAuthGuard]},
    {path: 'reservations', component: ReservationComponent,canActivate:[NotAuthGuard]},
    {path: 'reservation/create/:id/:idPlace', component: CreateReservationComponent,canActivate:[NotAuthGuard]},
    {path: 'comment/:id', component: CommentComponent,canActivate:[NotAuthGuard]},
    {path: '', redirectTo: 'login',pathMatch:'full'},
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
