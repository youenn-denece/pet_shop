import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPet, Species } from './model/pets';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit{
  pets: IPet[] = [];
  selectedPet: IPet | undefined;

  ngOnInit(): void {
    this.createPets();
  }

  onSelectPet(petId: number) {
    this.selectedPet = this.pets.find(pet => pet.id === petId);
  }

  private createPets(): void {
    const names: string[] = ['Milou', 'Garfield', 'Nemo', 'Bugs bunny'];
    const species: Species[] = ['chien', 'chat', 'poisson', 'lapin'];
    const prices: number[] = [500, 400, 10, 50];

    for (let i = 0; i < 4; i++) {
      const pet: IPet = {
        id: i + 1,
        name: names[i],
        species: species[i],
        price: prices[i],
        isAvailable: i % 2 === 0,
      };

      this.pets.push(pet);
    }
  }
}
