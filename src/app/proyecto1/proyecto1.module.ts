import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyecto1RoutingModule } from './proyecto1-routing.module';
import { RickComponent } from './components/rick/rick.component';
import { HttpClientModule } from '@angular/common/http'
import { RickService } from './services/rick.service';
import { MaterialModule } from '../material/material.module';
import { DialogoComponent } from './components/dialogo/dialogo.component';


@NgModule({
  declarations: [
    RickComponent,
    DialogoComponent
  ],
  imports: [
    CommonModule,
    Proyecto1RoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [RickService]
})
export class Proyecto1Module { }
