import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentlistPage } from '../studentlist/studentlist';
import { Nav, Platform,  MenuController,  App } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http } from '@angular/http';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
 
  public items:any;
  public data:any;
  constructor(public http:Http, public navCtrl: NavController, public navParams: NavParams, public app: App) {
    // this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
    this.loadUser();
  }

  loadUser =()=> {
    this.http.get('https://api.airtable.com/v0/app56Z9gwDEe5aiFt/school?api_key=keyz6RaBmN5Mmu9LH')
    .map(res => res.json())
    .subscribe(data => {
      this.data = data.results;
      let formData =data.records
      formData.forEach(element => {
        console.log(element)
        this.items = [element.fields];
      });
      this.items = formData;
      //console.log(formData)
      // var studentdata = data.records;
  
      // studentdata.forEach(element => {
      //   let forData = [element.fields.ClassName];
      //   for(var datas of forData){
      //     let formData = datas;

      //     console.log(formData);
         
      //   }
        
        
      // });
      
    },err =>{
      console.log(err);
    });
    
  }
  // getData = () => {
    
  //   let custList = [
  //     {
    
  //     "class":"5th"
    
  //     },
  //     {
        
  //       "class":"6th",
        
        
  //     },
  //     {
       
  //       "class":"7th",
        
  //     },
  //     {
        
  //       "class":"8th",
        
  //     },{
        
  //       "class":"9th",
        
  //     }
  //     ]


  //   // this.items = custList;
  //   // console.log(this.items);
   
  // }

  studentList=(item)=>{
    alert(item)
    var nav = this.app.getRootNav( );
    nav.setRoot(StudentlistPage, item);


  //   this.navCtrl.push(StudentlistPage, {
  //     val:'studentListPage'
  // })
    
  }

}
