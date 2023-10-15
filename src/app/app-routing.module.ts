import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module')
      .then(m => m.ProductsModule) }]; // здесь будут ваши маршруты

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

