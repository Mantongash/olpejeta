import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SpeciesComponent } from './components/species/species.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SummaryComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
