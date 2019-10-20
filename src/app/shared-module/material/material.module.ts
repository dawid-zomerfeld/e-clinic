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
  MatTableModule, MatRadioModule, MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatProgressSpinnerModule, MatDialogRef, MAT_DIALOG_DATA
} from '@angular/material';

const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 3000,
  verticalPosition: 'bottom',
  horizontalPosition: 'center'
};

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
  MatTableModule,
  MatRadioModule,
  MatProgressSpinnerModule,
];
@NgModule({
  declarations: [],
  exports: [...MATERIAL_MODULES],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG}
  ]
})
export class MaterialModule { }
