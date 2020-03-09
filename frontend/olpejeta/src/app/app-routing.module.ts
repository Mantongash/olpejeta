import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SpeciesComponent } from './components/species/species.component'

import { GuidesComponent} from './components/guides/guides.component';

import { UsersComponent} from './components/users/users.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent},
  { path: 'guides', component: GuidesComponent},
  { path: 'users', component: UsersComponent},
  { path: 'species',component: SpeciesComponent},
  { path: 'summary', component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
