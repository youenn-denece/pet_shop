import { Component} from '@angular/core';
import { PetService } from 'src/app/pet/pet.service';
import { IPet } from '../model/pets';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent  {

  constructor(private petService: PetService) {}

  get pet(): IPet | undefined | null {
    return this.petService.selectedPet;
  }

}
