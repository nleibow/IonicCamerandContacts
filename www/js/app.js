// Ionic Starter App

var app = angular.module('starter', ['ionic','ngCordova'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
//injecting the cordova plugins to gain access to camera ($cordovaCamera) and contacs($cordovaContacs)
app.controller("ContactsController", function($scope, $cordovaContacts, $ionicPlatform, $cordovaCamera){
  $ionicPlatform.ready(function(){
    $scope.contacts = {};
    //**************created this next function in order to try and add contacts through the simulator. Now testing on real device, so not needed
    

    // $scope.contact = {
    //         "displayName": "Nathan Leibowitz",
    //         "name": "Nathan",    
    //         // "nickname": 'N-Dog',
    //         "phoneNumber":  '303-653-7882',         
    //         "emails": "nathan.leibowitz@gmail.com",
    //         "addresses": "45 tudor city", 
    //         "birthday": "12/09/1993",
    //         "note": "He finally got a contact to save!",
    //         "urls": "nathanleibowitz.codes"
    //     };

        // $scope.addContact = function() {
        //     console.log('You are adding a contact! ');
        //     $cordovaContacts.save($scope.contact).then(function(result) {
        //         console.log('Contact is Saved!');
        //     }, function(err) {
        //         console.log('save didnt work');
        //     });
        // };

      $scope.getAllContacts = function() {
        $cordovaContacts.find(
         {filter : '', multiple: true
         //****This =>( ,desiredFields: [ 'displayName', 'phoneNumber'])can be added in to be more specific about items you want to retrieve
     }).then(function(allContacts) { 
          $scope.contacts = allContacts;
          console.log('you are a single console.log away!');
            console.log(JSON.stringify(allContacts));

    });
  };    
  //begining of take picture function. 
    $scope.takePic = function(){
        var options = { 
            quality : 75, //
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
            console.log('pic is almost in');
        }, function(err) {
            console.log('picture is not coming up');
        });
    };

    });
          
});






