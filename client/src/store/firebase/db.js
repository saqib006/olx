import firebase from './config';
var fire = firebase.database().ref("/");

//const messaging = firebase.messaging();
//messaging.deleteToken("e2DOelihayE:APA91bGTrSdOT-VrvaAcTmiUC49pK9A2FWeRizQ3i0FNW9YUNHojs3w6Zbf9qBcNyM15orOaksFSEgZJvaThtyo2TsaRSllf5yY81fectJnXCu6tmqFaTvt1-LS7uoOvWKvvpfAGWgYa")

export function initializePush() {
  const messaging = firebase.messaging();
  messaging
     .requestPermission()
     .then(() => {
        console.log("Have Permission");
        return messaging.getToken();
      })
     .then(token => {
      localStorage.setItem("fcm", token)
        console.log("FCM Token:", token);
        //you probably want to send your new found FCM token to the
        //application server so that they can send any push
        //notification to you.
      })
     .catch(error => {
        if (error.code === "messaging/permission-blocked") {
           console.log("Please Unblock Notification Request Manually");
        } else {
           console.log("Error Occurred", error);
        }
       });

       messaging.onMessage((payload)=>{
         console.log('messaging', payload)
       })


}


export function sendMsg(payload) {
    return new Promise((res, rej) => {
      fire
        .child("msg")
        .child(payload.userId)
        .push(
          {
            userId:payload.userId,
            sendTo:payload.sendTo,
            text: payload.text,
            postId:payload.postId
            
          },
          () => {
            res({
            sendTo:payload.sendTo,
            text: payload.text,
            postId:payload.postId
            });
          });
    })
  }


  export function getMsg(payload){
      console.log('fire', payload)
    return new Promise((res,rej)=>{
      fire.child('msg').child(payload).once("value", (snapshot)=>{
        res(objToArray(snapshot))
      })
    })
  }
  

  function objToArray(snapshot){
    var array = []
    snapshot.forEach(snap => {
      var value = snap.val();
      value.key = snap.key;
  
      array.push(value)
  
    })
    return array;
  }