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


// this is a finction to get the next nav-link
var getNextSibling = function(elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.nextElementSibling
    }
};

// this is a finction to get the next nav-link
var getPreviousSibling = function(elem, selector) {
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

    // Add define themes

    if (parameters.theme == "Magic1") { //blue oval button with white text

        parameters.showBottomNavBS = true;
     //   parameters.navBackground = "NavBackgroundBlue";
        parameters["navTabActiveBS.color"] = "white";
        parameters["navTabActiveBS.background-color"] = "#00bcd4";
        parameters["navTabActiveBS.shape"] = "oval";
        //  parameters.navUnderline = true;
        //  parameters.navShadow = true;
    } else if (parameters.theme == "Magic2") { //white square button with blue underline and shadow and blue text
        parameters.showBottomNavBS = true;
    //    parameters.navBackground = "NavShapeSquare2";
        parameters["navTabActiveBS.color"] = "blue";
        parameters["navTabActiveBS.background-color"] = "transparent";
        parameters["navTabActiveBS.shape"] = "square";
        parameters.navUnderline = true;
        parameters.navShadow = true;
    }

    
    //define if we want navigation buttons added
    if (parameters.showBottomNavBS === undefined) parameters.showBottomNavBS = true;

    //define bottom nav back button
    if (parameters.backButtonBS === undefined) parameters.backButtonBS = "backButtonBS";

    //define bottom nav back button flair
    if (parameters.backButtonFlairBS === undefined) parameters.backButtonFlairBS = "backButtonFlairBS";

    //define bottom nav next button
    if (parameters.nextButtonBS === undefined) parameters.nextButtonBS = "nextButtonBS";

    //define bottom nav next button flair
    if (parameters.nextButtonFlairBS === undefined) parameters.nextButtonFlairBS = "nextButtonFlairBS";

    //define active tab content
    if (parameters.tabContentBS === undefined) parameters.tabContentBS = "tabContentBS";

    //define active tab content flair
    if (parameters.tabContentFlairBS === undefined) parameters.tabContentFlairBS = "tabContentFlairBS";

    //define if we want navigation buttons added
    if (parameters.buttonBarBS === undefined) parameters.buttonBarBS = "buttonBarBS";

    //define if we want navigation buttons added
    if (parameters.buttonBarFlairBS === undefined) parameters.buttonBarFlairBS = "buttonBarFlairBS";

    //define navigation shape, should be disabled if navTabActiveBS is defined
    if (parameters["navTabActiveBS.shape"] === undefined) parameters["navTabActiveBS.shape"]="square";

    //define navigation background color
    if(parameters["navTabActiveBS.background-color"] === undefined) parameters["navTabActiveBS.background-color"] = "blue";

    //define navigation font color
    if (parameters["navTabActiveBS.color"] === undefined) parameters["navTabActiveBS.color"] = "white";

    //define if we want to underline navigation
    if (parameters.navUnderline === undefined) parameters.navUnderline = false;

    //define if we want add shadow to navigation
    if (parameters.navShadow === undefined) parameters.navShadow = false;

    if (parameters.nextText === undefined) parameters.nextText = "NEXT";

    if (parameters.prevText === undefined) parameters.prevText = "PREVIOUS";

    //TODO: offsets will have to be relative from (left + (width / 2)) and (top - (length /2))

    if (parameters.navOffsetX === undefined) parameters.navOffsetX = 0;

    if (parameters.navOffsetY === undefined) parameters.navOffsetY = 0;

    if (parameters.isWizard === undefined) parameters.isWizard = false;

    if (parameters.navTabActiveBS !== undefined) {
        //make sure to remove default shape css if you are going to define your own
        parameters["navTabActiveBS.shape"]="";
    }
    if (parameters.navTabActiveBS === undefined) parameters.navTabActiveBS = "navTabActiveBS";

    if (parameters.navTabActiveFlairBS === undefined) parameters.navTabActiveFlairBS = "navTabActiveFlairBS";

    if (parameters.navTabInactiveBS === undefined) parameters.navTabInactiveBS = "navTabInactiveBS";

    if (parameters.navTabInactiveFlairBS === undefined) parameters.navTabInactiveFlairBS = "navTabInactiveFlairBS";

    if (parameters.navTabTextOffetX === undefined) parameters.navTabTextOffetX = 0;

    if (parameters.navTabTextOffetY === undefined) parameters.navTabTextOffetY = 0;

    if (parameters.navBarBS === undefined) parameters.navBarBS = "navBarBS";

    if (parameters.navBarflairBS === undefined) parameters.navBarflairBS = "navBarflairBS";


    //create variable to determine if we have vertical tabs
    var vertical = false;

    // convert nav-tabs to nav-pills
    var i, elements = BSObject.getElementsByClassName('nav-tabs');
    for (i = elements.length; i--;) {
        elements[i].className += " nav-pills";
        elements[i].style.setProperty("background-color", "transparent");

        elements[i].classList.remove("nav-tabs");
    }

    //see if we have vertical tabs
    if (BSObject.getElementsByClassName('nav-pills')[0].classList.contains('flex-column')) { vertical = true; }

    // Navbar identified by having class="nav-pills"
    var navpills = BSObject.getElementsByClassName("nav-pills");

    // define navBarBS
    navpills[0].className += " " + parameters.navBarBS;

    // define tabContentBS - tab content
    TabContent = BSObject.getElementsByClassName("tab-content")[0];
    TabContent.className += " " + parameters.tabContentBS;
    // define tabContentFlairBS and add it to tabContentBS
    TabContentBS = document.createElement("div")
    TabContentBS.className += " " + parameters.tabContentFlairBS; 
    TabContent.appendChild(TabContentBS);


    // each Navbar item identified by having class="nav-link"
    var navlinks = navpills[0].getElementsByClassName("nav-link");
    // grabs the first tab and sets it as active
    var JCurTab = navpills[0].getElementsByClassName("nav-link")[0];
    JCurTab.className += " active";

    //find and number all tabs
    var tabs = navpills[0].getElementsByClassName("nav-link");
    for (var i = 0; i < tabs.length; i++) {
        tabs.item(i).setAttribute('data-tab', i);
        tabs.item(i).setAttribute('data-parent', parameters.id);
    }

    //find and number all tabs containers
    var tabPanes = BSObject.getElementsByClassName("tab-pane");
    for (var i = 0; i < tabPanes.length; i++) {
        tabPanes.item(i).setAttribute('data-tabPane', i);
        tabPanes.item(i).setAttribute('data-parent', parameters.id);
    }

    //divide the navbar width into equal space for each tab (Horizonal)
    var jtotal = navlinks.length;
    jwidth = 100 / jtotal;

    Array.prototype.forEach.call(navlinks, function(tab) {
        // if parent contain nav-pills that we don't have the nav-link in a wrapper
        if (tab.parentElement.classList.contains("nav-pills"))
            tab.style.width = jwidth + '%';
        else
            tab.parentElement.style.width = jwidth + '%';
    });


    //make vertical alignment even if using vertical tabs
    if (vertical == true) {

        element = BSObject.getElementsByClassName('flex-column')[0];
        height = element.getBoundingClientRect().height;
        width = element.getBoundingClientRect().width;
        elementHeight = height / jtotal;

        Array.prototype.forEach.call(navlinks, function(tab) {
            // if parent contain nav-pills that we don't have the nav-link in a wrapper
            if (tab.parentElement.classList.contains("nav-pills")) {
                tab.style.height = elementHeight + 'px';
                tab.style.width = width + 'px';
                tab.style.textAlign = "center";
            } else {
                tab.parentElement.style.height = elementHeight + 'px';
                tab.parentElement.style.width = width + 'px';
                tab.parentElement.style.textAlign = "center"
            }
        });

    }

    //find the currently active tab
    JCurTab = BSObject.querySelector('.nav-link.active');

    //Add buttons if wanted


    var pills = BSObject.getElementsByClassName('nav-pills')[0];
    var pane = BSObject.getElementsByClassName('tab-pane')[0];


    var BSparent = getCommonAncestor(pills, pane);

    //define navBarFlairBS and wrap it around the navBar as a parent
    var navBarFlair = document.createElement("div")
    navBarFlair.className += " " + parameters.navBarFlairBS; 

    pills.appendChild(navBarFlair);


    //Add styling
    var BSparent = getCommonAncestor(pills, pane);
    BSparent.classList += " BSMagic";

    //add listeners to resize or relocate if scrolling or resizing
    window.addEventListener("resize", function() { ReFresh(BSObject, parameters); });
    window.addEventListener("scroll", function() { ReFresh(BSObject, parameters); });

    if (parameters.navUnderline == true) { getCommonAncestor(pills, pane).classList += " NavUnderlineBlue"; }

    if (parameters.navShadow == true) { getCommonAncestor(pills, pane).classList += " NavBlueShadow"; }

    if (vertical == true) {
        getCommonAncestor(pills, pane).classList += " BSVertical";
    } else {
        getCommonAncestor(pills, pane).classList += " BSHorizontal";
    }

    if (parameters.showBottomNavBS == true) {
        buttonBarBS(getCommonAncestor(pills, pane), parameters);
    }

    //check if first or last tab
    CheckTabLocation(JCurTab, BSObject, parameters);








    console.log("params");
//TODO addShapes(parameters,parameters,BSObject);





    // if parent contain nav-pills that we don't have the nav-link in a wrapper
    if (JCurTab.parentElement.classList.contains("nav-pills")) {
        Initialize(JCurTab, BSObject, parameters); // draw initial bo around starting tab
    } else {
        Initialize(JCurTab.parentElement, BSObject, parameters); // draw initial bo around starting tab
    }



    //Add listeners for when tab is clicked
    var elements = BSObject.getElementsByClassName("nav-link");


    //add navigation buttons if wanted


    var i = 0;
    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function() {
            var JCurTab = BSObject.querySelector('.nav-link.active');
            var JNewTab = this;

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



            JAnimate(JCurTab, JNewTab, BSObject, parameters);

        });
    }

    //Add listeners for when next button is clicked
    var elements = BSObject.getElementsByClassName("nextButtonBS");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function() {
            var JCurTab = BSObject.querySelector('.nav-link.active');
            var nextTabNumber = parseInt(JCurTab.getAttribute('data-tab')) + 1;
            var JNewTab = BSObject.querySelectorAll('[data-tab="' + nextTabNumber + '"]')[0];

            //check if we are on the first or last tab
            CheckTabLocation(JNewTab, BSObject, parameters);

            //  JAnimate(JCurTab, JNewTab,BSObject);

            NextTab(JCurTab, JNewTab, BSObject, parameters);

        });
    }


    //Add listeners for when back button is clicked
    var elements = BSObject.getElementsByClassName("backButtonBS");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function() {
            var JCurTab = BSObject.querySelector('.nav-link.active');
            var prevTabNumber = parseInt(JCurTab.getAttribute('data-tab')) - 1;
            var JPrevTab = BSObject.querySelectorAll('[data-tab="' + prevTabNumber + '"]')[0];


            //check if we are on the first or last tab
            CheckTabLocation(JPrevTab, BSObject, parameters);

            //  JAnimate(JCurTab, JNewTab,BSObject);

            BackTab(JCurTab, JPrevTab, BSObject, parameters);

        });
    }

   // ReFresh(BSObject, parameters);
    //animate the transition
    JAnimate(JCurTab, JCurTab, BSObject, parameters);

}

function addShapes(obj,parameters,BSObject) {
    // iterate over properties, increment if a non-prototype property
    for(var key in obj){
        if( key.indexOf(".shape") !== -1){
            console.log(key);
            console.log( parameters[key] );
            baseObject = key.replace(".shape", "");
            console.log(parameters[baseObject]);
            parameterBaseElement = BSObject.getElementsByClassName(eval(parameters.baseObject));

             //define shapes as a one off declaration and starting point
    
if (parameters[key] == "circle") { 
    parameterBaseElement.style.position = "absolute";
    parameterBaseElement.style.textAlign = "center";
    parameterBaseElement.style.padding = "12px";
    parameterBaseElement.style.fontSize = "12px";
    parameterBaseElement.style.height = "45px !important";
    parameterBaseElement.style.top = "12px";
    parameterBaseElement.style.fontWeight = "500";
    parameterBaseElement.style.borderRadius = "50%";
    parameterBaseElement.style.maxWidth = "50px";
    parameterBaseElement.style.maxHeight = "50px";
    
    }
    
    if (parameters[key] == "oval") { 
    parameterBaseElement.style.position = "absolute";
    parameterBaseElement.style.textAlign = "center";
    parameterBaseElement.style.padding = "12px";
    parameterBaseElement.style.fontSize = "12px";
    parameterBaseElement.style.height = "45px";
    parameterBaseElement.style.marginTop = "-45px";
    parameterBaseElement.style.top = "12px";
    parameterBaseElement.style.cursor = "pointer";
    parameterBaseElement.style.fontWeight = "500";
    parameterBaseElement.style.borderRadius = "24px";
    }
    
    if (parameters[key] == "square") { 
    parameterBaseElement.style.position = "absolute";
    parameterBaseElement.style.textAlign = "center";
    parameterBaseElement.style.padding = "12px";
    parameterBaseElement.style.fontSize = "12px";
    parameterBaseElement.style.height = "45px !important";
    parameterBaseElement.style.top = "12px";
    parameterBaseElement.style.cursor = "pointer";
    parameterBaseElement.style.fontWeight = "500";
    }



        }
    }
}


function buttonBarBS(topContainer, parameters) {
    console.log("create buttons");
    var buttombuttons = "<div class='"+parameters.buttonBarBS+" col-sm-12' style='justify-content:space-between;'><div class='"+parameters.buttonBarFlairBS+"'></div> <div class='float-right'> <button type='button' class='"+parameters.nextButtonBS+" btn btn-next btn-fill btn-danger btn-wd square' name='next' value='Next' >" + parameters.nextText + "</button> <div class='"+parameters.nextButtonFlairBS+"'></div>  </div><div class='float-left'><button type='button' class='"+parameters.backButtonBS+" btn btn-previous btn-fill btn-default btn-wd square' name='previous' value='Previous' >" + parameters.prevText + "</button>   <div class='"+parameters.backButtonFlairBS+"'></div> </div><div class='clearfix'></div></div>";
    topContainer.insertAdjacentHTML('beforeend', buttombuttons);
    topContainer.getElementsByClassName(parameters.buttonBarBS).item(0).setAttribute('data-parent', parameters.id);
    // topContainer.appendChild(buttombuttons);
}


// animate moving box from last tab to new tab
function JAnimate(JCurTab, JNewTab, BSObject, parameters) {
    //fix selection in nav-items not in a wrapper
    if (JCurTab.parentElement.classList.contains("nav-pills"))
        JCurTab = JCurTab;
    else
        JCurTab = JCurTab.parentElement;

    if (JNewTab.parentElement.classList.contains("nav-pills"))
        JNewTab = JNewTab;
    else
        JNewTab = JNewTab.parentElement;

    // remove old box first so we don't create duplicates, possibly can remove later
    var i, elements = BSObject.getElementsByClassName(parameters.navTabActiveBS);
    for (i = elements.length; i--;) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    // remove old box Flair first so we don't create duplicates, possibly can remove later
    var i, elements = BSObject.getElementsByClassName(parameters.navTabActiveFlairBS);
    for (i = elements.length; i--;) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    // create new div containing the drawing (nabTabActiveBS)
    var div = document.createElement("div")

    //create a sub div where "Flair" elements can be used for a secondary decorative overlay or layer on the main extra tab.  (nabTabActiveFlairBS)
    var divFlair = document.createElement("div") 
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
    div.className += " " + parameters.navTabActiveBS;
    div.innerHTML = JNewTab.innerHTML;

    if (div.children.length > 0) {
        div.children[0].style.left = parseInt(parameters.navTabTextOffetX) + "px";
        div.children[0].style.top = parseInt(parameters.navTabTextOffetY) + "px";
    }


    if (BSObject.querySelector('.nav-link.active').children.length > 0) {
        textOffset = BSObject.querySelector('.nav-link.active').children[0];
        textOffset.style.top = parseInt(parameters.navTabTextOffetY) + "px";
        textOffset.style.left = parseInt(parameters.navTabTextOffetX) + "px";
    }


    // add Flair layer under main div layer
    div.appendChild(divFlair);
    JCurTab.parentElement.appendChild(div);


    // define styles

    console.log("call style 1");

    addStyling(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0],"navTabActiveBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navTabActiveFlairBS)[0],"navTabActiveFlairBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0],"navTabInactiveBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navTabInactiveFlairBS)[0],"navTabInactiveFlairBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navBarBS)[0],"navBarBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navBarFlairBS)[0],"navBarFlairBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.tabContentBS)[0],"tabContentBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.tabContentFlairBS)[0],"tabContentFlairBS",parameters,JCurTab);

    if(parameters.showBottomNavBS){
    addStyling(BSObject.getElementsByClassName(parameters.buttonBarBS)[0],"buttonBarBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.buttonBarFlairBS)[0],"buttonBarFlairBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.backButtonBS)[0],"backButtonBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.backButtonFlairBS)[0],"backButtonFlairBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.nextButtonBS)[0],"nextButtonBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.nextButtonFlairBS)[0],"nextButtonFlairBS",parameters,JCurTab);
    }
    

    
    // now animate the new div to expand to the nex location and then move over and shink or epand to new size
    // first check if GSAP is installed
    if (typeof TimelineLite !== 'undefined') {
        var tl = new TimelineLite();
        tl.eventCallback("onComplete", function() {
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
        ReFresh(BSObject, parameters);
    }



}


function Initialize(JCurTab, BSObject, parameters) {

    var vertical = false;
    //see if we have vertical tabs
    if (BSObject.getElementsByClassName('nav-pills')[0].classList.contains('flex-column')) { vertical = true; }
    // Navbar identified by having class="nav-pills"
    var navpills = BSObject.getElementsByClassName("nav-pills");
    // each Navbar item identified by having class="nav-link"
    var navlinks = navpills[0].getElementsByClassName("nav-link");
    //make vertical alignment even if using vertical tabs
    var jtotal = navlinks.length;
    jwidth = 100 / jtotal;

    if (vertical == true) {

        element = BSObject.getElementsByClassName('flex-column')[0];
        height = element.getBoundingClientRect().height;
        width = element.getBoundingClientRect().width;
        elementHeight = height / jtotal;

        Array.prototype.forEach.call(navlinks, function(tab) {
            // if parent contain nav-pills that we don't have the nav-link in a wrapper
            if (tab.parentElement.classList.contains("nav-pills")) {
                tab.style.height = elementHeight + 'px';
                tab.style.width = width + 'px';
                tab.style.textAlign = "center";
            } else {
                tab.parentElement.style.height = elementHeight + 'px';
                tab.parentElement.style.width = width + 'px';
                tab.parentElement.style.textAlign = "center"
            }
        });

    }

    // create initial box image around active tab on load
    var JCurtRect = JCurTab.getBoundingClientRect();
    var div = document.createElement("div");

    var divFlair = document.createElement("div")
    divFlair.className += " " + parameters.navTabActiveFlairBS;

    div.style.width = JCurtRect.width + 'px';

    div.style.position = "fixed";
    div.style.top = parseInt(JCurtRect.top) + parseInt(parameters.navOffsetY) - 12 + 'px'; // 12 subtracted to add for padding in css
    div.style.left = parseInt(JCurtRect.left) + parseInt(parameters.navOffsetX) + 'px';
    div.style.pointerEvents = "none";
    div.className += " " + parameters.navTabActiveBS;
    div.innerHTML = JCurTab.innerHTML;

    var navpills = BSObject.getElementsByClassName("nav-pills");
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

    // update alterations needed to selections and classes
    if (BSObject.querySelector('.nav-link.active').children.length > 0) {
        textOffset = BSObject.querySelector('.nav-link.active').children[0];
        textOffset.style.top = parseInt(parameters.navTabTextOffetY) + "px";
        textOffset.style.left = parseInt(parameters.navTabTextOffetX) + "px";
        textOffset.classList.remove(parameters.navTabInactiveBS);
    }


    // add custom decorating to the navigation bar or navbar
     // remove the bar if it already exists
    // define navBarBS
     if(BSObject.querySelector('.nav-pills').classList.contains(parameters.navBarBS))
     {
     BSObject.querySelector('.nav-pills').classList.remove(parameters.navBarBS);
     BSObject.querySelector('.nav-pills').className += " " + parameters.navBarBS;
    }
     
     
      // delete any existing classes navTabInactiveBS
      BSObject.classList.remove(parameters.navTabInactiveBS);
      if(BSObject.querySelectorAll("."+parameters.navTabInactiveBS))
      for (const delFlair of BSObject.querySelectorAll("."+parameters.navTabInactiveBS) ){
         delFlair.classList.remove(parameters.navTabInactiveBS);
      }


     // delete any existing navTabInactiveFlairBS divs
     if(BSObject.querySelectorAll("."+parameters.navTabInactiveFlairBS))
     for (const delFlair of BSObject.querySelectorAll("."+parameters.navTabInactiveFlairBS) ){
        delFlair.parentNode.removeChild(delFlair);
     }
     
     // possibly not needed
     // find and remove any old inactive tabs that are now active
    if(BSObject.querySelectorAll(".nav-link.active"))
     for (const inActive of BSObject.querySelectorAll(".nav-link.active") ){
        inActive.classList.remove(parameters.navTabInactiveBS);
     }
 
    // define navTabInactiveBS
     if(BSObject.querySelectorAll(".nav-link:not(.active)"))
     for (const inActive of BSObject.querySelectorAll(".nav-link:not(.active)") ){

        if(!inActive.classList.contains(parameters.navTabActiveBS)){
        inActive.className += " " + parameters.navTabInactiveBS;


            //define navTabInactiveFlairBS, a sub div where "Flair" elements can be used for a secondary decorative overlay or layer on the main extra tab. 
            if(inActive.getElementsByClassName(parameters.navTabInactiveFlairBS).length == 0){
                addFlair = document.createElement("div")
                addFlair.classList.remove(parameters.navTabInactiveFlairBS);
                addFlair.className += " " + parameters.navTabInactiveFlairBS;
                addStyling(inActive,"navTabInactiveBS",parameters,JCurTab);
                inActive.appendChild(addFlair);
            }
        }
    }


console.log("call style 2");
    // define styles

    addStyling(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0],"navTabActiveBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navTabActiveFlairBS)[0],"navTabActiveFlairBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0],"navTabInactiveBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navTabInactiveFlairBS)[0],"navTabInactiveFlairBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navBarBS)[0],"navBarBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.navBarFlairBS)[0],"navBarFlairBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.tabContentBS)[0],"tabContentBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.tabContentFlairBS)[0],"tabContentFlairBS",parameters,JCurTab);

    if(parameters.showBottomNavBS){
    addStyling(BSObject.getElementsByClassName(parameters.buttonBarBS)[0],"buttonBarBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.buttonBarFlairBS)[0],"buttonBarFlairBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.backButtonBS)[0],"backButtonBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.backButtonFlairBS)[0],"backButtonFlairBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.nextButtonBS)[0],"nextButtonBS",parameters,JCurTab);
    addStyling(BSObject.getElementsByClassName(parameters.nextButtonFlairBS)[0],"nextButtonFlairBS",parameters,JCurTab);
    }


    }



}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function ReFresh(BSObject, parameters) {
    //find the currently active tab
    JCurTab = BSObject.querySelector('.nav-link.active');

    // remove old box first so we don't create duplicates, possibly can remove later
    var i, elements = BSObject.getElementsByClassName(parameters.navTabActiveBS);
    for (i = elements.length; i--;) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    // if parent contain nav-pills that we don't have the nav-link in a wrapper
    if (JCurTab.parentElement.classList.contains("nav-pills"))
        Initialize(JCurTab, BSObject, parameters); // draw initial bo around starting tab
    else
        Initialize(JCurTab.parentElement, BSObject, parameters); // draw initial bo around starting tab

};

//when forward button is pressed
function NextTab(JCurTab, JNewTab, BSObject, parameters) {


    //make sure button stays at last state if it can't go further
    isLast = CheckTabLocation(JCurTab, BSObject, parameters);

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

        //animate the transition
        JAnimate(JCurTab, JNewTab, BSObject, parameters);


        // check tab status 1= first, 2 = middle, 3 = end, 13 = first and end
        var isLast = 0;
        isLast = CheckTabLocation(JNewTab, BSObject, parameters);
        if (isLast == 3 || isLast == 13) {
            //We are on te last tab, if we care to identify it
            console.log("LAST TAB: " + isLast);
        }

    } else {

        submitClicked(BSObject);

    }

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


function addStyling(parameterBaseElement, parameterBaseName,parameters,JCurTab){

    // define current tab shape in case we need to alter it
    var JCurtRect = JCurTab.getBoundingClientRect();

    //add some default values that can be overwritter
    if(parameterBaseName == "navBarBS"){ 
        parameterBaseElement.style.position = "relative"; 
        parameterBaseElement.style.zIndex = "10";
    }
    if(parameterBaseName == "navBarFlairBS"){  
        parameterBaseElement.style.position = "relative"; 
        parameterBaseElement.style.zIndex = "15";
        parameterBaseElement.style.pointerEvents = "none";
    }

    if(parameterBaseName == "navTabInactiveBS"){  
        parameterBaseElement.style.position = "relative"; 
        parameterBaseElement.style.zIndex = "50";
    }
    if(parameterBaseName == "navTabInactiveFlairBS"){    
        parameterBaseElement.style.position = "relative"; 
        parameterBaseElement.style.zIndex = "55";   
        parameterBaseElement.style.pointerEvents = "none"; 
    }
    if(parameterBaseName == "buttonBarBS"){
        parameterBaseElement.style.position = "relative"; 
        parameterBaseElement.style.zIndex = "50";
    }
    if(parameterBaseName == "buttonBarFlairBS"){
        parameterBaseElement.style.position = "relative"; 
        parameterBaseElement.style.zIndex = "55";
    }
    
    if(parameterBaseName == "navTabActiveBS"){    
        parameterBaseElement.style.position = "fixed"; 
        parameterBaseElement.style.zIndex = "100";
    }
    if(parameterBaseName == "navTabActiveFlairBS"){        
        parameterBaseElement.style.position = "relative"; 
        parameterBaseElement.style.zIndex = "105";
        parameterBaseElement.style.pointerEvents = "none";
    }
    
    if(parameters.showBottomNavBS == true && parameterBaseElement !=null){
    if(parameterBaseName == "nextButtonBS"){parameterBaseElement.style.position = "relative"; parameterBaseElement.style.zIndex = "110"; parameterBaseElement.style.pointerEvents = "bounding-box";}
    if(parameterBaseName == "nextButtonFlairBS"){parameterBaseElement.style.position = "relative"; parameterBaseElement.style.zIndex = "115"; parameterBaseElement.style.pointerEvents = "none";}
    if(parameterBaseName == "backButtonBS"){parameterBaseElement.style.position = "relative"; parameterBaseElement.style.zIndex = "110"; parameterBaseElement.style.pointerEvents = "bounding-box";}
    if(parameterBaseName == "backButtonFlairBS"){parameterBaseElement.style.position = "relative"; parameterBaseElement.style.zIndex = "115"; parameterBaseElement.style.pointerEvents = "none";}
    }
    if(parameterBaseName == "tabContentBS"){parameterBaseElement.style.position = "relative"; parameterBaseElement.style.zIndex = "5";}
    if(parameterBaseName == "tabContentFlairBS"){parameterBaseElement.style.position = "relative"; parameterBaseElement.style.zIndex = "7";}



    // define element.align-self (center layer)
    parameterBaseElement.style.alignSelf = parameters[parameterBaseName+".align-self"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.alignSelf = parameters[parameterBaseName+".align-self"];
    }
    // define element.pointer-events (make it so you can click through a layer)
    parameterBaseElement.style.pointerEvents = parameters[parameterBaseName+".pointer-events"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.pointerEvents = parameters[parameterBaseName+".pointer-events"];
    }
    // define element.color
    parameterBaseElement.style.color = parameters[parameterBaseName+".color"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.color = parameters[parameterBaseName+".color"];
    }
    // define element.background-color
    parameterBaseElement.style.backgroundColor = parameters[parameterBaseName+".background-color"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.backgroundColor = parameters[parameterBaseName+".background-color"];
    }

    // define element.background-image
    parameterBaseElement.style.backgroundImage = parameters[parameterBaseName+".background-image"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.backgroundImage = parameters[parameterBaseName+".background-image"];
    }
    // define element.padding
    parameterBaseElement.style.padding = parameters[parameterBaseName+".padding"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.padding = parameters[parameterBaseName+".padding"];
    }
    // define element.margin
    parameterBaseElement.style.margin = parameters[parameterBaseName+".margin"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.margin = parameters[parameterBaseName+".margin"];
    }
    // define element.border
    parameterBaseElement.style.border = parameters[parameterBaseName+".border"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.border = parameters[parameterBaseName+".border"];
    }
    // define element.borderRadius
    parameterBaseElement.style.borderRadius = parameters[parameterBaseName+".border-radius"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.borderRadius = parameters[parameterBaseName+".border-radius"];
    }
    // define element.left
    parameterBaseElement.style.left = parameters[parameterBaseName+".left"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.left = parameters[parameterBaseName+".left"];
    }
    // define element.top
    parameterBaseElement.style.top = parameters[parameterBaseName+".top"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.top = parameters[parameterBaseName+".top"];
    }
    // define element.right
    parameterBaseElement.style.right = parameters[parameterBaseName+".right"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.right = parameters[parameterBaseName+".right"];
    }
    // define element.bottom
    parameterBaseElement.style.bottom = parameters[parameterBaseName+".bottom"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.bottom = parameters[parameterBaseName+".bottom"];
    }
    // define element.height
    parameterBaseElement.style.height = parameters[parameterBaseName+".height"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.height = parameters[parameterBaseName+".height"];
    }
    // define element.width
    parameterBaseElement.style.width = parameters[parameterBaseName+".width"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.width = parameters[parameterBaseName+".width"];
    }
    // define element.min-height
    parameterBaseElement.style.minHeight = parameters[parameterBaseName+".min-height"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.minHeight = parameters[parameterBaseName+".min-height"];
    }
    // define element.min-width
    parameterBaseElement.style.minWidth = parameters[parameterBaseName+".min-width"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.minWidth = parameters[parameterBaseName+".min-width"];
    }
    // define element.max-height
    parameterBaseElement.style.maxHeight = parameters[parameterBaseName+".max-height"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.maxHeight = parameters[parameterBaseName+".max-height"];
    }
    // define element.max-width
    parameterBaseElement.style.maxWidth = parameters[parameterBaseName+".max-width"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.maxWidth = parameters[parameterBaseName+".max-width"];
    }
    // define element.font
    parameterBaseElement.style.font = parameters[parameterBaseName+".font"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.font = parameters[parameterBaseName+".font"];
    }
    // define element.font-weight
    parameterBaseElement.style.fontWeight = parameters[parameterBaseName+".font-weight"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.fontWeight = parameters[parameterBaseName+".font-weight"];
    }
    // define element.font-family
    parameterBaseElement.style.fontFamily = parameters[parameterBaseName+".font-family"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.fontFamily = parameters[parameterBaseName+".font-family"];
    }
    // define element.font-size
    parameterBaseElement.style.fontSize = parameters[parameterBaseName+".font-size"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.fontSize = parameters[parameterBaseName+".font-size"];
    }
    // define element.z-index
    parameterBaseElement.style.zIndex = parameters[parameterBaseName+".z-index"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.zIndex = parameters[parameterBaseName+".z-index"];
    }
    // define element.opacity
    parameterBaseElement.style.opacity = parameters[parameterBaseName+".opacity"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.opacity = parameters[parameterBaseName+".opacity"];
    }
    // define element.text-align
    parameterBaseElement.style.textShadow = parameters[parameterBaseName+".text-align"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.textShadow = parameters[parameterBaseName+".text-align"];
    }
    // define element.text-shadow
    parameterBaseElement.style.textShadow = parameters[parameterBaseName+".text-shadow"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.textShadow = parameters[parameterBaseName+".text-shadow"];
    }
    // define element.transform
    parameterBaseElement.style.transform = parameters[parameterBaseName+".transform"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.transform = parameters[parameterBaseName+".transform"];
    }
    // define element.box-shadow
    parameterBaseElement.style.boxShadow = parameters[parameterBaseName+".box-shadow"];
    if (parameterBaseElement.querySelector('.nav-link.active') !== null) {
        parameterBaseElement.querySelector('.nav-link.active').style.boxShadow = parameters[parameterBaseName+".box-shadow"];
    }


}
