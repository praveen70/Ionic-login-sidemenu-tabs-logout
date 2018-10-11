import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface ICustomer{
  username:any;
  password:any;


}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements ICustomer{
  username='';
  password='';
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  dashboardPage =() =>{
    this.navCtrl.push(HomePage, {
      val:'HomePage'
  })

  }
  login =()=>{
    //console.log(this.username, this.password);
    if(this.username === 'admin' && this.password === 'admin'){
      let alert = this.alertCtrl.create({
        title: 'Logged in Sucessfully',
        subTitle: 'Pallavi',
        buttons: ['OK']
      });
      alert.present();

      var data = {
        username:this.username, 
        password:this.password
      }
      console.log('data',data);
      window.localStorage.data = JSON.stringify(data);
      
      this.navCtrl.push(HomePage, {
        val:'HomePage'
    })
    }
  }

}
