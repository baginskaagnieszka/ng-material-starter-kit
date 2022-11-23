import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { SelectBoxComponentModule } from './components/select-box/select-box.component-module';
import { SelectBoxServiceModule } from './services/select-box.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'category-list', component: CategoryListComponent },
    { path: 'CryptoChips', component: CryptoChipsListComponent },
    { path: 'public-holidays', component: SelectBoxComponent }
  ]),
    ProductListComponentModule, ProductsServiceModule,
    CategoryListComponentModule, CategoryServiceModule,
    CryptoChipsListComponentModule, CryptoChipsServiceModule,
    SelectBoxComponentModule, SelectBoxServiceModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
