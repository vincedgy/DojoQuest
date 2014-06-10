/**
 * Created by Vincent on 09/06/14.
 */

'use strict';

define(["dojo/Stateful", "dojo/_base/declare"],
    function(Stateful, declare) {
        // model : notification
        var Notification = declare([], {
            notif: "",
            timestamp: new Date(),

            constructor: function(value, timestamp) {
                this.notif = value;
                this.timestamp = timestamp;
            },
            _notifGetter: function() {
                return this.notif;
            },
            _notifSetter: function(value) {
                this.notif = value;
            },

            toString: function() {
                return "[notif:" + this.notif + ", timestamp:" + this.timestamp + "]";
            }
        });
        return Notification;
    });