import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';

import {RecepcionistAddVisitComponent} from './recepcionist-add-visit/recepcionist-add-visit.component';
import {AddVisitDetailsComponent} from './recepcionist-add-visit/add-visit-details/add-visit-details.component';
import {RecepcionistSearchVisitComponent} from './recepcionist-search-visit/recepcionist-search-visit.component';
import {RecepcionistSettingsComponent} from './recepcionist-settings/recepcionist-settings.component';

const routes = [
  {path: 'recepcionist', redirectTo: 'recepcionist/search', pathMatch: 'full'},
  {
    path: 'add',
    component: RecepcionistAddVisitComponent
  },
  {
    path: 'search',
    component: RecepcionistSearchVisitComponent
  },
  {
    path: 'settings',
    component: RecepcionistSettingsComponent
  },
  {
    path: 'add/:key',
    component: AddVisitDetailsComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RecepcionistRoutingModule { }
