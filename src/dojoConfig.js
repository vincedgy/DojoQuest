"use strict";

var dojoConfig = {
    has: {
        "dojo-debug-messages": true
    },
    async: true,
    isDebug: true,
    parseOnLoad: true,
    baseUrl: "/dojoquest/",
    packages: [
        // Modules
        { name: "dojo", location: "/resources/dojo" },
        { name: "dojox", location: "/resources/dojox" },
        { name: "dijit", location: "/resources/dijit" },

        // Main Application
        { name: "dojoquest", location: "/dojoquest", main: "dojoquest"},

        // Menu & Layout
        { name: "layout", location: "/dojoquest/layout", main: "layout"},
        { name: "menu", location: "/dojoquest/layout", main: "menu"},

        // Models
        { name: "Store", location: "/dojoquest/models", main: "Store"},
        { name: "Todo", location: "/dojoquest/models", main: "Todo"},
        { name: "Notification", location: "/dojoquest/models", main: "Notification"},

        // Controller
        { name: "controller", location: "/dojoquest/controllers", main: "controller"},

        // Services
        { name: "notificationService", location: "/dojoquest/services", main: "notificationService"},

        // Views
        { name: "views", location: "/dojoquest/views"}

    ]
};