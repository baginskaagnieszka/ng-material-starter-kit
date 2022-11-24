import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { ProductTableComponent } from './product-table.component';

@NgModule({
  imports: [MatCardModule, MatTableModule, MatListModule, CommonModule],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent]
})
export class ProductTableComponentModule {
}
