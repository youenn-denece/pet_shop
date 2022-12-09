export type Species = 'chien'|'chat'|'lapin'|'poisson'|'dauphin';

export interface IPet {
  id: number;
  name:string;
  species: Species;
  price: number;
  isAvailable: boolean;
  imageUrl?: string;
}
