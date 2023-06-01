import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MainComponent } from './page/main/main.component';
import { CountryItemComponent } from './components/country-item/country-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from './page/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    DropdownComponent,
    MainComponent,
    CountryItemComponent,
    CountryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
