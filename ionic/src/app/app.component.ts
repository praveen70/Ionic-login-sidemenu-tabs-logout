
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,  MenuController,  App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from './../pages/tabs/tabs';
import { LoginPage } from './../pages/login/login';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController, public app: App) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Tabs', component: TabsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logoutClicked() {
    console.log("Logout");
    //this.authService.logout();
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
    localStorage.clear();
  }
  homePageClicked() {
    console.log("Logout");
    //this.authService.logout();
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }
}
