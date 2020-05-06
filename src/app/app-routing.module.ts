import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { VoteComponent } from './pages/vote/vote.component';


const routes: Routes = [
  {path: 'inicio', component : HomeComponent},
  {path: 'votar', component : VoteComponent},
  {path: '**', pathMatch : 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
