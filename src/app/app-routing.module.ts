import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardsManagementComponent } from './components/cards-management/cards-management.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { MyRoomsComponent } from './components/my-rooms/my-rooms.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cards', component: CardsManagementComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'my-rooms', component: MyRoomsComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
