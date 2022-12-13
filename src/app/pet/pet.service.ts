import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPet, Species } from './model/pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets: IPet[] = [];
  selectedPet: IPet | undefined | null;
  isCreatingPet: boolean = false;
  private petsUrl= 'https://formation-6e588-default-rtdb.europe-west1.firebasedatabase.app/pets.json';


  constructor(private http: HttpClient) {
    this.getPets();
  }

  togglePetCreation():void {
    this.isCreatingPet = !this.isCreatingPet;
  }

  ngOnInit(): void {

  }

  postPet(petpayload: any): any{
    return this.http
      .post(this.petsUrl, {
        ...petpayload})
      .pipe(
      map((res) => {
        this.getPets();
        return res;
      })
    )
  }

  getPets(): void {
    this.http
      .get(this.petsUrl)
      .pipe(
        map((res: any) => {
          const pets: IPet[] = [];
          for (const key in res) {
            const pet: IPet = {
              id: key,
              ...res[key],
            };
            pets.push(pet);
          }
          return pets;
        })
      )
      .subscribe((res: IPet[]) => {
        this.pets = res;
      });
  }

  selectPet(petId: string): void  {
    if (this.selectedPet?.id === petId) {
      this.selectedPet = null;
    } else {
      this.selectedPet = this.pets.find((pet) => pet.id === petId);
    }
  }
}
