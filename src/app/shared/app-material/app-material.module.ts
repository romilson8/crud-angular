import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
 exports: [
   MatCardModule,
   MatTableModule,
   MatToolbarModule,
   MatTabsModule

  ],
})
export class AppMaterialModule { }
