import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditItemModule } from '../edit-item/edit-item.module';
import { ListItemRoutingModule } from './list-item-routing.module';

import { ListItemComponent } from './list-item.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';

@NgModule({
  declarations: [ListItemComponent, ItemCardComponent],
  imports: [
    CommonModule,
    DynamicDialogModule,
    SharedPipesModule,

    ListItemRoutingModule,
    EditItemModule,
  ],
  entryComponents: [EditItemComponent],
  exports: [ListItemComponent]
})
export class ListItemModule { }
