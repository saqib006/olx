importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-messaging.js");




let config = {
    messagingSenderId: "311567804894"
 };
 firebase.initializeApp(config);
 const messaging = firebase.messaging();
 messaging.setBackgroundMessageHandler(payload => {
    const title = payload.notification.title;
    console.log('payload', payload.notification.icon);
    const options = {
       body: payload.notification.body,
       icon: payload.notification.icon
    }
    return self.registration.showNotification(title, options);
 })


 self.addEventListener("notificationclick", function(event) {
    const clickedNotification = event.notification;
    clickedNotification.close();
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
         })
        .then(windowClients => {
            let matchingClient = null;
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                if (windowClient.url === feClickAction) {
                    matchingClient = windowClient;
                    break;
                }
            }
            if (matchingClient) {
                return matchingClient.focus();
            } else {
                return clients.openWindow(feClickAction);
            }
        });
        event.waitUntil(promiseChain);
 });

 /*

curl -X POST --header "Authorization: key=AAAASIrjad4:APA91bFmGk1Sn0T1Z3wJrSDo4CgyC12WZpe1C6txI3WEpZDBLTj_cm8-X4zdpDLE_9rEkogMKa7U18KVH0IUAbEJvEByJzd1e9YsgcPkFEZtv7DZP5N71_lVRGxBK5jfJT-Maeczstp4" --header "Content-Type: application/json" -d "{\"to\":\"e2DOelihayE:APA91bGTrSdOT-VrvaAcTmiUC49pK9A2FWeRizQ3i0FNW9YUNHojs3w6Zbf9qBcNyM15orOaksFSEgZJvaThtyo2TsaRSllf5yY81fectJnXCu6tmqFaTvt1-LS7uoOvWKvvpfAGWgYa\",\"priority\":\"high\",\"notification\":{\"body\": \"FOO BAR BLA BLA\"}}" "https://fcm.googleapis.com/fcm/send"

 */


/*server key

AAAASIrjad4:APA91bFmGk1Sn0T1Z3wJrSDo4CgyC12WZpe1C6txI3WEpZDBLTj_cm8-X4zdpDLE_9rEkogMKa7U18KVH0IUAbEJvEByJzd1e9YsgcPkFEZtv7DZP5N71_lVRGxBK5jfJT-Maeczstp4

*/