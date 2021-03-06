'use strict';


const https = require('https');



module.exports = function (fcm_id, notificationObject, google_key) {
  return new Promise(function (resolve, reject) {
    if (_.isEmpty(google_key)) {
      return reject('error');
    }
    if (!fcm_id.length) {
      return reject('error');
    }
    let fcmBody = {
      registration_ids: fcm_id,
      priority: 'high',
      content_available: true
    };
    fcmBody.notification = notificationObject.notification;
    // if (_.isObject(notificationObject.notification) && !_.isArray(notificationObject.notification)) {
    //   fcmBody.notification = _.clone(notificationObject.notification);
    //   if (!fcmBody.notification.sound) {
    //     fcmBody.notification.sound = 'eagle_sound.mp3';
    //   }
    //   if (!fcmBody.notification.android_channel_id) {
    //     fcmBody.notification.android_channel_id = 'miaguila';
    //   }
    // }
    // if (notificationObject.time_to_live) {
    //   fcmBody.time_to_live = notificationObject.time_to_live;
    // }
    // if (notificationObject.data) {
    //   fcmBody.data = _.clone(notificationObject.data);
    // }
    let data = JSON.stringify(fcmBody);
    let options = {
      hostname: 'fcm.googleapis.com',
      method: 'POST',
      path: '/fcm/send',
      headers: {
        Authorization: `key=${google_key}`,
        'Content-Type': 'application/json'
      }
    };

    let req = https.request(options, function (res) {
      res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
      });
    });

    req.on('error', function (error) {
      console.log(error);
      reject(error);
    });

    req.write(data);
    req.end();
    resolve(null, 'done');

  });
};

