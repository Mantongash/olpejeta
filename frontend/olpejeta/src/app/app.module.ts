import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { GuidesComponent } from './components/guides/guides.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SpeciesComponent } from './components/species/species.component';
import { SightingsComponent } from './components/sightings/sightings.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    GuidesComponent,
    SummaryComponent,
    SpeciesComponent,
    SightingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

