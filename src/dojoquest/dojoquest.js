"use strict";
/*------------------------------------------------------------
 V. Dagoury, 2014-06-07

 dojoquest : is a project upon which I've put the aim of
 exploring dojo toolkit (1.9) capabilities with specific goals :
 - using the MVC pattern for a full CRUD SPA
 - data binding
 - views manipulation.

 It is based on many resources found on the Web :
 http://jamesthom.as/blog/2012/02/26/dojomvc-models/



 ----------------------------------------------------------------*/


// ------------------------------------------------------------
// Declare the module "dojoquest" which is our application
//
define(["dojo/Stateful", "dojo/_base/declare", "Todo"],
    function(Stateful, declare, Todo) {

        var dojoquest = declare([Stateful], {
            store: [],

            // Main init method for the application
            init: function() {

                var newTodo = new Todo();
                newTodo.setText("Cool thing");
                newTodo.setDone();

                this.store.add(newTodo);
            }
        });

        return dojoquest;
    });