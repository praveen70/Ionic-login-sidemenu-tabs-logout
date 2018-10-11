# Ionic-login-sidemenu-tabs-logout
sudo npm install -g ionic
#if your system is  linux use the above command


#Configure Platforms
Now, we need to tell ionic that we want to enable the iOS and Android platforms. Note: unless you are on MacOS, leave out the iOS platform:

$ ionic cordova platform add ios
$ ionic cordova platform add android

#cordova installation
#check the nodejs version using below command
nodejs --version

#Install Node.js via package manager
Run this

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo npm install -g cordova
sudo add-apt-repository ppa:cordova-ubuntu/ppa
sudo apt-get update
sudo apt-get install cordova-cli

#Download Oracle Java 8 Installer
  sudo add-apt-repository ppa:webupd8team/java
  sudo apt update
  sudo apt install oracle-java8-installer

#for build use the below command before that you should have a Android Sdk tools if your not having android sdk download it 
and export the ANDROID_HOME path its very much necessary otherwise it will throw the error "Android_Home path is missing",
and also install "JDK8"

ionic cordova build android 
ionic cordova build ios


-----------------------------------------------------------------------------------------------------------------------------
#In this path apk file is there go to this path download the apk file and install. 

Ionic-login-sidemenu-tabs-logout/ionic/platforms/android/app/build/outputs/apk/debug

#Username:admin
#password:admin
