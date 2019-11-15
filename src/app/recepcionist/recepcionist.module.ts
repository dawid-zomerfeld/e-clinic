import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecepcionistComponent} from './recepcionist.component';
import {RecepcionistRoutingModule} from './recepcionist-routing.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../shared-module/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared-module/shared.module';
import { RecepcionistSidenavComponent } from './recepcionist-sidenav/recepcionist-sidenav.component';
import { RecepcionistAddVisitComponent } from './recepcionist-add-visit/recepcionist-add-visit.component';
import { AddVisitDetailsComponent } from './recepcionist-add-visit/add-visit-details/add-visit-details.component';
import { AddVisitCalendarComponent } from './recepcionist-add-visit/add-visit-calendar/add-visit-calendar.component';
import { AddVisitDialogComponent } from './recepcionist-add-visit/add-visit-dialog/add-visit-dialog.component';
import {MatPaginatorModule, MatSortModule} from '@angular/material';
import { RecepcionistSearchVisitComponent } from './recepcionist-search-visit/recepcionist-search-visit.component';
import { RecepcionistSettingsComponent } from './recepcionist-settings/recepcionist-settings.component';

@NgModule({
  declarations: [
    RecepcionistComponent,
    RecepcionistSidenavComponent,
    RecepcionistAddVisitComponent,
    AddVisitDetailsComponent,
    AddVisitCalendarComponent,
    AddVisitDialogComponent,
    RecepcionistSearchVisitComponent,
    RecepcionistSettingsComponent],
  exports: [RecepcionistComponent, RecepcionistSidenavComponent, AddVisitCalendarComponent],
  entryComponents: [
    AddVisitDialogComponent,
  ],
  imports: [
    CommonModule,
    RecepcionistRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class RecepcionistModule { }
