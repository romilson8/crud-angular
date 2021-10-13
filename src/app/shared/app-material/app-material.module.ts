import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
 exports: [
   MatCardModule,
   MatTableModule,
   MatToolbarModule,
   MatTabsModule,
   MatGridListModule

  ],
})
export class AppMaterialModule { }
