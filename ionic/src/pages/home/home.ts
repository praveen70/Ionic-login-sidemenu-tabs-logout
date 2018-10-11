
import { Component } from '@angular/core';
import { NavController , Nav} from 'ionic-angular';
import { ExamPage } from '../exam/exam';
import { AttendancePage } from '../attendance/attendance';
import { SmsPage } from './../sms/sms';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = AttendancePage;
  tab2Root = SmsPage;
  tab3Root = ExamPage;

  constructor(public navCtrl: NavController) {

  }

//   nextPage=()=>{
//     this.navCtrl.push(ListPage, {
//       val:'HomePage'
//   })
// }
 

}
