import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientComponent} from './patient.component';
import {PatientModuleRouting} from './patient-module.routing';
import {RouterModule} from '@angular/router';
import { PatientSidenavComponent } from './patient-sidenav/patient-sidenav.component';
import {MaterialModule} from '../shared-module/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared-module/shared.module';
import { PatientSearchVisitComponent } from './patient-search-visit/patient-search-visit.component';
import {MatPaginatorModule, MatSortModule} from '@angular/material';
import { SearchVisitDetailsComponent } from './patient-search-visit/search-visit-details/search-visit-details.component';
import {RecepcionistModule} from '../recepcionist/recepcionist.module';

@NgModule({
  declarations: [PatientComponent, PatientSidenavComponent, PatientSearchVisitComponent, SearchVisitDetailsComponent],
  exports: [PatientComponent, PatientSidenavComponent],
  imports: [
    CommonModule,
    PatientModuleRouting,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    MatPaginatorModule,
    RecepcionistModule,
    MatSortModule
  ]
})
export class PatientModule { }
