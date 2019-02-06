'use strict';
var request = require('request');
var config = require('./config');

const headers = {
  Authorization: `key=${config.google.fcmkey}`,
  'Content-Type': 'application/json'
};

module.exports = (users, obj, cb) => {
  var TAG = 'fcm_multi';

  var message = {
    url: config.google.fcm,
    headers,
    json: true,
    body: {
      to: '/topics/' + users,
      priority: 'high',
      content_available: false
    }
  };
  if (obj.notification) {
    message.body.notification = obj.notification;
    message.body.notification.sound = 'eagle_sound.mp3';
  }
  if (obj.data) {
    message.body.data = obj.data;
  }
  console.log('TEMP MULTI', JSON.stringify({
    to: '/topics/' + users,
    notification: obj.notification,
    data: obj.data
  }));
  request.post(message, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      console.log(TAG, "Problems consulting directions api.", response && response.statusCode, err && err.stack);
      if (cb) {
        cb(err);
      }
    } else {
      if (cb) {
        cb(null, body);
      }
    }
    return;
  });
};
