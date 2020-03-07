import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';

import { GuidesComponent} from './components/guides/guides.component';

import { UsersComponent} from './components/users/users.component';

const routes: Routes = [
  { path: 'guides', component: GuidesComponent},
  { path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
