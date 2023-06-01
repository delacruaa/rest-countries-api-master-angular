import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICountry } from 'src/app/models/ICountry';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  public loading: boolean = false;
  public country: ICountry = {} as ICountry;
  public errorMessage: string = '';
  public countryName: string | null = '';
  public nativeName: string = '';
  public currencies: string = '';
  public languages: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.countryName = param.get('name');
    });
    this.getCountriesByName(this.countryName!);
  }
  getCountriesByName(name: string) {
    this.loading = true;
    this.countriesService.getCountriesByName(name).subscribe(
      (data) => {
        this.country = data[0];
        this.nativeName = Object.values(
          Object.values(this.country.name.nativeName)[0]
        )[1] as string;
        this.currencies = Object.values(
          Object.values(this.country.currencies)[0]
        )[0] as string;
        this.languages = Object.values(
          Object.values(this.country.languages)
        ).join(',');
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}
