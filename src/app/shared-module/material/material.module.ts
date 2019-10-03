import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule,
  MatListModule,
  MatButtonToggleModule,
  MatTableModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule,
  MatListModule,
  MatButtonToggleModule,
  MatTableModule
];
@NgModule({
  declarations: [],
  exports: [...MATERIAL_MODULES],
})
export class MaterialModule { }
