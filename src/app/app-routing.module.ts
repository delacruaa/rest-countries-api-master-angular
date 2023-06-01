import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { CountryComponent } from './page/country/country.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':name', component: CountryComponent },

  { path: '**', redirectTo: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
