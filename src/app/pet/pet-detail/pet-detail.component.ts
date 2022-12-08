import { Component, Input, OnInit } from '@angular/core';
import { IPet } from '../model/pets';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {
   @Input() pet :IPet | undefined;

  constructor() {}

  ngOnInit(): void {
  }


}
