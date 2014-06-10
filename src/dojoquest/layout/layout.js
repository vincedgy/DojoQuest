"use strict";
/*------------------------------------------------------------
 V. Dagoury, 2014-06-07

 dojoquestLayout :
 compose the layout

 ----------------------------------------------------------------*/

require(["dojo/query",
    "dijit/Dialog",
    "dijit/layout/BorderContainer",
    "dijit/layout/TabContainer",
    "dijit/layout/ContentPane",
    "dijit/layout/AccordionContainer",
    "dijit/form/Button",
    "dojo/text!views/header.html",
    "dojo/text!views/footer.html",
    "dojo/text!views/cell.html",
    "dojo/domReady!"],
    function(query, Dialog, BorderContainer, TabContainer, ContentPane, AccordionContainer,Button,
             headerTemplate, footerTemplate, cellTemplate) {

        // Build the border container
        var bc = new BorderContainer({ design: "headline", class: "container" }, "appLayout");

        // Top ContentPane
        var cp1 = new ContentPane({ region: "top", class: "header", content: headerTemplate });
        bc.addChild(cp1);

        // Left TabContainer and ContentPanes
        var ac1 = new AccordionContainer({ region: "left", class: "leftPanel", splitter: true });
        bc.addChild(ac1);
        var cp11 = new ContentPane({ title: "Tab1", content: "Tab1 content" });
        ac1.addChild(cp11);
        var cp12 = new ContentPane({ title: "Tab2", content: "Tab2 content" });
        ac1.addChild(cp12);

        // Center ContentPanes
        var tc2 = new TabContainer({ region: "center", class: "centerPanel" });
        bc.addChild(tc2);
        var cp21 = new ContentPane({ title: "Tab1.1", content: "Tab1 content" });
        tc2.addChild(cp21);
        var cp22 = new ContentPane({ title: "Tab2.2", content: "Tab2 content" });
        tc2.addChild(cp22);

        // Right ContentPanes
        var cp31 = new ContentPane({ region: "right", class: "rightPanel", splitter: true,
            content: "Right content" });
        bc.addChild(cp31);

        // Bottom ContentPane
        var footerPane = new ContentPane({ region: "bottom", class: "footer",
            content: footerTemplate });
        bc.addChild(footerPane);

        // Create the welcome dialog
        var welcomeDialog = new Dialog({
            id: "welcomeDialog",
            title: "Welcome",
            content: cellTemplate
        });

       // parse and render
        query("#overlay").style("visibility", "hidden");
        bc.startup();
        welcomeDialog.show();

    });