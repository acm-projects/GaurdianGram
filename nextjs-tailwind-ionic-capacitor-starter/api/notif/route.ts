// Notification.requestPermission(function(status) {
//     console.log('Notification permission status:', status);
// });

// function displayNotification() {
//     if (Notification.permission=='granted') {
//         navigator.serviceWorker.getRegistration()
//         .then(function(reg) {
//         reg.showNotification('Hello world!');
//     });
//     }
// }

navigator.serviceWorker.getRegistration().then(reg => {
    reg?.pushManager.subscribe({
        userVisibleOnly: true
    }) .then(sub => {
        // send sub.toJSON() to server
    })
})