import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, MatButtonModule, MatIconModule, CommonModule],
  declarations: [CategoryListComponent],
  providers: [],
  exports: [CategoryListComponent]
})
export class CategoryListComponentModule {
}
