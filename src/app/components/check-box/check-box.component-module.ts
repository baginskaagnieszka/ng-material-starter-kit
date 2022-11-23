import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { CheckBoxComponent } from './check-box.component';

@NgModule({
  imports: [MatCheckboxModule, CommonModule, MatCardModule],
  declarations: [CheckBoxComponent],
  providers: [],
  exports: [CheckBoxComponent]
})
export class CheckBoxComponentModule {
}
