import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryFormComponent } from './category-form';
import { CategoryListComponent } from './category-list';

export const routes: Routes = [
  { 
    // Quando o path não é informado o direcionamento é feito 
    // para nomesite.com/components, como passado no módulo de rotas principal
    path: '',
    component: CategoryListComponent
  },
  { 
    path: ':id/edit',
    component: CategoryFormComponent
  },
  { 
    path: 'new',
    component: CategoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

/* 
nomesite.com/categories => list (master)
nomesite.com/categories/new => form (detail)
nomesite.com/categories/:id/edit => form (detail)
*/