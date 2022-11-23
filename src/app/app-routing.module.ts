import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import {CategoryServiceModule} from "./services/category.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'category-list', component: CategoryListComponent }]),
    ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoryServiceModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
