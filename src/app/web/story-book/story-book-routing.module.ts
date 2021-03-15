import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryBookComponent } from './story-book.component';

const routes: Routes = [
  { path: '', component: StoryBookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryBookRoutingModule { }
