import { NgModule } from '@angular/core';
import {PatientComponent} from './patient.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../shared-module/guards/auth-guard.service';
import {PatientAuthGuard} from '../shared-module/guards/patient-auth-guard.service';
import {RecepcionistAddVisitComponent} from '../recepcionist/recepcionist-add-visit/recepcionist-add-visit.component';
import {PatientSearchVisitComponent} from './patient-search-visit/patient-search-visit.component';
import {AddVisitDetailsComponent} from '../recepcionist/recepcionist-add-visit/add-visit-details/add-visit-details.component';
import {SearchVisitDetailsComponent} from './patient-search-visit/search-visit-details/search-visit-details.component';
import {PatientMyVisitsComponent} from './patient-my-visits/patient-my-visits.component';
import {PatientMyAccountComponent} from './patient-my-account/patient-my-account.component';

const routes = [
  {path: 'patient', redirectTo: 'patient/search', pathMatch: 'full'},
  {
    path: 'search',
    component: PatientSearchVisitComponent
  },
  {
    path: 'search/:key',
    component: SearchVisitDetailsComponent
  },
  {
    path: 'visits',
    component: PatientMyVisitsComponent
  },
  {
    path: 'account',
    component: PatientMyAccountComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PatientModuleRouting { }
