import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CategoriesMenuButtonComponent } from './categories-menu-button.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatGridListModule, MatButtonModule, MatIconModule, MatMenuModule],
  declarations: [CategoriesMenuButtonComponent],
  providers: [],
  exports: [CategoriesMenuButtonComponent]
})
export class CategoriesMenuButtonComponentModule {
}
