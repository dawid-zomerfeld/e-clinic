import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';

import {RecepcionistAddVisitComponent} from './recepcionist-add-visit/recepcionist-add-visit.component';

const routes = [
  {
    path: 'add',
    component: RecepcionistAddVisitComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RecepcionistRoutingModule { }
