'use strict';

const _ = require('lodash');
const request = require('https');
const config = require('./config');
const https = require('https');



module.exports = new Promise(function (fcm_id, notificationObject, google_key, resolve, reject) {
  // if (!_.isString(fcm_id)) {
  //   return reject('error');
  // }
  // if (_.isEmpty(google_key)) {
  //   return reject('error');
  // }
  // if (!fcm_id.length) {
  //   return reject('error');
  // }
  // let fcmBody = {
  //   registration_ids: fcm_id,
  //   priority: 'high',
  //   content_available: true
  // };
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
  let data = JSON.stringify(notificationObject);
  const options = {
    hostname: config.google.fcm,
    method: 'POST',
    headers: {
      Authorization: `key=${google_key}`,
      'Content-Type': 'application/json'
    }
  }

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', (d) => {
      process.stdout.write(d)
    })
  })

  req.on('error', (error) => {
    return reject(error);
  })

  req.write(data);
  req.end();
  resolve(data);
  // }, (err, response, body) => {
  //   if (err || response.statusCode !== 200) {
  //     console.log('Sent single err - Problems consulting directions api.', err, body);
  //     return cb(null, {});
  //   }
  //   let res_fcm = {};
  //   _.forEach(body.results, (r, index) => {
  //     if (!res_fcm[fcm_inverse[fcm_ids[index]]]) {
  //       res_fcm[fcm_inverse[fcm_ids[index]]] = [];
  //     }
  //     //busca el id en el conductor
  //     res_fcm[fcm_inverse[fcm_ids[index]]].push(r);
  //   });
  //   return cb(null, res_fcm);
  // });
});

