import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from 'src/app/models/ICountry';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss'],
})
export class CountryItemComponent {
  @Input() country: ICountry = {} as ICountry;
}
