import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/app/models/ICountry';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public loading: boolean = false;
  public countries: ICountry[] = [];
  public errorMessage: string = '';
  public region = 'All';
  constructor(private coutriesService: CountriesService) {}

  ngOnInit(): void {
    this.getAllCountriesFromServer();
  }
  public getAllCountriesFromServer() {
    this.loading = true;
    this.coutriesService.getAllCountry().subscribe(
      (data) => {
        this.countries = data;
        console.log(this.countries);
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
  public getCountriesByRegion(region: string) {
    this.loading = true;
    this.coutriesService.getCountriesByRegion(region).subscribe(
      (data) => {
        this.countries = data;
        console.log(this.countries);
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }

  handleData(region: string): void {
    this.region = region;
    if (region !== 'All') {
      this.getCountriesByRegion(region);
    } else {
      this.getAllCountriesFromServer();
    }
  }
  handleInput(name: string): void {
    if (name !== '') {
      this.countries = this.countries.filter((item) => {
        return item.name.common.toLowerCase().includes(name);
      });
    } else {
      this.handleData(this.region);
    }
  }
}
