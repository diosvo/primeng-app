import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemRoutingModule } from './list-item-routing.module';

import { ListItemComponent } from './list-item.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [ListItemComponent, ItemCardComponent],
  imports: [
    CommonModule,
    ListItemRoutingModule
  ],
  exports:[ListItemComponent]
})
export class ListItemModule { }
