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
import { PatientMyVisitsComponent } from './patient-my-visits/patient-my-visits.component';
import { PatientMyVisitsEndedComponent } from './patient-my-visits/patient-my-visits-ended/patient-my-visits-ended.component';
import { PatientMyVisitsCurrnetComponent } from './patient-my-visits/patient-my-visits-currnet/patient-my-visits-currnet.component';
import { PatientMyAccountComponent } from './patient-my-account/patient-my-account.component';
import { PatientMyVisitsCurrnetEndedComponent } from './patient-my-visits/patient-my-visits-ended/patient-my-visits-currnet-ended/patient-my-visits-currnet-ended.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [PatientComponent, PatientSidenavComponent, PatientSearchVisitComponent, SearchVisitDetailsComponent, PatientMyVisitsComponent, PatientMyVisitsEndedComponent, PatientMyVisitsCurrnetComponent, PatientMyAccountComponent, PatientMyVisitsCurrnetEndedComponent],
  exports: [PatientComponent, PatientSidenavComponent],
  entryComponents: [PatientMyVisitsCurrnetEndedComponent],
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
