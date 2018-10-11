import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentlistPage } from './studentlist';

@NgModule({
  declarations: [
    StudentlistPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentlistPage),
  ],
})
export class StudentlistPageModule {}
