/**
 * Created by Vincent on 08/06/14.
 */

'use strict';

require(["dojo/Stateful", "dojo/_base/declare"], function(Stateful, declare) {
    // Subclass dojo/Stateful:
    var StoreClass = declare([Stateful], {
        foo: null,
        _fooGetter: function() {
            return this.foo;
        },
        _fooSetter: function(value) {
            this.foo = value;
        }
    });

    // Create an instance and set some initial property values:
    var Store = new StoreClass({
        foo: "baz"
    });

    // Watch changes on a property:
    Store.watch("foo", function(name, oldValue, value) {
        // Do something based on the change
    });

    // Get the value of a property:
    Store.get("foo");

    // Set the value of a property:
    Store.set("foo", "bar");
});