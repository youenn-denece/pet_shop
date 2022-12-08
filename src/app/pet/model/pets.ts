export type Species = 'chien'|'chat'|'lapin'|'poisson';

export interface IPet {
  id: number;
  name:string;
  species: Species;
  price: number;
  isAvailable: boolean;
}
