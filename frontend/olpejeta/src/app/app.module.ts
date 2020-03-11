import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {

  MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule
} from '@angular/material';

import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { GuidesComponent } from './components/guides/guides.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SpeciesComponent } from './components/species/species.component';
// import { SightingsComponent } from './components/sightings/sightings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    GuidesComponent,
    SummaryComponent,
    SpeciesComponent,
    // SightingsComponent,
    DashboardComponent,
    SearchBarComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

