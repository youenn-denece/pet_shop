import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPet } from '../model/pets';
import { PetComponent } from '../pet.component';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  @Input() petList: IPet[] = [];
  @Output() selectPet: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.petList)
  }

  onClickPet(id: number): void {
    this.selectPet.emit(id);
  }

}
