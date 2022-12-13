import { Component, Input } from '@angular/core';
import { IPet } from 'src/app/pet/model/pets';
import { PetService } from '../../../pet.service';

@Component({
  selector: 'app-pet-list-item',
  templateUrl: './pet-list-item.component.html',
  styleUrls: ['./pet-list-item.component.scss'],
})
export class PetListItemComponent {
  @Input() pet!: IPet;

  constructor(private petService: PetService) {}
}
