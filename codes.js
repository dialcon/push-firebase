//-- Message Receiver for user / driver
// var receiver = {
// 	driver: [2, 3, 5, 13, 14, 15, 17, 19, 20, 23, 26, 27, 28, 29, 30, 31, 32],
// 	passenger: [1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 25, 24, 33, 35]
// };

var codes = {
  no_drivers_availables: 1,
  trip_available: 2,
  trip_start: 3,
  trip_completed: 4,
  trip_cancelled: 5,
  trip_took_away: 6,
  trip_check_in: 7,
  trip_updated: 8,
  trip_checked_in: 9,
  trip_arrived: 10,
  trip_arriving: 11,
  trip_discount: 12,
  user_message: 13,
  personal_code_redeem: 14,
  promo_code_redeem: 15,
  payment_error: 16,
  inapp_message: 17,
  special_alliance: 18,
  trip_accepted: 19,
  trip_skipped: 20,
  reservation_available: 21,
  trip_soon: 22,
  trip_started: 23,
  trip_reserved: 24,
  driver_changed: 25,
  select_car: 26,
  reservation_need_start: 27,
  assigned_trip: 28,
  reservation_cancelled: 29,
  refresh_reserves: 30,
  remove_reserve: 31,
  trip_forced_finish: 32,
  reload_trip: 33,
  user_alliance_changed: 34,
  trip_finish: 35,
  driver_force_logout:40,
  driver_force_login_attempt:41,
  trip_win:50
};

module.exports = codes;
