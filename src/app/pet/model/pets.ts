export type Species = 'chien'|'chat'|'lapin'|'poisson';

export interface IPet {
  id: string;
  name:string;
  species: Species;
  price: number;
  isAvailable: boolean;
  imageUrl?: string;
}
