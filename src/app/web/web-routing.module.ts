import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'budget-calculator',
    loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule),
  },
  {
    path: 'table',
    loadChildren: () => import('./table-data/table-data.module').then(m => m.TableDataModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
