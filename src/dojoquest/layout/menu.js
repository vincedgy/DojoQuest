"use strict";
/*------------------------------------------------------------
 V. Dagoury, 2014-06-07

 dojoquestMenu :
 compose the menu bar

 ----------------------------------------------------------------*/

require([
    "dijit/MenuBar",
    "dijit/PopupMenuBarItem",
    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/DropDownMenu",
    "dijit/MenuSeparator",
    "controller",
    "dojo/domReady!"
], function(MenuBar, PopupMenuBarItem, Menu, MenuItem, DropDownMenu, MenuSeparator, controller) {
    var pMenuBar = new MenuBar({},"mainMenu");

    var pSubMenu = new DropDownMenu({});

    var exitMenuItem = new MenuItem({
        id: "new",
        label: "{N}ew",
        iconClass: "dijitCommonsIcons dijitIconNewTask",
        title: "Create an new document",
        onClick: function() { controller.raiseNew() }
    });

    pSubMenu.addChild(exitMenuItem);

    pSubMenu.addChild(new MenuItem({
        id: "open",
        label: "Open",
        iconClass: "dijitCommonsIcons dijitFolderOpened",
        title: "Open an existing document"
    }));
    pSubMenu.addChild(new MenuSeparator());

    pSubMenu.addChild(new MenuItem({
        id: "exit",
        label: "Exit",
        iconClass: "dijitCommonsIcons dijitIconDelete",
        title: "Save & quit this application",
        onClick: function() { controller.raiseExit() }
    }));
    pMenuBar.addChild(new PopupMenuBarItem({
        label: "File",
        popup: pSubMenu
    }));

    var pSubMenu2 = new DropDownMenu({});
    pSubMenu2.addChild(new MenuItem({
        label: "Cut",
        iconClass: "dijitEditorIcon dijitEditorIconCut"
    }));
    pSubMenu2.addChild(new MenuItem({
        label: "Copy",
        iconClass: "dijitEditorIcon dijitEditorIconCopy"
    }));
    pSubMenu2.addChild(new MenuItem({
        label: "Paste",
        iconClass: "dijitEditorIcon dijitEditorIconPaste"
    }));
    pMenuBar.addChild(new PopupMenuBarItem({
        label: "Edit",
        popup: pSubMenu2
    }));


    pMenuBar.startup();
});