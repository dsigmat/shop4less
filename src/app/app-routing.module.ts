import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ListOrdersComponent} from "./orders/list-orders/list-orders.component";

const routes: Routes = [
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: 'orders', component: ListOrdersComponent}
]; // здесь будут ваши маршруты

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  // добавление маршрутов
  ],
  exports: [
    RouterModule // экспортируем RouterModule, чтобы другие модули могли его использовать
  ]
})
export class AppRoutingModule { }

