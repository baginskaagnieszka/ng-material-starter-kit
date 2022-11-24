import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { CategoriesMenuButtonComponent } from './components/categories-menu-button/categories-menu-button.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { SelectBoxComponentModule } from './components/select-box/select-box.component-module';
import { SelectBoxServiceModule } from './services/select-box.service-module';
import { CheckBoxComponentModule } from './components/check-box/check-box.component-module';
import { CheckBoxListServiceModule } from './services/check-box-list.service-module';
import { CategoriesMenuButtonComponentModule } from './components/categories-menu-button/categories-menu-button.component-module';
import { CategoriesMenuButtonServiceModule } from './services/categories-menu-button.service-module';
import { ProductTableComponentModule } from './components/product-table/product-table.component-module';
import { ProductTableServiceModule } from './services/product-table.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'category-list', component: CategoryListComponent },
    { path: 'CryptoChips', component: CryptoChipsListComponent },
    { path: 'public-holidays', component: SelectBoxComponent },
    { path: 'checkbox-categories', component: CheckBoxComponent },
    { path: 'categories-menu', component: CategoriesMenuButtonComponent },
    { path: 'product-search', component: ProductTableComponent }
  ]), ProductListComponentModule, ProductsServiceModule,
    CategoryListComponentModule, CategoryServiceModule,
    CryptoChipsListComponentModule, CryptoChipsServiceModule,
    SelectBoxComponentModule, SelectBoxServiceModule,
    CheckBoxComponentModule, CheckBoxListServiceModule,
    CategoriesMenuButtonComponentModule, CategoriesMenuButtonServiceModule,
    ProductTableComponentModule, ProductTableServiceModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
