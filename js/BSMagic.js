/******* SLIDING TAB Function *****/
/*       This function will       */
/*   create a sliding animation   */
/*   between tabs when clicking   */
/*     on next tab or clicking    */
/*         next tab button        */
/**********************************/

// Usage: make tab menu parent div contain class "nav-pills", make each tab item (usually li) contain class "nav-link"
// make any "Next" button contain class "nextButtonBS" and any "Back" button conain "backButtonBS"
// Pure Javascript with dependency on gsam which is also pure javascript and no dependencies

/*
    * ctrl + shift + z = define;  ctrl + shift + x = document function;  ctrl + shift + c = console; 
*/ 

// TODO - Add slide buttons
// TODO - clear init and anim calls
// TODO - create functions for update active tab and update inactive tabs



// this is a finction to get the next nav-link
var getNextSibling = function (elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.nextElementSibling;
    }
};

// this is a finction to get the next nav-link
var getPreviousSibling = function (elem, selector) {
    // Get the next sibling element
    var sibling = elem.previousElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.previousElementSibling;
    }
};

/*
    * #define getCommonAncestor - used to find the first parent element or two elements. 
*/
function getCommonAncestor(node1, node2) {
    var method = "contains" in node1 ? "contains" : "compareDocumentPosition",
        test = method === "contains" ? 1 : 0x10;

    while (node1 = node1.parentNode) {
        if ((node1[method](node2) & test) === test)
            return node1;
    }

    return null;
}

function BSMagic(parameters) {

    // get parent object, this way we can have multiple controls on the same page
    var BSObject = document.getElementById(parameters.id);

    /*
    * #define Themes - This will be moved to a separate file later for portability
    */
    if (parameters.theme == "Magic1") { //blue oval button with white text

        parameters.showBottomNavBS = true;
        parameters["navTabActiveBS.color"] = "white";
        parameters["navTabActiveBS.background-color"] = "#00bcd4";
        parameters["navTabActiveBS.shape"] = "oval";
        //  parameters.navUnderline = true;
        //  parameters.navShadow = true;
    } else if (parameters.theme == "Magic2") { // Glass - white square button with blue underline and shadow and blue text
        parameters.showBottomNavBS = true;

    parameters["tabBS.boxShadow"] = "-6px -6px 16px #FFFFFF, 6px 6px 16px #BECDE2";

        // NavShapeSquare2
    parameters["navTabActiveBS.height"] = "52px !important";
    parameters["navTabActiveBS.text-align"] = "center";
    parameters["navTabActiveBS.padding"] = "12px";
    parameters["navTabActiveBS.font-weight"] = "500";
    parameters["navTabActiveBS.border-radius"] = "10px";
    parameters["navTabActiveBS.box-shadow"] = "0px 2px 11px -10px rgba(0, 188, 212, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), inset 1px 6px 0px 0px rgba(0, 188, 212, 0.2)";

    parameters["navTabActiveBS.color"] = "blue";
    parameters["navTabActiveBS.background-color"] = "transparent";
    parameters["navTabActiveBS.shape"] = "square";
    parameters.navUnderline = true;
    parameters.navShadow = true;
   
    parameters["buttonBarBS.color"] = "#b6c4d2";
    parameters["buttonBarBS.text-shadow"] = "0px 3px 3px rgba(255,255,255,0.5)";
    parameters["buttonBarBS.background-color"] = "#f4f6f9";
    parameters["buttonBarBS.box-shadow"] = "-6px -6px 16px #FFFFFF, 6px 6px 16px #BECDE2";


    //   .nav-pills2 
    parameters["navBarBS.background-color"] = "transparent";
    parameters["navBarBS.box-shadow"] = "0 16px 26px -10px rgba(0, 188, 212, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)";

    //   .customTabFlair
    parameters["navTabActiveFlairBS.margin"] = "0px -1px";
    parameters["navTabActiveFlairBS.border-top"] = "3px solid #f0a5a5";
    parameters["navTabActiveFlairBS.border-radius"] = "30px";
    parameters["navTabActiveFlairBS.width"] = "20%";
    parameters["navTabActiveFlairBS.margin"] = "-2% 0% 0% 40%";
    parameters["navTabActiveFlairBS.box-shadow"] = "0 0px 0px rgba(0, 0, 0, 0.25), 0px 4px 12px 2px rgba(0, 0, 0, 0.22)";
    parameters["navTabActiveFlairBS.box-shadow"] = "unset !important";


       

    }
    else if(parameters.theme == "Magic3"){
        parameters["tabBS.boxShadow"] = "-6px -6px 16px #FFFFFF, 6px 6px 16px #BECDE2";
        parameters["navBarBS.boxShadow"] = "-6px -6px 16px #FFFFFF, 6px 6px 16px #BECDE2";
        parameters["navBarFlairBS.box-shadow"] = "-6px -6px 16px #FFFFFF, 6px 6px 16px #BECDE2";
        parameters["navBarFlairBS.width"] =  100;
        parameters["navBarFlairBS.height"] =  5;
        parameters["navTabActiveBS.shape"] =  "oval";
        parameters["navBarFlairBS.background-color"] =  "purple";
        parameters["navTabActiveBS.box-shadow"] = "-6px -6px 16px #FFFFFF, 6px 6px 16px #BECDE2";
        parameters["navTabInactiveBS.box-shadow"] = "initial";
        parameters["navTabActiveBS.color"] =  "#b6c4d2";
        parameters["navTabActiveBS.text-shadow"] = "0px 3px 3px rgba(255,255,255,0.5)";
        parameters["navTabActiveBS.background-color"] =  "#f4f6f9";
        parameters["navTabActiveBS.font-size"] =  "25px";
        parameters["navTabActiveBS.padding"] =  "4px 0 0 0";
        parameters["navTabActiveBS.color"] = "rgb(14, 95, 175)";
        parameters["buttonBarBS.color"] =  "#b6c4d2";
        parameters["buttonBarBS.text-shadow"] = "0px 3px 3px rgba(255,255,255,0.5)";
        parameters["buttonBarBS.background-color"] =  "#f4f6f9";
        parameters["buttonBarBS.box-shadow"] = "-6px -6px 16px #FFFFFF, 6px 6px 16px #BECDE2";
        parameters["nextButtonBS.color"] = "#b6c4d2";
        parameters["nextButtonBS.text-shadow"] = "0px 3px 3px rgba(255,255,255,0.5)";
        parameters["nextButtonBS.background-color"] =  "#f4f6f9";
        parameters["nextButtonBS.box-shadow"] = "-6px -6px 16px #FFFFFF, 6px 6px 16px #BECDE2";
        parameters["tabContentBS.color"] = "rgb(14, 95, 175)";
        parameters["tabContentBS.font-size"] =  "medium";
        parameters["tabContentBS.text-shadow"] = "0px 3px 3px rgba(255,255,255,0.5)";
        parameters["tabContentBS.background-color"] =  "#f4f6f9";
        parameters["tabContentBS.box-shadow"] = "-6px -6px 16px #FFFFFF, 6px 6px 16px #BECDE2";
        parameters["nextButtonBS.color"] = "rgb(14, 95, 175)";
    }

    /*
        * #assign defualt values for parameters not called 
    */
   parameters = parameterDefaults(parameters);

    /*
        * #determine if tabs are vertically alignmened and make changes accordingly
    */
    //create variable to determine if we have vertical tabs
    var vertical = false;

    // convert nav-tabs to nav-pills
    if(parameters.id == "JTab3"){
        console.log("are these nav-tabs changing to nav-pills?");
    }

    var i, elements = BSObject.getElementsByClassName('nav-tabs');
    for (i = elements.length; i--;) {
        elements[i].className += " nav-pills";
        elements[i].style.setProperty("background-color", "transparent");

        elements[i].classList.remove("nav-tabs");
        
    }

    //see if we have vertical tabs
    if (BSObject.getElementsByClassName('nav-pills')[0].classList.contains('flex-column')) {
        vertical = true;
    }



     /*
        * #map up all the components so we can control and alter them 
    */
    defineElements(BSObject,parameters);


/*
    * #calculate the active tab and width of each tab 
*/
    var navpills = BSObject.getElementsByClassName("nav-pills");
    // grabs the first tab and sets it as active
    if(navpills[0].getElementsByClassName("nav-link")[0] !== undefined)
     JCurTab = navpills[0].getElementsByClassName("nav-link")[0];
     else
     JCurTab = navpills[0];

    JCurTab.className += " active";

    //find and number all tabs
    var tabs = navpills[0].getElementsByClassName("nav-link");
    for ( i = 0; i < tabs.length; i++) {
        tabs.item(i).setAttribute('data-tab', i);
        tabs.item(i).setAttribute('data-parent', parameters.id);
    }

    //find and number all tabs containers
    var tabPanes = BSObject.getElementsByClassName("tab-pane");
    for ( i = 0; i < tabPanes.length; i++) {
        tabPanes.item(i).setAttribute('data-tabPane', i);
        tabPanes.item(i).setAttribute('data-parent', parameters.id);
    }

    //divide the navbar width into equal space for each tab (Horizonal)
    // each Navbar item identified by having class="nav-link"
    var navlinks = getInactiveTabs(BSObject,parameters);
    var jtotal = navlinks.length;
    jwidth = 100 / jtotal;

    Array.prototype.forEach.call(navlinks, function (tab) {
        // if parent contain nav-pills that we don't have the nav-link in a wrapper
        if (tab.parentElement.classList.contains("nav-pills")){
            tab.style.width = jwidth + '%';
            btnCopy = BSObject.querySelectorAll(".nav-link.active")[0];
            navrect = btnCopy.getBoundingClientRect();
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.top = navrect.top;
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.left = navrect.left;
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.width = navrect.width;
            removeStyles(getActiveTab(BSObject, parameters)[0]);
        }
        else{
            tab.parentElement.style.width = jwidth + '%';
            btnCopy = BSObject.querySelectorAll(".nav-link.active")[0];
            navrect = btnCopy.getBoundingClientRect();
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.top = navrect.top;
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.left = navrect.left;
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.width = navrect.width;
            removeStyles(getActiveTab(BSObject, parameters)[0]);
        }
    });

   

    //make vertical alignment even if using vertical tabs
    if (vertical == true) {

        element = BSObject.getElementsByClassName('flex-column')[0];
        height = element.getBoundingClientRect().height;
        width = element.getBoundingClientRect().width;
        elementHeight = height / jtotal;


        Array.prototype.forEach.call(navlinks, function (tab) {
            // if parent contain nav-pills that we don't have the nav-link in a wrapper
            if (tab.parentElement.classList.contains("nav-pills")) {
                tab.style.height = elementHeight + 'px';
                tab.style.width = width + 'px';
                tab.style.textAlign = "center";
            } else {
                tab.parentElement.style.height = elementHeight + 'px';
                tab.parentElement.style.width = width + 'px';
                tab.parentElement.style.textAlign = "center";
            }
        });

    }


    //find the currently active tab
    
  //  JCurTab = BSObject.querySelector('.nav-link.active');
    var pills = BSObject.getElementsByClassName('nav-pills')[0];
    var pane = BSObject.getElementsByClassName('tab-pane')[0];
    BSparent = getCommonAncestor(pills, pane);


    //add listeners to resize or relocate if scrolling or resizing
    window.addEventListener("resize", function () {
        console.log("call refresh from resize");
        ReFresh(BSObject, parameters);
        JAnimate(JCurTab,JCurTab,BSObject, parameters);
    });
    window.addEventListener("scroll", function () {
        console.log("call refresh from scroll");
        ReFresh(BSObject, parameters);
        JAnimate(JCurTab,JCurTab,BSObject, parameters);
    });


    if (vertical == true) {
        getCommonAncestor(pills, pane).classList += " BSVertical";
    } else {
        getCommonAncestor(pills, pane).classList += " BSHorizontal";
    }



    /*
        * TODO: port over all these 
    */

    if (parameters.navUnderline == true) {
        getCommonAncestor(pills, pane).classList += " NavUnderlineBlue";
    }

    if (parameters.navShadow == true) {
        getCommonAncestor(pills, pane).classList += " NavBlueShadow";
    }




    if (parameters.showBottomNavBS == true) {
        buttonBarBS(getCommonAncestor(pills, pane), parameters);
    }

    //check if first or last tab
    CheckTabLocation(JCurTab, BSObject, parameters);


    // if parent contain nav-pills that we don't have the nav-link in a wrapper
    if (JCurTab.parentElement.classList.contains("nav-pills")) {
        console.log("call init from base");
        Initialize(JCurTab, BSObject, parameters); // draw initial bo around starting tab
    } else {
        console.log("call init from base");
        Initialize(JCurTab.parentElement, BSObject, parameters); // draw initial bo around starting tab
    }



    /*
        * #make the first tab and the first tab content active 
    */
    elements = BSObject.getElementsByClassName("nav-link");
    i = 0;
    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            var JCurTab = BSObject.querySelector('.nav-link.active');
            var JNewTab = this;
            removeStyles(getActiveTab(BSObject, parameters)[0]);
            //check if we are on the first or last tab
            CheckTabLocation(JNewTab, BSObject, parameters);


            //if there is no next, then we know we just clicked submit button, otherwise which tab is active
            if (JCurTab.classList.contains("nav-link") && JNewTab != null) {
                JCurTab.classList.remove("active");
                JNewTab.className += " active";

                // now change which tab content is visible
                var JCurTabContent = BSObject.querySelector('.tab-pane.active');

                nextTabContentNumber = parseInt(JNewTab.getAttribute('data-tab'));
                var nextContent = BSObject.querySelectorAll('[data-tabpane="' + nextTabContentNumber + '"]')[0];


                JCurTabContent.classList.remove("active");
                JCurTabContent.classList.remove("show");
                nextContent.className += " active";
                nextContent.className += " show";
            }


            console.log("call anim from tab click");
            JAnimate(JCurTab, JNewTab, BSObject, parameters);

        });
    }


    //Add listeners for when next button is clicked
     elements = BSObject.getElementsByClassName("nextButtonBS");
    for ( i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            var JCurTab = BSObject.querySelector('.nav-link.active');
            var nextTabNumber = parseInt(JCurTab.getAttribute('data-tab')) + 1;
            var JNewTab = BSObject.querySelectorAll('[data-tab="' + nextTabNumber + '"]')[0];
            removeStyles(getActiveTab(BSObject, parameters)[0]);
             //check if we are on the first or last tab
            CheckTabLocation(JNewTab, BSObject, parameters);


            NextTab(JCurTab, JNewTab, BSObject, parameters);

        });
    }


    //Add listeners for when back button is clicked
     elements = BSObject.getElementsByClassName("backButtonBS");
    for ( i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            var JCurTab = BSObject.querySelector('.nav-link.active');
            var prevTabNumber = parseInt(JCurTab.getAttribute('data-tab')) - 1;
            var JPrevTab = BSObject.querySelectorAll('[data-tab="' + prevTabNumber + '"]')[0];
            removeStyles(getActiveTab(BSObject, parameters)[0]);
         
            //check if we are on the first or last tab
            CheckTabLocation(JPrevTab, BSObject, parameters);


            BackTab(JCurTab, JPrevTab, BSObject, parameters);

        });
    }

    console.log("Call anim from base");
    //animate the transition
    JAnimate(JCurTab, JCurTab, BSObject, parameters);




}

function parameterDefaults(parameters){
     /*
        * #define parameters - these will hold default vaules for parameters if left blank
    */
    //define if we want navigation buttons added
    if (parameters.showBottomNavBS === undefined) parameters.showBottomNavBS = true;

    //define if we want navigation buttons added
    if (parameters.tabBS === undefined) parameters.tabBS = "tabBS";

    //define bottom nav back button
    if (parameters.backButtonBS === undefined) parameters.backButtonBS = "backButtonBS";

    if (parameters["backButtonBS.margin"] === undefined) parameters["backButtonBS.margin"] = "10px 15px 10px 15px";

    //define bottom nav back button flair
    if (parameters.backButtonFlairBS === undefined) parameters.backButtonFlairBS = "backButtonFlairBS";

    //define bottom nav next button
    if (parameters.nextButtonBS === undefined) parameters.nextButtonBS = "nextButtonBS";


    if (parameters["nextButtonBS.margin"] === undefined) parameters["nextButtonBS.margin"] = "10px 15px 10px 15px";


    //define bottom nav next button flair
    if (parameters.nextButtonFlairBS === undefined) parameters.nextButtonFlairBS = "nextButtonFlairBS";

    //define active tab content
    if (parameters.tabContentBS === undefined) parameters.tabContentBS = "tabContentBS";

    //define active tab content
    if (parameters["tabContentBS.margin"] === undefined) parameters["tabContentBS.margin"] = "0px 0px";

    //define active tab content flair
    if (parameters.tabContentFlairBS === undefined) parameters.tabContentFlairBS = "tabContentFlairBS";

    //define if we want navigation buttons added
    if (parameters.buttonBarBS === undefined) parameters.buttonBarBS = "buttonBarBS";
;

    //define if we want navigation buttons added
    if (parameters.buttonBarFlairBS === undefined) parameters.buttonBarFlairBS = "buttonBarFlairBS";

    //define navigation shape, should be disabled if navTabActiveBS is defined
    if (parameters["navTabActiveBS.shape"] === undefined) parameters["navTabActiveBS.shape"] = "square";

    //define navigation background color
    if (parameters["navTabActiveBS.background-color"] === undefined) parameters["navTabActiveBS.background-color"] = "blue";

    //define navigation font color
    if (parameters["navTabActiveBS.color"] === undefined) parameters["navTabActiveBS.color"] = "white";

    //define if we want to underline navigation
    if (parameters.navUnderline === undefined) parameters.navUnderline = false;

    //define if we want add shadow to navigation
    if (parameters.navShadow === undefined) parameters.navShadow = false;

    if (parameters.nextText === undefined) parameters.nextText = "NEXT";

    if (parameters.prevText === undefined) parameters.prevText = "PREVIOUS";

    if (parameters.navOffsetX === undefined) parameters.navOffsetX = 0;

    if (parameters.navOffsetY === undefined) parameters.navOffsetY = 0;

    if (parameters.isWizard === undefined) parameters.isWizard = false;

    if (parameters.navTabActiveBS === undefined) parameters.navTabActiveBS = "navTabActiveBS";

    if (parameters.navTabActiveFlairBS === undefined) parameters.navTabActiveFlairBS = "navTabActiveFlairBS";

    if (parameters.navTabInactiveBS === undefined) parameters.navTabInactiveBS = "navTabInactiveBS";

    if (parameters.navTabInactiveFlairBS === undefined) parameters.navTabInactiveFlairBS = "navTabInactiveFlairBS";

    if (parameters.navTabTextOffetX === undefined) parameters.navTabTextOffetX = 0;

    if (parameters.navTabTextOffetY === undefined) parameters.navTabTextOffetY = 0;

    if (parameters.navBarBS === undefined) parameters.navBarBS = "navBarBS";

    if (parameters.navBarflairBS === undefined) parameters.navBarflairBS = "navBarflairBS";

    return parameters;
}

function addShapes (parameters, BSObject) {
    obj = parameters;
    // iterate over properties, increment if a non-prototype property
    for (var key in obj) {
        if (key.indexOf(".shape") !== -1) {
            baseObject = key.replace(".shape", "");

            parameterBaseElement = BSObject.getElementsByClassName(parameters[baseObject])[0];


            //define shapes as a one off declaration and starting point

            if (parameters[key] == "circle") {
                parameterBaseElement.style.textAlign = "center";
                parameterBaseElement.style.padding = "12px 0 12px 0";
               // parameterBaseElement.style.fontSize = "12px";
                parameterBaseElement.style.height = "45px !important";
                //  parameterBaseElement.style.top = "12px";
                //parameterBaseElement.style.fontWeight = "500";
                parameterBaseElement.style.borderRadius = "50%";
                parameterBaseElement.style.maxWidth = "50px";
                parameterBaseElement.style.maxHeight = "50px";

            }

            if (parameters[key] == "oval") {
                parameterBaseElement.style.textAlign = "center";
                parameterBaseElement.style.padding = "12px 0 12px 0";
              //  parameterBaseElement.style.fontSize = "12px";
                parameterBaseElement.style.height = "45px";
                //  parameterBaseElement.style.marginTop = "-45px";
                //  parameterBaseElement.style.top = "-155px"; //was 12
                //  parameterBaseElement.style.left = "0px"; //was not here
                parameterBaseElement.style.cursor = "pointer";
//parameterBaseElement.style.fontWeight = "500";
                parameterBaseElement.style.borderRadius = "24px";
                parameterBaseElement.style.backgroundColor = "green !important";

            }

            if (parameters[key] == "square") {
                parameterBaseElement.style.textAlign = "center";
                parameterBaseElement.style.padding = "12px 0 12px 0";
              //  parameterBaseElement.style.fontSize = "12px";
                parameterBaseElement.style.height = "45px !important";
                // parameterBaseElement.style.top = "12px";
                parameterBaseElement.style.cursor = "pointer";
                //parameterBaseElement.style.fontWeight = "500";
            }



        }
    }
}


/**
 * @description  this will tag all element locations for our manipulation
 * @author Jason Stover
 * @date 2020-04-24
 * @param {*} BSObject
 * @param {*} parameters
 */
function defineElements(BSObject,parameters){

    

   /*
       * #map navBarBS
   */
   BSObject.getElementsByClassName("nav-pills")[0].className += " " + parameters.navBarBS;

    /*
        * #map tabContentBS
    */
   BSObject.getElementsByClassName("tab-content")[0].className += " " + parameters.tabContentBS;
   // define tabContentFlairBS and add it to tabContentBS
   TabContentBS = document.createElement("div");
   /*
       * #map tabContentFlairBS 
   */
   TabContentBS.className += " " + parameters.tabContentFlairBS;
   BSObject.getElementsByClassName("tab-content")[0].appendChild(TabContentBS);
   navBarFlair = document.createElement("div");
   /*
       * #map navBarFlairBS
   */
   navBarFlair.className += " " + parameters.navBarFlairBS;
   BSObject.getElementsByClassName('nav-pills')[0].appendChild(navBarFlair);
   BSparent = getCommonAncestor( BSObject.getElementsByClassName('nav-pills')[0],  BSObject.getElementsByClassName('tab-pane')[0]);

  // BSObject.getElementsByClassName('nav-tabs')
   /*
       * TODO: add parameter for this to decorate the full outside of tab component
   */
   BSparent.classList += " BSMagic";
   BSparent.style.margin = "0 0 0 0";

    // create new div containing the drawing (nabTabActiveBS)
    var div = document.createElement("div");
    //create a sub div where "Flair" elements can be used for a secondary decorative overlay or layer on the main extra tab.  (nabTabActiveFlairBS)
    var divFlair = document.createElement("div");
    /*
        * #map navTabActiveFlairBS
    */
    divFlair.className += " " + parameters.navTabActiveFlairBS;
    /*
        * #map navTabActiveBS
    */
   getInactiveTabs(BSObject,parameters);
   div.className += " " + parameters.navTabActiveBS;
    // add Flair layer under main div layer
    div.appendChild(divFlair);


    if(BSObject.getElementsByClassName("nav-link")[0] !== undefined)
    BSObject.getElementsByClassName("nav-link")[0].parentElement.appendChild(div);
    else
    BSObject.parentElement.appendChild(div);

    act = getActiveTab(BSObject, parameters);
    removeStyles(act[0]);

    // define navTabInactiveBS
    inactiveList = getInactiveTabs(BSObject,parameters);
  //  if (BSObject.querySelectorAll(".nav-link:not(.active)"))
    for (const inActive of inactiveList) {

        if (!inActive.classList.contains(parameters.navTabActiveBS)) {
            /*
                * #map navTabInactiveBS
            */
            inActive.className += " " + parameters.navTabInactiveBS;


            //define navTabInactiveFlairBS, a sub div where "Flair" elements can be used for a secondary decorative overlay or layer on the main extra tab. 
            if (inActive.getElementsByClassName(parameters.navTabInactiveFlairBS).length == 0) {
                addFlair = document.createElement("div");
                addFlair.classList.remove(parameters.navTabInactiveFlairBS);
                /*
                    * #map navTabInactiveFlairBS
                */
                addFlair.className += " " + parameters.navTabInactiveFlairBS;
                addStyling(inActive, "navTabInactiveBS", parameters, BSObject.querySelector('.nav-link.active'));
                removeStyles(getActiveTab(BSObject, parameters)[0]);
                inActive.appendChild(addFlair);
            }
        }
    }


    /*
            * #fix margin offsets by making sure add direct children of ID have -15 margin on left and right side
    */
     //  fixHorz = BSObject.getElementsByClassName(parameters.tabBS);
     //  fixHorz[0].style.margin = "0 -15px 0 -15px";

     if(BSObject.getElementsByClassName("BSMagic")[0] !== undefined){
        BSObject.getElementsByClassName("BSMagic")[0].style.margin = "0 0 0 0";
        for (const chld of BSObject.getElementsByClassName("BSMagic")[0].children) {
            chld.style.margin = "0 -15px 0 -15px";
            if(chld.classList.contains("col-3")){
                chld.style.padding = "0 0 0 0";
                chld.style.margin = "0px 15px 0px -15px";
            }
            else if(chld.classList.contains("col-9")){
                chld.style.padding = "0 15px 0 15px";
              //  chld.style.margin = "0 0 0 0";
                chld.style.margin = "0px 15px 0px -15px";
            }
        }
    }
    else{
        BSObject.style.margin = "0 0 0 0";
        for (const chld of BSObject.children) {
            chld.style.margin = "0 -15px 0 -15px";
            if(chld.classList.contains("col-3")){
                chld.style.padding = "0 0 0 0";
                chld.style.margin = "0px 15px 0px -15px";
            }
            else if(chld.classList.contains("col-9")){
                chld.style.padding = "0 15px 0 15px";
              //  chld.style.margin = "0 0 0 0";
                chld.style.margin = "0px 15px 0px -15px";
            }
        }
    }



    
    /*
        * #map tabBS 
    */
   var divBase = document.createElement("div");
   divBase.className += " " + parameters.tabBS;
   baseRect = BSparent.getBoundingClientRect();
   divBase.style.width = baseRect.width+"px";
   divBase.style.height = baseRect.height+"px";
   BSparent.prepend(divBase);

   getInactiveTabs(BSObject, parameters);

}


function getInactiveTabs(BSObject, parameters){

    //YOU can identify active tabs with class-"active" under a (navBarBS or nav-pills)
        var rtnObject = [];
         navpills = BSObject.getElementsByClassName("nav-pills");
        // if not found, search for data-toggle="tab"
        if(navpills[0].getElementsByClassName("nav-link").length > 0)
         navlinks = navpills[0].getElementsByClassName("nav-link");
        else
         navlinks = BSObject.querySelectorAll("[data-toggle=\"tab\"]");

         // add nav-link identifier so we can find them easier going forward
             for (const nl of navlinks) {
                 
                nl.classList.add("nav-link");
                if(nl.parentElement.classList.contains("active")){
                    if(nl.classList.contains("active")){
                        nl.classList.remove("active");
                    }
                    nl.classList.add("active");
                    if(nl.classList.contains("navTabInactiveBS")){
                        nl.classList.remove("navTabInactiveBS");
                    }
                    rtnObject.push(nl);
                }
                if(nl.classList.contains("active")){
                    if(nl.classList.contains("active")){
                        nl.classList.remove("active");
                    }
                    nl.classList.add("active");
                    if(nl.classList.contains("navTabInactiveBS")){
                        nl.classList.remove("navTabInactiveBS");
                    }
                    rtnObject.push(nl);
                }
                if(!nl.classList.contains("active")){
                    if(nl.classList.contains("navTabInactiveBS")){
                        nl.classList.remove("navTabInactiveBS");
                    }
                    nl.classList.add("navTabInactiveBS");
                    if(nl.classList.contains("active")){
                        nl.classList.remove("active");
                    }
                    rtnObject.push(nl);
                }
            }
        
    
        return rtnObject;
    
    }


    function getActiveTab(BSObject, parameters){

        //YOU can identify active tabs with class-"active" under a (navBarBS or nav-pills)
            var rtnObject = [];
             navpills = BSObject.getElementsByClassName("nav-pills");
            // if not found, search for data-toggle="tab"
            if(navpills[0].getElementsByClassName("nav-link").length > 0)
             navlinks = navpills[0].getElementsByClassName("nav-link");
            else{
             navlinks = BSObject.querySelectorAll("[data-toggle=\"tab\"]");
            }
             // add nav-link identifier so we can find them easier going forward
                 for (const nl of navlinks) {
                    nl.classList.add("nav-link");
                    if(nl.parentElement.classList.contains("active")){
                        if(nl.classList.contains("active")){
                            nl.classList.remove("active");
                        }
                        nl.classList.add("active");
                        if(nl.classList.contains("navTabInactiveBS")){
                            nl.classList.remove("navTabInactiveBS");
                        }
                        rtnObject.push(nl);
                    }
                    if(nl.classList.contains("active")){
                        if(nl.classList.contains("active")){
                            nl.classList.remove("active");
                        }
                        nl.classList.add("active");
                        if(nl.classList.contains("navTabInactiveBS")){
                            nl.classList.remove("navTabInactiveBS");
                        }
                        rtnObject.push(nl);
                    }
                    if(!nl.classList.contains("active")){
                        if(nl.classList.contains("navTabInactiveBS")){
                            nl.classList.remove("navTabInactiveBS");
                        }
                        nl.classList.add("navTabInactiveBS");
                        if(nl.classList.contains("active")){
                            nl.classList.remove("active");
                        }
                       // rtnObject.push(nl);
                    }
                }
        
            return rtnObject;
        
        }


function buttonBarBS(topContainer, parameters) {
    console.log("create buttons");
    var buttombuttons = "<div class='" + parameters.buttonBarBS + "' style='justify-content:space-between;'><div class='" + parameters.buttonBarFlairBS + "'></div> <div class='float-right'> <button type='button' class='" + parameters.nextButtonBS + " btn btn-next btn-fill btn-danger btn-wd square' name='next' value='Next' >" + parameters.nextText + "</button> <div class='" + parameters.nextButtonFlairBS + "'></div>  </div><div class='float-left'><button type='button' class='" + parameters.backButtonBS + " btn btn-previous btn-fill btn-default btn-wd square' name='previous' value='Previous' >" + parameters.prevText + "</button>   <div class='" + parameters.backButtonFlairBS + "'></div> </div><div class='clearfix'></div></div>";
    topContainer.insertAdjacentHTML('beforeend', buttombuttons);
    topContainer.getElementsByClassName(parameters.buttonBarBS).item(0).setAttribute('data-parent', parameters.id);

    
    // topContainer.appendChild(buttombuttons);
}


// animate moving box from last tab to new tab
function JAnimate(JCurTab, JNewTab, BSObject, parameters) {
    console.log("janimate - should just be to add animation");



    //fix selection in nav-items not in a wrapper
    if (JCurTab.parentElement.classList.contains("nav-pills"))
        JCurTab = JCurTab;
    else
        JCurTab = JCurTab.parentElement;

    if (JNewTab.parentElement.classList.contains("nav-pills"))
        JNewTab = JNewTab;
    else
        JNewTab = JNewTab.parentElement;

    /*
        * #update which tab is active
    */
    // remove old box first so we don't create duplicates, possibly can remove later
    var i, elements = BSObject.getElementsByClassName(parameters.navTabActiveBS);
    for (i = elements.length; i--;) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    // remove old box Flair first so we don't create duplicates, possibly can remove later
     i, elements = BSObject.getElementsByClassName(parameters.navTabActiveFlairBS);
    for (i = elements.length; i--;) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    // create new div containing the drawing (nabTabActiveBS)
    var div = document.createElement("div");

    //create a sub div where "Flair" elements can be used for a secondary decorative overlay or layer on the main extra tab.  (nabTabActiveFlairBS)
    var divFlair = document.createElement("div");
    /*
        * #map navTabActiveFlairBS
    */
    divFlair.className += " " + parameters.navTabActiveFlairBS;

    var JCurtRect = JCurTab.getBoundingClientRect();
    var JNewRect = JNewTab.getBoundingClientRect();


    // Getting offsets between items
    Yoffset = Math.abs(JCurtRect.top - JNewRect.top);
    Xoffset = Math.abs(JCurtRect.left - JNewRect.left);

    // Get Width from one to the other
    FullWidth = JNewRect.width + Xoffset + 29; // 29 is added for for an unknown reason at the moment
    FullHeight = JNewRect.height + Yoffset;

    //need to redraw div otherwise movement will be be offset incorrectly - possible can remove later
    div.style.width = JCurtRect.width;

    div.style.position = "fixed";
    div.style.top = parseInt(JCurtRect.top) + parseInt(parameters.navOffsetY) - 12 + 'px'; //12 subtracted to add for padding in css
    div.style.left = parseInt(JCurtRect.left) + parseInt(parameters.navOffsetX) + 'px';
    div.style.pointerEvents = "none";
    /*
        * #map navTabActiveBS
    */
    div.className += " " + parameters.navTabActiveBS;
    div.innerHTML = JNewTab.innerHTML;


    if (div.children.length > 0) {
        div.children[0].style.left = parseInt(parameters.navTabTextOffetX) + "px";
        div.children[0].style.top = parseInt(parameters.navTabTextOffetY) + "px";
    }


    if (BSObject.querySelector('.nav-link.active').children.length > 0) {

        removeStyles(getActiveTab(BSObject, parameters)[0]);
        textOffset = BSObject.querySelector('.nav-link.active').children[0];
        textOffset.style.top = parseInt(parameters.navTabTextOffetY) + "px";
        textOffset.style.left = parseInt(parameters.navTabTextOffetX) + "px";
    }


    // add Flair layer under main div layer
    div.appendChild(divFlair);
    JCurTab.parentElement.appendChild(div);

    /*
        * #Fix tab count 
    */
    //now remove the nav-link class beneath so total tab count isn't incorrect
    if(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].children[0] !== undefined){
        tabActiveChild = BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].children[0];
        console.log("tabActiveChild");
        tabActiveChild.classList.remove("nav-link");
    }


    /*
        * #Fix tabJS offsets 
    */
   BSparent = getCommonAncestor( BSObject.getElementsByClassName('nav-pills')[0],  BSObject.getElementsByClassName('tab-pane')[0]);
   baseRect = BSparent.getBoundingClientRect();
   divBase = BSObject.getElementsByClassName(parameters.tabBS)[0];
   divBase.style.position = "absolute";
   divBase.style.width = baseRect.width+"px";
   

   /*
        * #Fix navBarBS offsets 
    */
   BSparent = getCommonAncestor( BSObject.getElementsByClassName('nav-pills')[0],  BSObject.getElementsByClassName('tab-pane')[0]);
   baseRect = BSparent.getBoundingClientRect();
   vertical = false;
   if (BSObject.getElementsByClassName('nav-pills')[0].classList.contains('flex-column')) {
    vertical = true;
    }

   if(vertical == false){
    navBarBSBase = BSObject.getElementsByClassName(parameters.navBarBS)[0];
    navBarBSBase.style.width = baseRect.width+"px";
   }
   
   /*
       * #Fix navTabActiveBS alignment
   */
  //divide the navbar width into equal space for each tab (Horizonal)
    // each Navbar item identified by having class="nav-link"
    
    var navlinks = getInactiveTabs(BSObject,parameters);
    // need to get count of nav-link under nav-pills but without nav-link parent of navTabActiveBS
    var jtotal = navlinks.length;
    jwidth = 100 / jtotal;

    Array.prototype.forEach.call(navlinks, function (tab) {
        // if parent contain nav-pills that we don't have the nav-link in a wrapper
        if (tab.parentElement.classList.contains("nav-pills")){
            tab.style.width = jwidth + '%';
            btnCopy = BSObject.querySelectorAll(".nav-link.active")[0];
            navrect = btnCopy.getBoundingClientRect();
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.top = navrect.top;
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.left = navrect.left;
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.width = navrect.width;
            removeStyles(getActiveTab(BSObject, parameters)[0]);
        }
        else{
            tab.parentElement.style.width = jwidth + '%';
            btnCopy = BSObject.querySelectorAll(".nav-link.active")[0];
            navrect = btnCopy.getBoundingClientRect();
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.top = navrect.top;
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.left = navrect.left;
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.width = navrect.width;
            removeStyles(getActiveTab(BSObject, parameters)[0]);
        }
    });


    //make vertical alignment even if using vertical tabs
    if (vertical == true) {

        element = BSObject.getElementsByClassName('flex-column')[0];
        height = element.getBoundingClientRect().height;
        width = element.getBoundingClientRect().width;
        elementHeight = height / jtotal;


        Array.prototype.forEach.call(navlinks, function (tab) {
            // if parent contain nav-pills that we don't have the nav-link in a wrapper
            if (tab.parentElement.classList.contains("nav-pills")) {
                tab.style.height = elementHeight + 'px';
                tab.style.width = width + 'px';
                tab.style.textAlign = "center";

               
            } else {
                tab.parentElement.style.height = elementHeight + 'px';
                tab.parentElement.style.width = width + 'px';
                tab.parentElement.style.textAlign = "center";
            }
        });

    }
    



    /*
            * #fix tabBS children margin offsets by making sure add direct children of ID have -15 margin on left and right side
    */
     //  fixHorz = BSObject.getElementsByClassName(parameters.tabBS);
     //  fixHorz[0].style.margin = "0 -15px 0 -15px";

    if(BSObject.getElementsByClassName("BSMagic")[0] !== undefined){
        BSObject.getElementsByClassName("BSMagic")[0].style.margin = "0 0 0 0";
        for (const chld of BSObject.getElementsByClassName("BSMagic")[0].children) {
            chld.style.margin = "0 -15px 0 -15px";
            if(chld.classList.contains("col-3")){
                chld.style.padding = "0 0 0 0";
                chld.style.margin = "0px 15px 0px -15px";
            }
            else if(chld.classList.contains("col-9")){
               // chld.style.padding = "0 0 0 0";
                chld.style.padding = "0 15px 0 15px";
              //  chld.style.margin = "0 0 0 0";
                chld.style.margin = "0px 15px 0px -15px";
            }
        }
    }
    else{
        BSObject.style.margin = "0 0 0 0";
        for (const chld of BSObject.children) {
            chld.style.margin = "0 -15px 0 -15px";
            if(chld.classList.contains("col-3")){
                chld.style.padding = "0 0 0 0";
                chld.style.margin = "0px 15px 0px -15px";
            }
            else if(chld.classList.contains("col-9")){
                //chld.style.padding = "0 0 0 0";
                chld.style.padding = "0 15px 0 15px";
              //  chld.style.margin = "0 0 0 0";
                chld.style.margin = "0px 15px 0px -15px";
            }
        }
    }

    /*
       * #Fix buttonBarBS alignment
   */
    tabBSRect = BSObject.getElementsByClassName(parameters.tabBS)[0].getBoundingClientRect();
   BSObject.getElementsByClassName(parameters.buttonBarBS)[0].style.position = "relative";
   BSObject.getElementsByClassName(parameters.buttonBarBS)[0].style.width = tabBSRect.width+"px";
    if(vertical == true){BSObject.getElementsByClassName(parameters.buttonBarBS)[0].style.margin = "0px -30px 0 -15px";}

   divBase.style.height = baseRect.height+"px";



    // define styles
    console.log("call addShapes - anim");
    addShapes(parameters, BSObject);

    console.log("call addStyling 1 - anim"); 
   
    addStyling(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0], "navTabActiveBS", parameters, JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navTabActiveFlairBS)[0], "navTabActiveFlairBS", parameters, JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0], "navTabInactiveBS", parameters, JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navTabInactiveFlairBS)[0], "navTabInactiveFlairBS", parameters, JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navBarBS)[0], "navBarBS", parameters, JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navBarFlairBS)[0], "navBarFlairBS", parameters, JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.tabContentBS)[0], "tabContentBS", parameters, JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.tabContentFlairBS)[0], "tabContentFlairBS", parameters, JCurTab);

    if (parameters.showBottomNavBS) {
        addStyling(BSObject.getElementsByClassName(parameters.buttonBarBS)[0], "buttonBarBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.buttonBarFlairBS)[0], "buttonBarFlairBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.backButtonBS)[0], "backButtonBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.backButtonFlairBS)[0], "backButtonFlairBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.nextButtonBS)[0], "nextButtonBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.nextButtonFlairBS)[0], "nextButtonFlairBS", parameters, JCurTab);
    }
    addStyling(BSObject.getElementsByClassName(parameters.tabBS)[0], "tabBS", parameters, JCurTab);



    // now animate the new div to expand to the nex location and then move over and shink or epand to new size
    // first check if GSAP is installed
    if (typeof TimelineLite !== 'undefined') {
        var tl = new TimelineLite();
        tl.eventCallback("onComplete", function () {
            console.log("call refresh from anim");
            ReFresh(BSObject, parameters);
        });

        tl.staggerFromTo(BSObject.getElementsByClassName(parameters.navTabActiveBS), 0.5, {
            y: JCurTab.top,
            x: JCurTab.left,
            width: Math.abs(FullWidth),
            height: Math.abs(FullHeight),
        }, {
            y: JNewRect.top - JCurtRect.top,
            x: JNewRect.left - JCurtRect.left,
            width: JNewRect.width,
            height: JNewRect.height,
            ease: "back"
        }, 0.5);

    } else { // if GSAP is not instlled, will still work but no animation
        console.log("call refresh from anim");
        ReFresh(BSObject, parameters);
    }



}


function Initialize(JCurTab, BSObject, parameters) {

    // this mainly just resizes tabs again, updates which tabs are active and inactive and refreshes the drawing

    console.log("initialize - should just be to identify hooks");
    var vertical = false;
    //see if we have vertical tabs
    if (BSObject.getElementsByClassName('nav-pills')[0].classList.contains('flex-column')) {
        vertical = true;
    }


    /*
        * #recalculate all tab widths again
    */
    // Navbar identified by having class="nav-pills"
    var navpills = BSObject.getElementsByClassName("nav-pills");
    // each Navbar item identified by having class="nav-link"

    // if not found, search for data-toggle="tab"
    if(navpills[0].getElementsByClassName("nav-link").length > 0)
     navlinks = navpills[0].getElementsByClassName("nav-link");
    else{
     navlinks = BSObject.querySelectorAll("[data-toggle=\"tab\"]");
     // add nav-link identifier so we can find them easier going forward

     for (const nl of navlinks) {
        nl.className += " nav-link";
    }


    }


    //make vertical alignment even if using vertical tabs
    navlinks = getInactiveTabs(BSObject,parameters);
    var jtotal = navlinks.length;
    jwidth = 100 / jtotal;

    
    if (vertical == true) {

        element = BSObject.getElementsByClassName('flex-column')[0];
        height = element.getBoundingClientRect().height;
        width = element.getBoundingClientRect().width;
        elementHeight = height / jtotal;

        Array.prototype.forEach.call(navlinks, function (tab) {
            // if parent contain nav-pills that we don't have the nav-link in a wrapper
            if (tab.parentElement.classList.contains("nav-pills")) {
                tab.style.height = elementHeight + 'px';
                tab.style.width = width + 'px';
                tab.style.textAlign = "center";
            } else {
                tab.parentElement.style.height = elementHeight + 'px';
                tab.parentElement.style.width = width + 'px';
                tab.parentElement.style.textAlign = "center";
            }
        });

    }

    // create initial box image around active tab on load
    var JCurtRect = JCurTab.getBoundingClientRect();
    var div = document.createElement("div");

    var divFlair = document.createElement("div");
    /*
        * #map navTabActiveFlairBS
    */
    divFlair.className += " " + parameters.navTabActiveFlairBS;

    div.style.width = JCurtRect.width + 'px';

    div.style.position = "fixed";
    div.style.top = parseInt(JCurtRect.top) + parseInt(parameters.navOffsetY) - 12 + 'px'; // 12 subtracted to add for padding in css
    div.style.left = parseInt(JCurtRect.left) + parseInt(parameters.navOffsetX) + 'px';
    div.style.pointerEvents = "none";
    /*
        * #map navTabActiveBS
    */
    div.className += " " + parameters.navTabActiveBS;
    div.innerHTML = JCurTab.innerHTML;

     navpills = BSObject.getElementsByClassName("nav-pills");
    if (parameters.isWizard) {
        var pills = BSObject.getElementsByClassName('nav-pills')[0];
        var pane = BSObject.getElementsByClassName('tab-pane')[0];
        var BSparent = getCommonAncestor(pills, pane);
        //   console.log(BSparent);
        BSparent.children[0].style.display = "none";
    } else {
        // if tabs are going to be visible, then add them
        // add Flair layer to main div
        div.appendChild(divFlair);
        navpills[0].appendChild(div);

  
        /*
            * #define which tabs an Inactive again as it changes each time we select a different one. 
        */
        // delete any existing classes navTabInactiveBS
        BSObject.classList.remove(parameters.navTabInactiveBS);
        if (BSObject.querySelectorAll("." + parameters.navTabInactiveBS))
            for (const delFlair of BSObject.querySelectorAll("." + parameters.navTabInactiveBS)) {
                delFlair.classList.remove(parameters.navTabInactiveBS);
            }


        // delete any existing navTabInactiveFlairBS divs
        if (BSObject.querySelectorAll("." + parameters.navTabInactiveFlairBS))
            for (const delFlair of BSObject.querySelectorAll("." + parameters.navTabInactiveFlairBS)) {
                delFlair.parentNode.removeChild(delFlair);
            }

        // possibly not needed
        // find and remove any old inactive tabs that are now active
        if (BSObject.querySelectorAll(".nav-link.active"))
            for (const inActive of BSObject.querySelectorAll(".nav-link.active")) {
                inActive.classList.remove(parameters.navTabInactiveBS);
                removeStyles(getActiveTab(BSObject, parameters)[0]);
            }

        // define navTabInactiveBS
        if (BSObject.querySelectorAll(".nav-link:not(.active)"))
            for (const inActive of BSObject.querySelectorAll(".nav-link:not(.active)")) {

                if (!inActive.classList.contains(parameters.navTabActiveBS)) {
                    /*
                        * #map navTabInactiveBS
                    */
                    inActive.className += " " + parameters.navTabInactiveBS;


                    //define navTabInactiveFlairBS, a sub div where "Flair" elements can be used for a secondary decorative overlay or layer on the main extra tab. 
                    if (inActive.getElementsByClassName(parameters.navTabInactiveFlairBS).length == 0) {
                        addFlair = document.createElement("div");
                        addFlair.classList.remove(parameters.navTabInactiveFlairBS);
                        /*
                            * #map navTabInactiveFlairBS
                        */
                        addFlair.className += " " + parameters.navTabInactiveFlairBS;
                        addStyling(inActive, "navTabInactiveBS", parameters, JCurTab);
                        inActive.appendChild(addFlair);
                    }
                }
            }


            


        console.log("call addShapes - init");
        addShapes(parameters, BSObject);

        console.log("call addSyling 2 - init");
        
        // define styles
        
        addStyling(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0], "navTabActiveBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.navTabActiveFlairBS)[0], "navTabActiveFlairBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0], "navTabInactiveBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.navTabInactiveFlairBS)[0], "navTabInactiveFlairBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.navBarBS)[0], "navBarBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.navBarFlairBS)[0], "navBarFlairBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.tabContentBS)[0], "tabContentBS", parameters, JCurTab);
        addStyling(BSObject.getElementsByClassName(parameters.tabContentFlairBS)[0], "tabContentFlairBS", parameters, JCurTab);

        if (parameters.showBottomNavBS) {
            addStyling(BSObject.getElementsByClassName(parameters.buttonBarBS)[0], "buttonBarBS", parameters, JCurTab);
            addStyling(BSObject.getElementsByClassName(parameters.buttonBarFlairBS)[0], "buttonBarFlairBS", parameters, JCurTab);
            addStyling(BSObject.getElementsByClassName(parameters.backButtonBS)[0], "backButtonBS", parameters, JCurTab);
            addStyling(BSObject.getElementsByClassName(parameters.backButtonFlairBS)[0], "backButtonFlairBS", parameters, JCurTab);
            addStyling(BSObject.getElementsByClassName(parameters.nextButtonBS)[0], "nextButtonBS", parameters, JCurTab);
            addStyling(BSObject.getElementsByClassName(parameters.nextButtonFlairBS)[0], "nextButtonFlairBS", parameters, JCurTab);
        }
        addStyling(BSObject.getElementsByClassName(parameters.tabBS)[0], "tabBS", parameters, JCurTab);



    }



}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function ReFresh(BSObject, parameters) {

    console.log("In Refresh");
    //find the currently active tab
    JCurTab = BSObject.querySelector('.nav-link.active');
    removeStyles(getActiveTab(BSObject, parameters)[0]);


    // remove old box first so we don't create duplicates, possibly can remove later
    var i, elements = BSObject.getElementsByClassName(parameters.navTabActiveBS);
    for (i = elements.length; i--;) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    // if parent contain nav-pills that we don't have the nav-link in a wrapper
    if (JCurTab.parentElement.classList.contains("nav-pills")) {
        console.log("call init from refresh");
        Initialize(JCurTab, BSObject, parameters); // draw initial bo around starting tab
    } else {
        console.log("call init from base");
        Initialize(JCurTab.parentElement, BSObject, parameters); // draw initial bo around starting tab
    }

}

//when forward button is pressed
function NextTab(JCurTab, JNewTab, BSObject, parameters) {

    //if there is no next, then we know we just clicked submit button, otherwise which tab is active
    if (JCurTab.classList.contains("nav-link") && JNewTab != null) {
        JCurTab.classList.remove("active");
        JNewTab.className += " active";

        // now change which tab content is visible
        var JCurTabContent = BSObject.querySelector('.tab-pane.active');

        var nextContent = getNextSibling(JCurTabContent);

        // nextTabContentNumber = parseInt(JCurTab.getAttribute('data-tab') + 1);
        // var nextContent = BSObject.querySelectorAll('[data-tabpane="' + nextTabContentNumber + '"]')[0];


        JCurTabContent.classList.remove("active");
        JCurTabContent.classList.remove("show");
        nextContent.className += " active";
        nextContent.className += " show";

        console.log("call anim from next tab");
        //animate the transition
        JAnimate(JCurTab, JNewTab, BSObject, parameters);

         //make sure button stays at last state if it can't go further
        // check tab status 1= first, 2 = middle, 3 = end, 13 = first and end
        isLast = 0;
        isLast = CheckTabLocation(JNewTab, BSObject, parameters);
        if (isLast == 3 || isLast == 13) {
            //We are on te last tab, if we care to identify it
            console.log("LAST TAB: " + isLast);
        }

    } else {

        submitClicked(BSObject);

    }

}


function removeStyles(inActive){
//inActive.style.visibility = "hidden";

//inActive.style.alignSelf = null;
//inActive.style.alignSelf = '';
//inActive.style.height = null;
//inActive.style.width = null;
//inActive.style.height = '';
//inActive.style.width = '';

inActive.style.color = null;
inActive.style.backgroundColor = null;
inActive.style.backgroundImage = null;
inActive.style.padding = null;
inActive.style.margin = null;
inActive.style.border = null;
inActive.style.borderRadius = null;
inActive.style.minHeight = null;
inActive.style.maxHeight = null;
inActive.style.minWidth = null;
inActive.style.maxWidth = null;
inActive.style.fontWeight = null;
inActive.style.font = null;
inActive.style.fontFamily = null;
inActive.style.fontSize = null;
inActive.style.zIndex = null;
inActive.style.opacity = null;
inActive.style.textAlign = null;
inActive.style.textShadow = null;
inActive.style.transform = null;
inActive.style.boxShadow = null;
inActive.style.pointerEvents = null;
inActive.style.top = null;
inActive.style.bottom = null;
inActive.style.left = null;
inActive.style.right = null;
inActive.style.color = '';
inActive.style.backgroundColor = '';
inActive.style.backgroundImage = '';
inActive.style.padding = '';
inActive.style.margin = '';
inActive.style.border = '';
inActive.style.borderRadius = '';
inActive.style.minHeight = '';
inActive.style.maxHeight = '';
inActive.style.minWidth = '';
inActive.style.maxWidth = '';
inActive.style.fontWeight = '';
inActive.style.font = '';
inActive.style.fontFamily = '';
inActive.style.fontSize = '';
inActive.style.zIndex = '';
inActive.style.opacity = '';
inActive.style.textAlign = '';
inActive.style.textShadow = '';
inActive.style.transform = '';
inActive.style.boxShadow = '';
inActive.style.pointerEvents = '';
inActive.style.top = '';
inActive.style.bottom = '';
inActive.style.left = '';
inActive.style.right = '';
}

//when forward button is pressed
function BackTab(JCurTab, JNewTab, BSObject, parameters) {


    //if there is no next, then we know we just clicked submit button, otherwise which tab is active

    if (JCurTab.classList.contains("nav-link") && JNewTab != null) {
        JCurTab.classList.remove("active");
        JNewTab.className += " active";

        // now change which tab content is visible
        var JCurTabContent = BSObject.querySelector('.tab-pane.active');

        var nextContent = getPreviousSibling(JCurTabContent);
        JCurTabContent.classList.remove("active");
        JCurTabContent.classList.remove("show");
        nextContent.className += " active";
        nextContent.className += " show";

        console.log("call anim from back tab");
        //animate the transition
        JAnimate(JCurTab, JNewTab, BSObject, parameters);


        // check tab status 1= first, 2 = middle, 3 = end, 13 = first and end
        var isPrev = 0;
        isPrev = CheckTabLocation(JNewTab, BSObject, parameters);
        if (isPrev == 1 || isPrev == 13) {
            //We are on te first tab, if we care to identify it
            //console.log("FIRST TAB: "+isPrev);
        }

    } else {
        // console.log("CLICKED FIRST");
        CheckTabLocation(JNewTab, BSObject, parameters);
    }

}


function nextButtonOnLastTab(BSObject, parameters) {
    // We will change the text of the Next button to say Submit if on the last tab
    if (document.body.contains(BSObject.getElementsByClassName("nextButtonBS")[0])) {
        BSObject.getElementsByClassName("nextButtonBS")[0].innerHTML = "SUBMIT";
    }
}

function nextButtonNotLastTab(BSObject, parameters) {
    // We will default the text to say Next button if NOT on the last tab
    if (document.body.contains(BSObject.getElementsByClassName("nextButtonBS")[0])) {
        BSObject.getElementsByClassName("nextButtonBS")[0].innerHTML = parameters.nextText;
    }
}


function backButtonOnFirstTab(BSObject, parameters) {
    // we will hide the back button if on the first tab
    if (document.body.contains(BSObject.getElementsByClassName("backButtonBS")[0])) {
        BSObject.getElementsByClassName("backButtonBS")[0].style.display = "none";
    }

}

function backButtonNotFirstTab(BSObject, parameters) {
    // We will ensure back button is visible if not first tab
    if (document.body.contains(BSObject.getElementsByClassName("backButtonBS")[0])) {
        BSObject.getElementsByClassName("backButtonBS")[0].style.display = "block";
    }


}

function CheckTabLocation(curTab, BSObject, parameters) {
    //Now we will also check if we are on the first or last tab, in case we want to adjust the buttons

    var firstTab = BSObject.getElementsByClassName("nav-link")[0];
    var lastTab = BSObject.getElementsByClassName("nav-link")[BSObject.getElementsByClassName("nav-link").length - 1];

    if (curTab == firstTab == lastTab) {
        //This is the first AND last tab
        backButtonOnFirstTab(BSObject, parameters);
        nextButtonOnLastTab(BSObject, parameters);
        return 13;
    }
    if ((curTab != firstTab) && (curTab != lastTab)) {
        backButtonNotFirstTab(BSObject, parameters);
        nextButtonNotLastTab(BSObject, parameters);
        return 2;
    }
    if (curTab == lastTab) {
        //we are on the last tab
        nextButtonOnLastTab(BSObject, parameters);
        backButtonNotFirstTab(BSObject, parameters);
        return 3;
    }
    if (curTab == firstTab) {
        //we are on the first tab
        backButtonOnFirstTab(BSObject, parameters);
        nextButtonNotLastTab(BSObject, parameters);
        return 1;
    }
}

function submitClicked() {
    // we will hide the back button if on the first tab
    console.log("CLICKED SUBMIT");
}


function addStyling(parameterBaseElement, parameterBaseName, parameters, JCurTab) {

    // define current tab shape in case we need to alter it
    var JCurtRect = JCurTab.getBoundingClientRect();

    //add some default values that can be overwritter
    if (parameterBaseName == "navBarBS") {
        parameterBaseElement.style.position = "relative";
        parameterBaseElement.style.zIndex = "10";
    }
    if (parameterBaseName == "navBarFlairBS") {
        parameterBaseElement.style.position = "relative";
        parameterBaseElement.style.zIndex = "15";
        parameterBaseElement.style.pointerEvents = "none";
    }

    if (parameterBaseName == "navTabInactiveBS") {
        parameterBaseElement.style.position = "relative";
        parameterBaseElement.style.zIndex = "50";
    }
    if (parameterBaseName == "navTabInactiveFlairBS") {
        parameterBaseElement.style.position = "relative";
        parameterBaseElement.style.zIndex = "55";
        parameterBaseElement.style.pointerEvents = "none";
    }
    if (parameterBaseName == "buttonBarBS") {
        parameterBaseElement.style.position = "relative";
        parameterBaseElement.style.zIndex = "50";
    }
    if (parameterBaseName == "buttonBarFlairBS") {
        parameterBaseElement.style.position = "relative";
        parameterBaseElement.style.zIndex = "55";
    }

    if (parameterBaseName == "navTabActiveBS") {
        parameterBaseElement.style.position = "fixed";
        parameterBaseElement.style.zIndex = "100";
    }
    if (parameterBaseName == "navTabActiveFlairBS") {
        parameterBaseElement.style.position = "relative";
        parameterBaseElement.style.zIndex = "105";
        parameterBaseElement.style.pointerEvents = "none";
    }

    if (parameters.showBottomNavBS == true && parameterBaseElement != null) {
        if (parameterBaseName == "nextButtonBS") {
            parameterBaseElement.style.position = "relative";
            parameterBaseElement.style.zIndex = "110";
            parameterBaseElement.style.pointerEvents = "bounding-box";
        }
        if (parameterBaseName == "nextButtonFlairBS") {
            parameterBaseElement.style.position = "relative";
            parameterBaseElement.style.zIndex = "115";
            parameterBaseElement.style.pointerEvents = "none";
        }
        if (parameterBaseName == "backButtonBS") {
            parameterBaseElement.style.position = "relative";
            parameterBaseElement.style.zIndex = "110";
            parameterBaseElement.style.pointerEvents = "bounding-box";
        }
        if (parameterBaseName == "backButtonFlairBS") {
            parameterBaseElement.style.position = "relative";
            parameterBaseElement.style.zIndex = "115";
            parameterBaseElement.style.pointerEvents = "none";
        }
    }
    if (parameterBaseName == "tabContentBS") {
        parameterBaseElement.style.position = "relative";
        parameterBaseElement.style.zIndex = "5";
    }
    if (parameterBaseName == "tabContentFlairBS") {
        parameterBaseElement.style.position = "relative";
        parameterBaseElement.style.zIndex = "7";
    }



    // define element.align-self (center layer)
    parameterBaseElement.style.alignSelf = parameters[parameterBaseName + ".align-self"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.alignSelf = parameters[parameterBaseName + ".align-self"];
    }
    // define element.pointer-events (make it so you can click through a layer)
    parameterBaseElement.style.pointerEvents = parameters[parameterBaseName + ".pointer-events"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.pointerEvents = parameters[parameterBaseName + ".pointer-events"];
    }
    // define element.color
    parameterBaseElement.style.color = parameters[parameterBaseName + ".color"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.color = parameters[parameterBaseName + ".color"];
    }
    // define element.background-color
    parameterBaseElement.style.backgroundColor = parameters[parameterBaseName + ".background-color"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.backgroundColor = parameters[parameterBaseName + ".background-color"];
        removeStyles(getActiveTab(document.getElementById(parameters.id), parameters)[0]);
    }

    // define element.background-image
    parameterBaseElement.style.backgroundImage = parameters[parameterBaseName + ".background-image"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.backgroundImage = parameters[parameterBaseName + ".background-image"];
        removeStyles(getActiveTab(document.getElementById(parameters.id), parameters)[0]);
    }
    // define element.padding
    parameterBaseElement.style.padding = parameters[parameterBaseName + ".padding"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.padding = parameters[parameterBaseName + ".padding"];
    }
    // define element.margin
    parameterBaseElement.style.margin = parameters[parameterBaseName + ".margin"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.margin = parameters[parameterBaseName + ".margin"];
    }
    // define element.border
    parameterBaseElement.style.border = parameters[parameterBaseName + ".border"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.border = parameters[parameterBaseName + ".border"];
    }
    // define element.borderTop
    parameterBaseElement.style.borderTop = parameters[parameterBaseName + ".border-top"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.borderTop = parameters[parameterBaseName + ".border-top"];
    }
    // define element.borderBottom
    parameterBaseElement.style.borderBottom = parameters[parameterBaseName + ".border-buttom"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.borderBottom = parameters[parameterBaseName + ".border-buttom"];
    }
    // define element.borderLeft
    parameterBaseElement.style.borderLeft = parameters[parameterBaseName + ".border-left"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.borderLeft = parameters[parameterBaseName + ".border-left"];
    }
    // define element.borderRight
    parameterBaseElement.style.borderRight = parameters[parameterBaseName + ".border-right"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.borderRight = parameters[parameterBaseName + ".border-right"];
    }
    // define element.borderRadius
    parameterBaseElement.style.borderRadius = parameters[parameterBaseName + ".border-radius"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.borderRadius = parameters[parameterBaseName + ".border-radius"];
    }
    // define element.left
    parameterBaseElement.style.left = parameters[parameterBaseName + ".left"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.left = parameters[parameterBaseName + ".left"];
    }
    // define element.top
    parameterBaseElement.style.top = parameters[parameterBaseName + ".top"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.top = parameters[parameterBaseName + ".top"];
    }
    // define element.right
    parameterBaseElement.style.right = parameters[parameterBaseName + ".right"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.right = parameters[parameterBaseName + ".right"];
    }
    // define element.bottom
    parameterBaseElement.style.bottom = parameters[parameterBaseName + ".bottom"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.bottom = parameters[parameterBaseName + ".bottom"];
    }
    // define element.height
    parameterBaseElement.style.height = parameters[parameterBaseName + ".height"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.height = parameters[parameterBaseName + ".height"];
    }
    // define element.width
    parameterBaseElement.style.width = parameters[parameterBaseName + ".width"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.width = parameters[parameterBaseName + ".width"];
    }
    // define element.min-height
    parameterBaseElement.style.minHeight = parameters[parameterBaseName + ".min-height"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.minHeight = parameters[parameterBaseName + ".min-height"];
    }
    // define element.min-width
    parameterBaseElement.style.minWidth = parameters[parameterBaseName + ".min-width"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.minWidth = parameters[parameterBaseName + ".min-width"];
    }
    // define element.max-height
    parameterBaseElement.style.maxHeight = parameters[parameterBaseName + ".max-height"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.maxHeight = parameters[parameterBaseName + ".max-height"];
    }
    // define element.max-width
    parameterBaseElement.style.maxWidth = parameters[parameterBaseName + ".max-width"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.maxWidth = parameters[parameterBaseName + ".max-width"];
    }
    // define element.font
    parameterBaseElement.style.font = parameters[parameterBaseName + ".font"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.font = parameters[parameterBaseName + ".font"];
    }
    // define element.font-weight
    parameterBaseElement.style.fontWeight = parameters[parameterBaseName + ".font-weight"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.fontWeight = parameters[parameterBaseName + ".font-weight"];
    }
    // define element.font-family
    parameterBaseElement.style.fontFamily = parameters[parameterBaseName + ".font-family"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.fontFamily = parameters[parameterBaseName + ".font-family"];
    }
    // define element.font-size
    parameterBaseElement.style.fontSize = parameters[parameterBaseName + ".font-size"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.fontSize = parameters[parameterBaseName + ".font-size"];
    }
    // define element.z-index
    parameterBaseElement.style.zIndex = parameters[parameterBaseName + ".z-index"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.zIndex = parameters[parameterBaseName + ".z-index"];
    }
    // define element.opacity
    parameterBaseElement.style.opacity = parameters[parameterBaseName + ".opacity"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.opacity = parameters[parameterBaseName + ".opacity"];
    }
    // define element.text-align
    parameterBaseElement.style.textShadow = parameters[parameterBaseName + ".text-align"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.textShadow = parameters[parameterBaseName + ".text-align"];
    }
    // define element.text-shadow
    parameterBaseElement.style.textShadow = parameters[parameterBaseName + ".text-shadow"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.textShadow = parameters[parameterBaseName + ".text-shadow"];
    }
    // define element.transform
    parameterBaseElement.style.transform = parameters[parameterBaseName + ".transform"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.transform = parameters[parameterBaseName + ".transform"];
    }
    // define element.box-shadow
    parameterBaseElement.style.boxShadow = parameters[parameterBaseName + ".box-shadow"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        if(parameterBaseName == "navTabInactiveBS")
        console.log("addStyling -> parameterBaseName", parameters[parameterBaseName + ".box-shadow"]);
        parameterBaseElement.querySelector('.nav-link.active').style.boxShadow = parameters[parameterBaseName + ".box-shadow"];
        removeStyles(getActiveTab(document.getElementById(parameters.id), parameters)[0]);
    }


}