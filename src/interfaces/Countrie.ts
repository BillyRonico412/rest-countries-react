export default interface Countrie {
  numero: number;
  name: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  population: number;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: {
    name: string;
    symbol: string;
  }[];
  languages: {
    name: string
  }[];
  borders: string[];
  alpha3Code: string;
}
