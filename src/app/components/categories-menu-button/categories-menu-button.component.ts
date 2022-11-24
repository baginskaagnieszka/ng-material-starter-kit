import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CategoriesMenuButtonService } from '../../services/categories-menu-button.service';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-categories-menu-button',
  styleUrls: ['./categories-menu-button.component.scss'],
  templateUrl: './categories-menu-button.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesMenuButtonComponent {
  readonly list$: Observable<ProductModel[]> = this._categoriesMenuButtonService.getAll() ;
  constructor(private _categoriesMenuButtonService: CategoriesMenuButtonService) {
  }

}
