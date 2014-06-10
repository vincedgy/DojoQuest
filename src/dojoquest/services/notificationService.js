"use strict";
/*------------------------------------------------------------
 V. Dagoury, 2014-06-07

 notificationService :
 one central point for notification handling

 ----------------------------------------------------------------*/

define(["dojo/Stateful", "dojo/_base/declare", "Notification"],
    function(Stateful, declare, Notification) {
        //
        var notificationService = declare([Stateful], {
            notifications: [],
            nbNotif:0,

            _notificationsGetter: function() {
                return this.notifications;
            },
            _notificationsSetter: function(value) {
                this.notifications = value;
            },
            _nbNotifGetter: function() {
                return this.nbNotif;
            },
            _nbNotifSetter: function(value) {
                this.nbNotif = value;
            },

            publish: function(text) {
                this.notifications.push(new Notification(text, new Date()));
                this.set("nbNotif", this.nbNotif+1);
            },

            getLast: function() {
                return this.notifications[this.notifications.length - 1];
            },

            get: function() {
                return this.notifications;
            }
        });

        return notificationService;
    })
;