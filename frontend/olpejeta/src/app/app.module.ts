import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { GuidesComponent } from './components/guides/guides.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SpeciesComponent } from './components/species/species.component';
<<<<<<< HEAD
import { SightingsComponent } from './components/sightings/sightings.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
>>>>>>> 73c2c65b0e99bfaa6e97c93a1076f7bc2540f96a
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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

