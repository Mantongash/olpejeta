import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SpeciesComponent } from './components/species/species.component'

const routes: Routes = [
  { path: 'species',component: SpeciesComponent},
  { path: 'summary', component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
