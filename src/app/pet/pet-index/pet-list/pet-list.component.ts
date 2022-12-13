import { Component, OnInit } from '@angular/core';
import { IPet } from '../../model/pets';

import { PetService } from '../../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent implements OnInit {

  constructor(private petService: PetService) {}

  get petList(): IPet[] {
    return this.petService.pets;
  }

  ngOnInit(): void {}
}
