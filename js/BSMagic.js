/******* SLIDING TAB Function *****/
/*       This function will       */
/*   create a sliding animation   */
/*   between tabs when clicking   */
/*     on next tab or clicking    */
/*         next tab button        */
/**********************************/

// Usage: make tab menu parent div contain class "nav-pills", make each tab item (usually li) contain class "nav-link"
// make any "Next" button contain class "nextButtonBS" and any "Back" button conain "backButonBS"
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

        parameters.addButtons = true;
     //   parameters.navBackground = "NavBackgroundBlue";
        parameters["navTabActiveBS.color"] = "white";
        parameters["navTabActiveBS.background-color"] = "#00bcd4";
        parameters["navTabActiveBS.shape"] = "oval";
        //  parameters.navUnderline = true;
        //  parameters.navShadow = true;
    } else if (parameters.theme == "Magic2") { //white square button with blue underline and shadow and blue text
        parameters.addButtons = true;
    //    parameters.navBackground = "NavShapeSquare2";
        parameters["navTabActiveBS.color"] = "blue";
        parameters["navTabActiveBS.background-color"] = "transparent";
        parameters["navTabActiveBS.shape"] = "square";
        parameters.navUnderline = true;
        parameters.navShadow = true;
    }

    //define if we want navigation buttons added
    if (parameters.buttonBarBS === undefined) parameters.buttonBarBS = true;

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
    if (parameters.navTabActiveBS === undefined) parameters.navTabActiveBS = "BSNavTab";

    if (parameters.navTabActiveFlareBS === undefined) parameters.navTabActiveFlareBS = "BSNavTabFlare";

    if (parameters.navTabTextOffetX === undefined) parameters.navTabTextOffetX = 0;

    if (parameters.navTabTextOffetY === undefined) parameters.navTabTextOffetY = 0;

    if (parameters.navBarBS === undefined) parameters.navBarBS = "";


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

    if (parameters.buttonBarBS == true) {
        buttonBarBS(getCommonAncestor(pills, pane), parameters);
    }

    //check if first or last tab
    CheckTabLocation(JCurTab, BSObject, parameters);

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
    var elements = BSObject.getElementsByClassName("backButonBS");
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


function buttonBarBS(topContainer, parameters) {
    var buttombuttons = "<div class='BSMagicButtons col-sm-12' style='justify-content:space-between;'><div class='float-right'> <button type='button' class='btn btn-next btn-fill btn-danger btn-wd square nextButtonBS' name='next' value='Next' >" + parameters.nextText + "</button></div><div class='float-left'><button type='button' class='btn btn-previous btn-fill btn-default btn-wd square backButonBS' name='previous' value='Previous' >" + parameters.prevText + "</button></div><div class='clearfix'></div></div>";
    topContainer.insertAdjacentHTML('beforeend', buttombuttons);
    topContainer.getElementsByClassName("BSMagicButtons").item(0).setAttribute('data-parent', parameters.id);
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

    // remove old box flare first so we don't create duplicates, possibly can remove later
    var i, elements = BSObject.getElementsByClassName(parameters.navTabActiveFlareBS);
    for (i = elements.length; i--;) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    // create new div containing the drawing
    var div = document.createElement("div")

    //create a sub div where "Flare" elements can be used for a secondary decorative overlay or layer on the main extra tab. 
    var divFlare = document.createElement("div")
    divFlare.className += " " + parameters.navTabActiveFlareBS;

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

    if (parameters["navTabActiveBS.shape"] == "circle") { div.style.height = JCurtRect.width + "px"; } 
    else
        div.style.height = JCurtRect.height + "px";
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



    //************** START MOVE *******/
    if (BSObject.querySelector('.nav-link.active').children.length > 0) {
        textOffset = BSObject.querySelector('.nav-link.active').children[0];
        textOffset.style.top = parseInt(parameters.navTabTextOffetY) + "px";
        textOffset.style.left = parseInt(parameters.navTabTextOffetX) + "px";
    }

    // add custom decorating to the navigation bar or navbar
    if (BSObject.querySelector('.nav-pills') !== null) {

        // remove the bar if it already exists
        if(BSObject.querySelector('.nav-pills').classList.contains(parameters.navBarBS))
        BSObject.querySelector('.nav-pills').classList.remove(parameters.navBarBS);

        BSObject.querySelector('.nav-pills').className += " " + parameters.navBarBS;
    }
       //************** END MOVE *******/


    // add flare layer under main div layer
    div.appendChild(divFlare);
    JCurTab.parentElement.appendChild(div);

    // ADD STYLES for navTabActiveBS

    // define navTabActiveBS.shape
    if (parameters["navTabActiveBS.shape"] == "square") { 
        //first remove any existing shapes if they exist
        if(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.contains(" NavShapeSquare"))
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.remove(" NavShapeSquare");
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList += " NavShapeSquare"; 
    }
    if (parameters["navTabActiveBS.shape"] == "oval") { 
        //first remove any existing shapes if they exist
        if(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.contains(" NavShapeOval"))
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.remove(" NavShapeOval");
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList += " NavShapeOval"; 
    }
    if (parameters["navTabActiveBS.shape"] == "circle") { 
        //first remove any existing shapes if they exist
        if(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.contains(" NavShapeCircle"))
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.remove(" NavShapeCircle");
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList += " NavShapeCircle"; 
    }
    
        // define navTabActiveBS.color
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.color = parameters["navTabActiveBS.color"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.color = parameters["navTabActiveBS.color"];
        }
        // define navTabActiveBS.background-color
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.backgroundColor = parameters["navTabActiveBS.background-color"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.backgroundColor = parameters["navTabActiveBS.background-color"];
        }

        // define navTabActiveBS.background-image
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.backgroundImage = parameters["navTabActiveBS.background-image"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabActiveBS.background-image"];
        }
        // define navTabActiveBS.padding
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.padding = parameters["navTabActiveBS.padding"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabActiveBS.padding"];
        }
        // define navTabActiveBS.margin
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.margin = parameters["navTabActiveBS.margin"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.margin"];
        }
        // define navTabActiveBS.border
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.border = parameters["navTabActiveBS.border"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.border"];
        }
        // define navTabActiveBS.borderRadius
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.borderRadius = parameters["navTabActiveBS.border-radius"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.border-radius"];
        }
        // define navTabActiveBS.height
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.height = parameters["navTabActiveBS.height"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.height"];
        }
        // define navTabActiveBS.width
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.width = parameters["navTabActiveBS.width"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.width"];
        }
        // define navTabActiveBS.min-height
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.minHeight = parameters["navTabActiveBS.min-height"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.min-height"];
        }
        // define navTabActiveBS.min-width
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.minWidth = parameters["navTabActiveBS.min-width"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.min-width"];
        }
        // define navTabActiveBS.max-height
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.maxHeight = parameters["navTabActiveBS.max-height"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.max-height"];
        }
        // define navTabActiveBS.max-width
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.maxWidth = parameters["navTabActiveBS.max-width"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.max-width"];
        }
        // define navTabActiveBS.font
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.font = parameters["navTabActiveBS.font"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.font"];
        }
        // define navTabActiveBS.font-weight
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.fontWeight = parameters["navTabActiveBS.font-weight"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.font-weight"];
        }
        // define navTabActiveBS.font-family
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.fontFamily = parameters["navTabActiveBS.font-family"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.font-family"];
        }
        // define navTabActiveBS.font-size
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.fontSize = parameters["navTabActiveBS.font-size"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.font-size"];
        }



        // define navTabActiveFlareBS.shape
if (parameters["navTabActiveFlareBS.shape"] == "square") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.contains(" NavShapeSquare"))
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.remove(" NavShapeSquare");
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList += " NavShapeSquare"; 
}
if (parameters["navTabActiveFlareBS.shape"] == "oval") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.contains(" NavShapeOval"))
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.remove(" NavShapeOval");
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList += " NavShapeOval"; 
}
if (parameters["navTabActiveFlareBS.shape"] == "circle") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.contains(" NavShapeCircle"))
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.remove(" NavShapeCircle");
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList += " NavShapeCircle"; 
}

    // define navTabActiveFlareBS.color
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.color = parameters["navTabActiveFlareBS.color"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.color = parameters["navTabActiveFlareBS.color"];
    }
    // define navTabActiveFlareBS.background-color
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.backgroundColor = parameters["navTabActiveFlareBS.background-color"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.backgroundColor = parameters["navTabActiveFlareBS.background-color"];
    }

    // define navTabActiveFlareBS.background-image
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.backgroundImage = parameters["navTabActiveFlareBS.background-image"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabActiveFlareBS.background-image"];
    }
    // define navTabActiveFlareBS.padding
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.padding = parameters["navTabActiveFlareBS.padding"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabActiveFlareBS.padding"];
    }
    // define navTabActiveFlareBS.margin
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.margin = parameters["navTabActiveFlareBS.margin"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.margin"];
    }
    // define navTabActiveFlareBS.border
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.border = parameters["navTabActiveFlareBS.border"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.border"];
    }
    // define navTabActiveFlareBS.borderRadius
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.borderRadius = parameters["navTabActiveFlareBS.border-radius"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.border-radius"];
    }
    // define navTabActiveFlareBS.height
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.height = parameters["navTabActiveFlareBS.height"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.height"];
    }
    // define navTabActiveFlareBS.width
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.width = parameters["navTabActiveFlareBS.width"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.width"];
    }
    // define navTabActiveFlareBS.min-height
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.minHeight = parameters["navTabActiveFlareBS.min-height"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.min-height"];
    }
    // define navTabActiveFlareBS.min-width
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.minWidth = parameters["navTabActiveFlareBS.min-width"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.min-width"];
    }
    // define navTabActiveFlareBS.max-height
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.maxHeight = parameters["navTabActiveFlareBS.max-height"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.max-height"];
    }
    // define navTabActiveFlareBS.max-width
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.maxWidth = parameters["navTabActiveFlareBS.max-width"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.max-width"];
    }
    // define navTabActiveFlareBS.font
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.font = parameters["navTabActiveFlareBS.font"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.font"];
    }
    // define navTabActiveFlareBS.font-weight
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.fontWeight = parameters["navTabActiveFlareBS.font-weight"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.font-weight"];
    }
    // define navTabActiveFlareBS.font-family
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.fontFamily = parameters["navTabActiveFlareBS.font-family"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.font-family"];
    }
    // define navTabActiveFlareBS.font-size
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.fontSize = parameters["navTabActiveFlareBS.font-size"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.font-size"];
    }
        


      // define navTabInactiveBS.shape
  if (parameters["navTabInactiveBS.shape"] == "square") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.contains(" NavShapeSquare"))
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.remove(" NavShapeSquare");
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList += " NavShapeSquare"; 
}
if (parameters["navTabInactiveBS.shape"] == "oval") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.contains(" NavShapeOval"))
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.remove(" NavShapeOval");
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList += " NavShapeOval"; 
}
if (parameters["navTabInactiveBS.shape"] == "circle") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.contains(" NavShapeCircle"))
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.remove(" NavShapeCircle");
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList += " NavShapeCircle"; 
}

    // define navTabInactiveBS.color
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.color = parameters["navTabInactiveBS.color"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.color = parameters["navTabInactiveBS.color"];
    }
    // define navTabInactiveBS.background-color
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.backgroundColor = parameters["navTabInactiveBS.background-color"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.backgroundColor = parameters["navTabInactiveBS.background-color"];
    }

    // define navTabInactiveBS.background-image
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.backgroundImage = parameters["navTabInactiveBS.background-image"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabInactiveBS.background-image"];
    }
    // define navTabInactiveBS.padding
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.padding = parameters["navTabInactiveBS.padding"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabInactiveBS.padding"];
    }
    // define navTabInactiveBS.margin
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.margin = parameters["navTabInactiveBS.margin"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.margin"];
    }
    // define navTabInactiveBS.border
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.border = parameters["navTabInactiveBS.border"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.border"];
    }
    // define navTabInactiveBS.borderRadius
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.borderRadius = parameters["navTabInactiveBS.border-radius"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.border-radius"];
    }
    // define navTabInactiveBS.height
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.height = parameters["navTabInactiveBS.height"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.height"];
    }
    // define navTabInactiveBS.width
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.width = parameters["navTabInactiveBS.width"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.width"];
    }
    // define navTabInactiveBS.min-height
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.minHeight = parameters["navTabInactiveBS.min-height"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.min-height"];
    }
    // define navTabInactiveBS.min-width
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.minWidth = parameters["navTabInactiveBS.min-width"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.min-width"];
    }
    // define navTabInactiveBS.max-height
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.maxHeight = parameters["navTabInactiveBS.max-height"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.max-height"];
    }
    // define navTabInactiveBS.max-width
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.maxWidth = parameters["navTabInactiveBS.max-width"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.max-width"];
    }
    // define navTabInactiveBS.font
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.font = parameters["navTabInactiveBS.font"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.font"];
    }
    // define navTabInactiveBS.font-weight
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.fontWeight = parameters["navTabInactiveBS.font-weight"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.font-weight"];
    }
    // define navTabInactiveBS.font-family
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.fontFamily = parameters["navTabInactiveBS.font-family"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.font-family"];
    }
    // define navTabInactiveBS.font-size
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.fontSize = parameters["navTabInactiveBS.font-size"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.font-size"];
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

    var divFlare = document.createElement("div")
    divFlare.className += " " + parameters.navTabActiveFlareBS;

    div.style.width = JCurtRect.width + 'px';

    if (parameters["navTabActiveBS.shape"] == "circle") {
        div.style.height = JCurtRect.width + 'px';
    } else {
        div.style.height = JCurtRect.height + 'px';
    }

    div.style.position = "fixed";
    div.style.top = parseInt(JCurtRect.top) + parseInt(parameters.navOffsetY) - 12 + 'px'; // 12 subtracted to add for padding in css
    div.style.left = parseInt(JCurtRect.left) + parseInt(parameters.navOffsetX) + 'px';
    div.style.pointerEvents = "none";
    div.className += " " + parameters.navTabActiveBS;
    div.innerHTML = JCurTab.innerHTML;


    if (BSObject.querySelector('.nav-link.active').children.length > 0) {
        textOffset = BSObject.querySelector('.nav-link.active').children[0];
        textOffset.style.top = parseInt(parameters.navTabTextOffetY) + "px";
        textOffset.style.left = parseInt(parameters.navTabTextOffetX) + "px";
    }


    // add custom decorating to the navigation bar or navbar
     // remove the bar if it already exists
    // define navBarBS
     if(BSObject.querySelector('.nav-pills').classList.contains(parameters.navBarBS))
     BSObject.querySelector('.nav-pills').classList.remove(parameters.navBarBS);
     BSObject.querySelector('.nav-pills').className += " " + parameters.navBarBS;
     
     //TODO change to querySelectorAll so all are found and not just the first
    // define navTabInactiveBS
     if(BSObject.querySelector(".nav-link:not(.active)"))
     BSObject.querySelector('.nav-link:not(.active)').classList.remove(parameters.navTabInactiveBS);
     BSObject.querySelector('.nav-link:not(.active)').className += " " + parameters.navTabInactiveBS;


    var navpills = BSObject.getElementsByClassName("nav-pills");
    if (parameters.isWizard) {
        var pills = BSObject.getElementsByClassName('nav-pills')[0];
        var pane = BSObject.getElementsByClassName('tab-pane')[0];
        var BSparent = getCommonAncestor(pills, pane);
        //   console.log(BSparent);
        BSparent.children[0].style.display = "none";
    } else {
        // if tabs are going to be visible, then add them
        // add Flare layer to main div
        div.appendChild(divFlare);
        navpills[0].appendChild(div);

    // Add styles for navTabActiveBS
    // define navTabActiveBS.shape
    if (parameters["navTabActiveBS.shape"] == "square") { 
        //first remove any existing shapes if they exist
        if(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.contains(" NavShapeSquare"))
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.remove(" NavShapeSquare");
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList += " NavShapeSquare"; 
    }
    if (parameters["navTabActiveBS.shape"] == "oval") { 
        //first remove any existing shapes if they exist
        if(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.contains(" NavShapeOval"))
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.remove(" NavShapeOval");
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList += " NavShapeOval"; 
    }
    if (parameters["navTabActiveBS.shape"] == "circle") { 
        //first remove any existing shapes if they exist
        if(BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.contains(" NavShapeCircle"))
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList.remove(" NavShapeCircle");
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].classList += " NavShapeCircle"; 
    }
    
        // define navTabActiveBS.color
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.color = parameters["navTabActiveBS.color"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.color = parameters["navTabActiveBS.color"];
        }
        // define navTabActiveBS.background-color
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.backgroundColor = parameters["navTabActiveBS.background-color"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.backgroundColor = parameters["navTabActiveBS.background-color"];
        }

        // define navTabActiveBS.background-image
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.backgroundImage = parameters["navTabActiveBS.background-image"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabActiveBS.background-image"];
        }
        // define navTabActiveBS.padding
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.padding = parameters["navTabActiveBS.padding"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabActiveBS.padding"];
        }
        // define navTabActiveBS.margin
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.margin = parameters["navTabActiveBS.margin"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.margin"];
        }
        // define navTabActiveBS.border
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.border = parameters["navTabActiveBS.border"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.border"];
        }
        // define navTabActiveBS.borderRadius
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.borderRadius = parameters["navTabActiveBS.border-radius"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.border-radius"];
        }
        // define navTabActiveBS.height
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.height = parameters["navTabActiveBS.height"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.height"];
        }
        // define navTabActiveBS.width
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.width = parameters["navTabActiveBS.width"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.width"];
        }
        // define navTabActiveBS.min-height
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.minHeight = parameters["navTabActiveBS.min-height"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.min-height"];
        }
        // define navTabActiveBS.min-width
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.minWidth = parameters["navTabActiveBS.min-width"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.min-width"];
        }
        // define navTabActiveBS.max-height
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.maxHeight = parameters["navTabActiveBS.max-height"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.max-height"];
        }
        // define navTabActiveBS.max-width
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.maxWidth = parameters["navTabActiveBS.max-width"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.max-width"];
        }
        // define navTabActiveBS.font
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.font = parameters["navTabActiveBS.font"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.font"];
        }
        // define navTabActiveBS.font-weight
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.fontWeight = parameters["navTabActiveBS.font-weight"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.font-weight"];
        }
        // define navTabActiveBS.font-family
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.fontFamily = parameters["navTabActiveBS.font-family"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.font-family"];
        }
        // define navTabActiveBS.font-size
        BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].style.fontSize = parameters["navTabActiveBS.font-size"];
        if (BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active') !== null) {
            BSObject.getElementsByClassName(parameters.navTabActiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveBS.font-size"];
        }




        // define navTabActiveFlareBS.shape
if (parameters["navTabActiveFlareBS.shape"] == "square") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.contains(" NavShapeSquare"))
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.remove(" NavShapeSquare");
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList += " NavShapeSquare"; 
}
if (parameters["navTabActiveFlareBS.shape"] == "oval") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.contains(" NavShapeOval"))
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.remove(" NavShapeOval");
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList += " NavShapeOval"; 
}
if (parameters["navTabActiveFlareBS.shape"] == "circle") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.contains(" NavShapeCircle"))
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList.remove(" NavShapeCircle");
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].classList += " NavShapeCircle"; 
}

    // define navTabActiveFlareBS.color
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.color = parameters["navTabActiveFlareBS.color"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.color = parameters["navTabActiveFlareBS.color"];
    }
    // define navTabActiveFlareBS.background-color
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.backgroundColor = parameters["navTabActiveFlareBS.background-color"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.backgroundColor = parameters["navTabActiveFlareBS.background-color"];
    }

    // define navTabActiveFlareBS.background-image
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.backgroundImage = parameters["navTabActiveFlareBS.background-image"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabActiveFlareBS.background-image"];
    }
    // define navTabActiveFlareBS.padding
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.padding = parameters["navTabActiveFlareBS.padding"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabActiveFlareBS.padding"];
    }
    // define navTabActiveFlareBS.margin
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.margin = parameters["navTabActiveFlareBS.margin"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.margin"];
    }
    // define navTabActiveFlareBS.border
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.border = parameters["navTabActiveFlareBS.border"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.border"];
    }
    // define navTabActiveFlareBS.borderRadius
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.borderRadius = parameters["navTabActiveFlareBS.border-radius"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.border-radius"];
    }
    // define navTabActiveFlareBS.height
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.height = parameters["navTabActiveFlareBS.height"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.height"];
    }
    // define navTabActiveFlareBS.width
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.width = parameters["navTabActiveFlareBS.width"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.width"];
    }
    // define navTabActiveFlareBS.min-height
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.minHeight = parameters["navTabActiveFlareBS.min-height"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.min-height"];
    }
    // define navTabActiveFlareBS.min-width
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.minWidth = parameters["navTabActiveFlareBS.min-width"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.min-width"];
    }
    // define navTabActiveFlareBS.max-height
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.maxHeight = parameters["navTabActiveFlareBS.max-height"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.max-height"];
    }
    // define navTabActiveFlareBS.max-width
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.maxWidth = parameters["navTabActiveFlareBS.max-width"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.max-width"];
    }
    // define navTabActiveFlareBS.font
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.font = parameters["navTabActiveFlareBS.font"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.font"];
    }
    // define navTabActiveFlareBS.font-weight
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.fontWeight = parameters["navTabActiveFlareBS.font-weight"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.font-weight"];
    }
    // define navTabActiveFlareBS.font-family
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.fontFamily = parameters["navTabActiveFlareBS.font-family"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.font-family"];
    }
    // define navTabActiveFlareBS.font-size
    BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].style.fontSize = parameters["navTabActiveFlareBS.font-size"];
    if (BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabActiveFlareBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabActiveFlareBS.font-size"];
    }






      // define navTabInactiveBS.shape
  if (parameters["navTabInactiveBS.shape"] == "square") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.contains(" NavShapeSquare"))
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.remove(" NavShapeSquare");
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList += " NavShapeSquare"; 
}
if (parameters["navTabInactiveBS.shape"] == "oval") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.contains(" NavShapeOval"))
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.remove(" NavShapeOval");
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList += " NavShapeOval"; 
}
if (parameters["navTabInactiveBS.shape"] == "circle") { 
    //first remove any existing shapes if they exist
    if(BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.contains(" NavShapeCircle"))
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList.remove(" NavShapeCircle");
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].classList += " NavShapeCircle"; 
}

    // define navTabInactiveBS.color
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.color = parameters["navTabInactiveBS.color"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.color = parameters["navTabInactiveBS.color"];
    }
    // define navTabInactiveBS.background-color
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.backgroundColor = parameters["navTabInactiveBS.background-color"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.backgroundColor = parameters["navTabInactiveBS.background-color"];
    }

    // define navTabInactiveBS.background-image
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.backgroundImage = parameters["navTabInactiveBS.background-image"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabInactiveBS.background-image"];
    }
    // define navTabInactiveBS.padding
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.padding = parameters["navTabInactiveBS.padding"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.backgroundImage = parameters["navTabInactiveBS.padding"];
    }
    // define navTabInactiveBS.margin
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.margin = parameters["navTabInactiveBS.margin"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.margin"];
    }
    // define navTabInactiveBS.border
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.border = parameters["navTabInactiveBS.border"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.border"];
    }
    // define navTabInactiveBS.borderRadius
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.borderRadius = parameters["navTabInactiveBS.border-radius"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.border-radius"];
    }
    // define navTabInactiveBS.height
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.height = parameters["navTabInactiveBS.height"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.height"];
    }
    // define navTabInactiveBS.width
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.width = parameters["navTabInactiveBS.width"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.width"];
    }
    // define navTabInactiveBS.min-height
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.minHeight = parameters["navTabInactiveBS.min-height"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.min-height"];
    }
    // define navTabInactiveBS.min-width
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.minWidth = parameters["navTabInactiveBS.min-width"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.min-width"];
    }
    // define navTabInactiveBS.max-height
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.maxHeight = parameters["navTabInactiveBS.max-height"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.max-height"];
    }
    // define navTabInactiveBS.max-width
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.maxWidth = parameters["navTabInactiveBS.max-width"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.max-width"];
    }
    // define navTabInactiveBS.font
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.font = parameters["navTabInactiveBS.font"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.font"];
    }
    // define navTabInactiveBS.font-weight
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.fontWeight = parameters["navTabInactiveBS.font-weight"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.font-weight"];
    }
    // define navTabInactiveBS.font-family
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.fontFamily = parameters["navTabInactiveBS.font-family"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.font-family"];
    }
    // define navTabInactiveBS.font-size
    BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].style.fontSize = parameters["navTabInactiveBS.font-size"];
    if (BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active') !== null) {
        BSObject.getElementsByClassName(parameters.navTabInactiveBS)[0].querySelector('.nav-link.active').style.margin = parameters["navTabInactiveBS.font-size"];
    }





    }



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
    if (document.body.contains(BSObject.getElementsByClassName("backButonBS")[0])) {
        BSObject.getElementsByClassName("backButonBS")[0].style.display = "none";
    }

}

function backButtonNotFirstTab(BSObject, parameters) {
    // We will ensure back button is visible if not first tab
    if (document.body.contains(BSObject.getElementsByClassName("backButonBS")[0])) {
        BSObject.getElementsByClassName("backButonBS")[0].style.display = "block";
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