"use strict";

define(["dojo/Stateful", "dojo/_base/declare"],
    function(Stateful, declare) {
        return declare([Stateful], {
            // Attributes
            text: "",
            done: false,
            // constructor
            constructor: function(text){
                this.text = text;
                this.done = false;
            },
            getText: function() {
                return this.text;
            },
            setText: function(value) {
                this.text = value;
            },
            setDone: function() {
                this.done=true;
            },
            isDone: function() {
                return this.done;
            }
        });
    });