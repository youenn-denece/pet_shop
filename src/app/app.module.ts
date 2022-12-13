import { NgModule, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PetDetailComponent } from './pet/pet-index/pet-detail/pet-detail.component';
import { PetListItemComponent } from './pet/pet-index/pet-list/pet-list-item/pet-list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PetIndexComponent } from './pet/pet-index/pet-index.component';
import { PetListComponent } from './pet/pet-index/pet-list/pet-list.component';
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent ,
    PetComponent,
    PetListComponent,
    PetDetailComponent,
    PetListItemComponent,
    NavbarComponent,
    AddPetComponent,
    HomeComponent,
    PetIndexComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
