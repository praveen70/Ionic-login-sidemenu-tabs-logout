import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { studentItem } from '../../models/studentData-item/studentData-tem.interface'
// import {Http, Headers } from '@angular/http';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// // import {  AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';



@IonicPage()
@Component({
  selector: 'page-studentlist',
  templateUrl: 'studentlist.html',
})

export class StudentlistPage {
  // studentItem = {} as studentItem;
  // studentItemRef$: FirebaseListObservable<studentItem[]>
  public datas:any;
  // selectAll: boolean;
  // childCheckbox: boolean;
  showItem: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //   this.studentItemRef$ = this.database.list('studentDatabase');
  //   this.studentItemRef$.subscribe(x => console.log(x))
  //  console.log(this.studentItemRef$) // 
    this.getData();
    console.log(this.navParams);
    console.log(this.navParams.data);
    
  }
//   getBanners(): Observable<studentItem[]> {
//     return Observable.of(this.studentItemRef$);
// }

// loadUser =()=> {
//   this.http.get('https://api.airtable.com/v0/app56Z9gwDEe5aiFt/school?api_key=keyz6RaBmN5Mmu9LH')
//   .map(res => res.json())
//   .subscribe(data => {
//     this.data = data.results;
//     let studentdata = data.records;

//     studentdata.forEach(element => {
//       let forData = element;
//       console.log(forData.fields.ID);
      
      
//     });
    
//   },err =>{
//     console.log(err);
//   });
  
// }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentlistPage');
    // this.loadUser();
  }
  backButton =()=>{
    this.navCtrl.push(HomePage, {
      val:'HomePage'
  })
    
  }
//   CheckboxClicked(item: any, $event) {
//     console.log('CheckboxClicked for ' + item);
// }
//   ParentElementClicked(zoneName: string) {
//     console.log('ParentElementClicked for ' + zoneName);
// }

// toggle(source) {
//   let checkboxes = document.getElementsByName('ALL');
//   for ( var i in checkboxes)
//       checkboxes[i].checked = source.checked;
// }
toggleCheckbox() {
  this.showItem = !this.showItem;
}
addSelects() {
  var selectedIds = [];
  
  var ids = document.getElementsByName('parent');
 
  for ( var j = 0; j < ids.length; j++) {
      if (ids[j].checked == true) {
          selectedIds.push(ids[j].value);
      }
      for(var k = 0; k < ids.length; k++){
        if (ids[k].checked == false) {
          selectedIds.push(ids[k].value);
        }
        console.log("selectedIds::::::selectedIds", selectedIds)
    }
    }
    
  }
  
//   checkbox =() =>{
//     var ids = document.getElementsByName('parent');
//     for(var i = 0; i<ids.length; i++){
//       if (ids[i].checked == false) {
//         selectedIds.push(ids[i].value);
//       }
//   }

// }


  // updateCucumber =() =>{
  //   var checkBox = document.getElementById("myCheck");
  //   var chk2 = document.getElementById('myCheck2');


  //   if ( checkBox.checked )
  //     chk2.checked = true;
    
  //   console.log('Cucumbers new state:' + this.selectAll);
  //   console.log("child check box", this.childCheckbox)
    
  // }

  getData = () => {
    // alert(this.navParams.data)
    
    // let custList = [
    //   {
      
    //   "studentName":"Praveen",
    //   "rollNumber":"1vc12ec428",
    //   "class":"5th",
    //   "section":"B",
    //   "numberOfPresentDays":"31",
    //   "classTeacher":"Naveen"
    
    //   },

    //   {
    //   "studentName":"Praveen2",
    //   "rollNumber":"1vc12ec428",
    //   "class":"5th",
    //   "section":"B",
    //   "numberOfPresentDays":"31",
    //   "classTeacher":"Naveen"
    
    //   },
    //   {
    //     "studentName":"Praveen3",
    //     "rollNumber":"1vc12ec428",
    //     "class":"5th",
    //     "section":"B",
    //     "numberOfPresentDays":"31",
    //     "classTeacher":"Naveen"
      
    //     },
    //   {
    //     "studentName":"Naveen",
    //     "rollNumber":"1vc12ec429",
    //     "class":"6th",
    //     "section":"A",
    //     "numberOfPresentDays":"21",
    //     "classTeacher":"Arvind"
    //   },
    //   {
    //     "studentName":"Kjal",
    //     "rollNumber":"1vc12ec430",
    //     "class":"7th",
    //     "section":"B",
    //     "numberOfPresentDays":"30",
    //     "classTeacher":"Prajwal"
    //   },
    //   {
    //     "studentName":"Dhruv",
    //     "rollNumber":"1vc12ec431",
    //     "class":"8th",
    //     "section":"B",
    //     "numberOfPresentDays":"11",
    //     "classTeacher":"Mamatha"
    //   },{
    //     "studentName":"Shyla",
    //     "rollNumber":"1vc12ec432",
    //     "class":"9th",
    //     "section":"B",
    //     "numberOfPresentDays":"41",
    //     "classTeacher":"Naveen"
    //   }
    //   ]
      
// const result = custList.filter(word => word.class === this.navParams.data);
//console.log("result",result);

     
    this.datas = [this.navParams.data.fields.ClassName || this.navParams.data.fields.ID];
    //console.log(this.items);
   
  }
}
