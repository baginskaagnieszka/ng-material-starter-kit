import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductTableService } from '../../services/product-table.service';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-table',
  styleUrls: ['./product-table.component.scss'],
  templateUrl: './product-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent {
  readonly list$: Observable<ProductModel[]> = this._productTableService.getAll();
  constructor(private _productTableService: ProductTableService) {
  }
}
