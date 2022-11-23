import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CheckBoxListService } from '../../services/check-box-list.service';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-check-box',
  styleUrls: ['./check-box.component.scss'],
  templateUrl: './check-box.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckBoxComponent {
  readonly list$: Observable<ProductModel[]> = this._checkBoxListService.getAll();
  constructor(private _checkBoxListService: CheckBoxListService) {
  }

}
