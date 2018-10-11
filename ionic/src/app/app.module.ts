import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ExamPage } from '../pages/exam/exam';
import { AttendancePage } from '../pages/attendance/attendance';
import { SmsPage } from '../pages/sms/sms';
import { LogoutPage } from '../pages/logout/logout';
import { StudentlistPage } from '../pages/studentlist/studentlist'; 

// import { AngularFireModule } from 'angularfire2';
// import { FIREBASE_CREDENTIALS } from './firebase..credentials';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TabsPage,
    ExamPage,
    SmsPage,
    AttendancePage,
    LogoutPage,
    StudentlistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
    // AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TabsPage,
    ExamPage,
    SmsPage,
    AttendancePage,
    LogoutPage,
    StudentlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
