"use strict";
/*------------------------------------------------------------
 V. Dagoury, 2014-06-07

 dojoquestEventsHandler :
 one central point for handling events

 ----------------------------------------------------------------*/

define(["dojo/query", "dojo/dom-construct", "dojo/_base/array", "dojo/date/locale", "notificationService"],
    function(query, domConstruct, arrayUtil, locale, notificationService) {
        return {

            notifService: notificationService,

            init: function() {
                var self = this;
                // Watch changes on a property:
                this.notifService = new notificationService();
                this.notifService.watch("nbNotif", function(name, oldValue, value) {

                    // Create a new list
                    domConstruct.destroy("notifListUl");
                    var domList = domConstruct.create("ul", { id : "notifListUl" }, "notifList", "first");
                    // Push every notifications whithin
                    arrayUtil.forEach(self.notifService.get(), function(data){
                        var li = domConstruct.create(
                            "li", {   innerHTML: locale.format(data.timestamp,"yyyy-MM-dd HM:mm:ss.SSS")
                                    + " : <strong>" + data.notif + "</strong>"
                            }, domList);
                    });

                });
            },

            // Handling new event
            raiseNew: function() {
                this.notifService.publish("Raising New stuff ");
            },

            // Handling exit event
            raiseExit: function() {
                this.notifService.publish("Confirm quittong");
                if(confirm('Are you sure ?')) {
                    this.notifService.publish("Saving...");
                    alert('Saving...');

                    this.notifService.publish("Quiting...");
                    window.close();
                }
            }
        };
    });