export interface ICountry {
  capital: string[];
  continents: string[];
  cca3: string;
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  region: string;
  subregion: string;
  population: number;
  currencies: object;
  languages: object;
  borders?: string[];
  flags: {
    png: string;
  };
  tld: string[];
}
