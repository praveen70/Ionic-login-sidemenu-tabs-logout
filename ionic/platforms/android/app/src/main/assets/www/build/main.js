webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studentlist_studentlist__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttendancePage = /** @class */ (function () {
    function AttendancePage(http, navCtrl, navParams, app) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.loadUser = function () {
            _this.http.get('https://api.airtable.com/v0/app56Z9gwDEe5aiFt/school?api_key=keyz6RaBmN5Mmu9LH')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data.results;
                var formData = data.records;
                formData.forEach(function (element) {
                    console.log(element);
                    _this.items = [element.fields];
                });
                _this.items = formData;
                //console.log(formData)
                // var studentdata = data.records;
                // studentdata.forEach(element => {
                //   let forData = [element.fields.ClassName];
                //   for(var datas of forData){
                //     let formData = datas;
                //     console.log(formData);
                //   }
                // });
            }, function (err) {
                console.log(err);
            });
        };
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
        this.studentList = function (item) {
            alert(item);
            var nav = _this.app.getRootNav();
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__studentlist_studentlist__["a" /* StudentlistPage */], item);
            //   this.navCtrl.push(StudentlistPage, {
            //     val:'studentListPage'
            // })
        };
        // this.getData();
    }
    AttendancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendancePage');
        this.loadUser();
    };
    AttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attendance',template:/*ion-inline-start:"/home/praveen/Desktop/schoolFirebase/src/pages/attendance/attendance.html"*/'\n\n<ion-content >\n    <!-- <h1>attendance Page</h1> -->\n    \n    <h4>Attendance</h4>\n  <div  *ngFor="let item of items">\n    <br/>\n      <ion-card  class="attendance-card" >\n        \n          <ion-card-header >\n            <!-- <strong>Student Name:</strong>\n              {{item.studentName}}\n              <strong>Roll Number:</strong>\n              {{item.rollNumber}} -->\n          <strong ><h2><i class="fa fa-desktop" style="font-size:48px;color:white"></i>\n          \n           <span class=\'pull-right\' style="font-size:38px;" >{{item.fields.ID}}</span>\n          </h2></strong>\n              \n          </ion-card-header >\n        \n          <ion-card-content class="card-header-md">\n            <ion-list>\n              \n            <!-- <ion-item>\n\n              <ion-radio  checked></ion-radio>\n            </ion-item>   -->\n            <span class=\'pull-right\'><button ion-button round (click)="studentList(item);" class=\'button\'><i class="fa fa-arrow-right"></i></button></span>\n          </ion-list>\n          </ion-card-content>\n          \n        </ion-card>\n      </div> \n</ion-content>\n'/*ion-inline-end:"/home/praveen/Desktop/schoolFirebase/src/pages/attendance/attendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AttendancePage);
    return AttendancePage;
}());

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentlistPage = /** @class */ (function () {
    function StudentlistPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backButton = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */], {
                val: 'HomePage'
            });
        };
        // addSelects() {
        //   var selectedIds = [];
        //   var ids = document.getElementsByName('parent');
        //   for ( var j = 0; j < ids.length; j++) {
        //       if (ids[j].checked == true) {
        //           selectedIds.push(ids[j].value);
        //       }
        //       for(var k = 0; k < ids.length; k++){
        //         if (ids[k].checked == false) {
        //           selectedIds.push(ids[k].value);
        //         }
        //         console.log("selectedIds::::::selectedIds", selectedIds)
        //     }
        //     }
        //   }
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
        this.getData = function () {
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
            _this.datas = [_this.navParams.data.fields.ClassName || _this.navParams.data.fields.ID];
            //console.log(this.items);
        };
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
    StudentlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentlistPage');
        // this.loadUser();
    };
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
    StudentlistPage.prototype.toggleCheckbox = function () {
        this.showItem = !this.showItem;
    };
    StudentlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-studentlist',template:/*ion-inline-start:"/home/praveen/Desktop/schoolFirebase/src/pages/studentlist/studentlist.html"*/'<!--\n  Generated template for the StudentlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header  color=\'primary\'>\n    <ion-navbar class="nav-bar" style=\'background-color: blue;\' color=\'primary\'>\n        <ion-buttons left>\n            <button ion-button icon-only class="my-style-for-modal" (click)=\'backButton();\'>\n                <ion-icon name="arrow-back"> Student List</ion-icon>\n            </button>\n\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<h4>Student List</h4>\n<ion-content >\n    <br/>\n    <input type="checkbox" checked={item.checked} (click)="addSelects();" name="parent"  />\n    <!-- (click)="toggle(this);" -->\n    <!-- <ion-label>Select All</ion-label>\n        <ion-checkbox [(ngModel)]="selectAll"  (click)="ParentElementClicked()"></ion-checkbox> -->\n\n\n    <div >\n    <ion-card *ngFor="let item of datas" >\n            <!-- (click)="ParentElementClicked()" -->\n\n        <ion-card-header class="student-header"  let i = "index">\n            \n            <!-- <ion-checkbox class="pull-right" [checked]="item.currentValue" (click)="CheckboxClicked($event)"></ion-checkbox> -->\n\n            \n        </ion-card-header>\n        <input type="checkbox" checked={childItem.checked} />\n        <ion-card-content padding  class="student-list">\n            <img  style="height: 50px; width: 50px;" src="/assets/imgs/img_avatar2.png"/>\n\n            {{item}}\n            <div class=\'\'></div>\n            <!-- <span>{{item.class}}</span> -->\n            <!-- <span style="position: absolute; ">{{item}}</span> -->\n        </ion-card-content>\n        <!-- <ion-list>\n          <ion-item *ngFor="let item of studentItemRef$ | async"></ion-item>  \n          <h2>{{item.studentName}}</h2>\n        </ion-list> -->\n\n    </ion-card>\n</div>\n</ion-content>'/*ion-inline-end:"/home/praveen/Desktop/schoolFirebase/src/pages/studentlist/studentlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], StudentlistPage);
    return StudentlistPage;
}());

//# sourceMappingURL=studentlist.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamPage = /** @class */ (function () {
    function ExamPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExamPage');
    };
    ExamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exam',template:/*ion-inline-start:"/home/praveen/Desktop/schoolFirebase/src/pages/exam/exam.html"*/'\n<ion-content padding>\n<h4>Exam</h4>\n<ion-card class="exam-card">\n\n    <ion-card-header>\n        Coming Soon\n    </ion-card-header>\n  \n    <ion-card-content>\n      <!-- Add card content here! -->\n    </ion-card-content>\n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/praveen/Desktop/schoolFirebase/src/pages/exam/exam.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ExamPage);
    return ExamPage;
}());

//# sourceMappingURL=exam.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SmsPage = /** @class */ (function () {
    function SmsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SmsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SmsPage');
    };
    SmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sms',template:/*ion-inline-start:"/home/praveen/Desktop/schoolFirebase/src/pages/sms/sms.html"*/'<!--\n  Generated template for the SmsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>sms</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n    <h4>SMS</h4>\n    <ion-card class="sms-card">\n\n        <ion-card-header>\n          SMS\n        </ion-card-header>\n      \n        <ion-item>\n          <ion-label stacked>Description</ion-label>\n          <ion-textarea type="text" name="message"></ion-textarea>\n        </ion-item>\n      \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/praveen/Desktop/schoolFirebase/src/pages/sms/sms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SmsPage);
    return SmsPage;
}());

//# sourceMappingURL=sms.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.username = '';
        this.password = '';
        this.dashboardPage = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
                val: 'HomePage'
            });
        };
        this.login = function () {
            //console.log(this.username, this.password);
            if (_this.username === 'admin' && _this.password === 'admin') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Logged in Sucessfully',
                    subTitle: 'Pallavi',
                    buttons: ['OK']
                });
                alert_1.present();
                var data = {
                    username: _this.username,
                    password: _this.password
                };
                console.log('data', data);
                window.localStorage.data = JSON.stringify(data);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
                    val: 'HomePage'
                });
            }
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/praveen/Desktop/schoolFirebase/src/pages/login/login.html"*/'\n\n\n<ion-content padding class="login">\n    \n  <div class="content">\n  <img src="/assets/imgs/vidyarthe-transparent.png" class=\'main-logo\'/>\n    <ion-list style=\'color: white\'>\n        <ion-item class="username" >\n          <ion-label floating class="username" >Username</ion-label>\n          <ion-input type="text" [(ngModel)]="username"></ion-input>\n        </ion-item>\n      \n        <ion-item class="password">\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n    \n      </ion-list>\n      <button ion-button class=\'btn\' (click)=\'login();\' >Login</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/praveen/Desktop/schoolFirebase/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/praveen/Desktop/schoolFirebase/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n <ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle class="menu">\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>tabs</ion-title>\n  </ion-navbar>\n\n</ion-header> \n\n<ion-content padding>\n  <h1>Tabspage</h1>\n\n</ion-content>\n'/*ion-inline-end:"/home/praveen/Desktop/schoolFirebase/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/attendance/attendance.module": [
		278,
		6
	],
	"../pages/exam/exam.module": [
		279,
		5
	],
	"../pages/login/login.module": [
		280,
		4
	],
	"../pages/logout/logout.module": [
		281,
		3
	],
	"../pages/sms/sms.module": [
		282,
		2
	],
	"../pages/studentlist/studentlist.module": [
		283,
		1
	],
	"../pages/tabs/tabs.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogoutPage');
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/home/praveen/Desktop/schoolFirebase/src/pages/logout/logout.html"*/'<!--\n  Generated template for the LogoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>logout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/praveen/Desktop/schoolFirebase/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_exam_exam__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_attendance_attendance__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sms_sms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_studentlist_studentlist__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { AngularFireModule } from 'angularfire2';
// import { FIREBASE_CREDENTIALS } from './firebase..credentials';
// import { AngularFireDatabaseModule } from 'angularfire2/database';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_exam_exam__["a" /* ExamPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sms_sms__["a" /* SmsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_studentlist_studentlist__["a" /* StudentlistPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/attendance/attendance.module#AttendancePageModule', name: 'AttendancePage', segment: 'attendance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exam/exam.module#ExamPageModule', name: 'ExamPage', segment: 'exam', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sms/sms.module#SmsPageModule', name: 'SmsPage', segment: 'sms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentlist/studentlist.module#StudentlistPageModule', name: 'StudentlistPage', segment: 'studentlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */]
                // AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
                // AngularFireDatabaseModule
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_exam_exam__["a" /* ExamPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sms_sms__["a" /* SmsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_studentlist_studentlist__["a" /* StudentlistPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, app) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logoutClicked = function () {
        console.log("Logout");
        //this.authService.logout();
        this.menuCtrl.close();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        localStorage.clear();
    };
    MyApp.prototype.homePageClicked = function () {
        console.log("Logout");
        //this.authService.logout();
        this.menuCtrl.close();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/praveen/Desktop/schoolFirebase/src/app/app.html"*/'\n\n\n<ion-menu [content]="content">\n  <ion-header style="background-color:blue;">\n    \n      <ion-card text-center class="hide-card">\n          <img src="/assets/imgs/img_avatar2.png" class="custom-avatar"/>\n          <div class=\'name-emailId\'>\n          <strong><h4>Pallavi</h4></strong>\n            <strong><p>Pallavi.krshinegowda@gmail.com</p></strong>\n          </div>\n      </ion-card>\n    <!-- <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar> -->\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n        <ion-item  (click)="homePageClicked()"><i class="fa fa-home" style="font-size:20px;color:black"></i>Home</ion-item>\n      <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button> -->\n      <ion-item (click)="logoutClicked()"><i class="fa fa-sign-out" style="font-size:20px;color:black"></i>Logout</ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/praveen/Desktop/schoolFirebase/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/praveen/Desktop/schoolFirebase/src/pages/list/list.html"*/'\n\n<!-- <ion-content> -->\n <!-- <h1>Praveen</h1> -->\n\n <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n\n <ion-card class="cards">\n        <!-- <ion-card-header>\n          Header\n        </ion-card-header> -->\n        <ion-card-content>\n          <h1>Praveen</h1>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<!-- </ion-content> -->\n'/*ion-inline-end:"/home/praveen/Desktop/schoolFirebase/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam_exam__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sms_sms__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__attendance_attendance__["a" /* AttendancePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__sms_sms__["a" /* SmsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__exam_exam__["a" /* ExamPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/praveen/Desktop/schoolFirebase/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-card class="card">\n        <ion-card-header>\n            <button ion-button menuToggle class="menu" style=\'box-shadow: 0 !important\'>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n            <ion-title class=\'title\'>Dashboard</ion-title>\n\n        </ion-card-header>\n        <ion-card-content>\n            <ion-avatar item-start class="image">\n                <img style=\'border-radius: 80%\' class=\'image-tag\' src="/assets/imgs/img_avatar2.png">\n                <strong ><p >Pallavi</p></strong>\n            </ion-avatar>\n\n        </ion-card-content>\n    </ion-card>\n\n</ion-header>\n\n<ion-content padding >\n    <ion-tabs color=\'primary\' >\n        <ion-tab [root]="tab1Root" tabTitle="Attendence" tabIcon="md-paper" ></ion-tab>\n        <ion-tab [root]="tab2Root" tabTitle="Sms" tabIcon="chatbubbles"></ion-tab>\n        <ion-tab [root]="tab3Root" tabTitle="ExamMark" tabIcon="clipboard"></ion-tab>\n    \n\n    </ion-tabs>\n</ion-content>'/*ion-inline-end:"/home/praveen/Desktop/schoolFirebase/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map