import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/pet/pet.service';
import { IPet } from '../model/pets';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  constructor(private petService: PetService) {}

  ngOnInit(): void {
  }

  get petList(): IPet[] {
    return this.petService.pets;
  }

  onSelectPet(petId: number): void {
    this.petService.selectPet(petId);
  }

}
