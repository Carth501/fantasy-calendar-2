import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, MatTableModule],
  exports: [MatFormFieldModule, MatSelectModule, MatTableModule],
})
export class FCMaterialModule {}
