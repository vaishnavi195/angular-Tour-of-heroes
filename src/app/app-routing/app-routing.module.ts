import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroComponent } from '../hero/hero.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}