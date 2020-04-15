/******* SLIDING TAB Function *****/
/*       This function will       */
/*   create a sliding animation   */
/*   between tabs when clicking   */
/*     on next tab or clicking    */
/*         next tab button        */
/**********************************/

// Usage: make tab menu parent div contain class "nav-pills", make each tab item (usually li) contain class "nav-link"
// make any "Next" button contain class "JNextButton" and any "Back" button conain "JBackButton"
// Pure Javascript with dependency on gsam which is also pure javascript and no dependencies


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


    //define if we want navigation buttons added
    if (parameters.addButtons === undefined) parameters.addButtons = true;

    //define navigation shape
    if (parameters.navShape === undefined) parameters.navShape = "square";

    //define navigation background color
    if (parameters.navBackground === undefined) parameters.navBackground = "blue";

    //define navigation font color
    if (parameters.navFontColor === undefined) parameters.navFontColor = "white";

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

    if (parameters.customNavTabs === undefined) parameters.customNavTabs = "BSNavTab";

    if (parameters.navTabTextOffetX === undefined) parameters.navTabTextOffetX = 0;

    if (parameters.navTabTextOffetY === undefined) parameters.navTabTextOffetY = 0;


    //create variable to determine if we have vertical tabs
    var vertical = false;

    // convert nav-tabs to nav-pills
    var i, elements = BSObject.getElementsByClassName('nav-tabs');
    for (i = elements.length; i--;) {
        console.log("found nav-tab instead of nav-pill");
        elements[i].className += " nav-pills";
        elements[i].style.setProperty("background-color", "transparent");

        elements[i].classList.remove("nav-tabs");
    }

    //see if we have vertical tabs
    console.log(BSObject.getElementsByClassName('nav-pills')[0]);
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
        console.log(element);
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


    if (parameters.navShape == "square") { getCommonAncestor(pills, pane).classList += " NavShapeSquare"; }
    if (parameters.navShape == "oval") { getCommonAncestor(pills, pane).classList += " NavShapeOval"; }
    if (parameters.navShape == "circle") { getCommonAncestor(pills, pane).classList += " NavShapeCircle"; }

    if (parameters.navBackground == "blue") { getCommonAncestor(pills, pane).classList += " NavBackgroundBlue"; }
    if (parameters.navBackground == "white") { getCommonAncestor(pills, pane).classList += " NavBackgroundWhite"; }
    if (parameters.navBackground == "clear") { getCommonAncestor(pills, pane).classList += " NavBackgroundClear"; }

    if (parameters.navFontColor == "white") { getCommonAncestor(pills, pane).classList += " NavFontWhite"; }
    if (parameters.navFontColor == "blue") { getCommonAncestor(pills, pane).classList += " NavFontBlue"; }

    if (parameters.navUnderline == true) { getCommonAncestor(pills, pane).classList += " NavUnderlineBlue"; }

    if (parameters.navShadow == true) { getCommonAncestor(pills, pane).classList += " NavBlueShadow"; }

    if (vertical == true) {
        getCommonAncestor(pills, pane).classList += " BSVertical";
    } else {
        getCommonAncestor(pills, pane).classList += " BSHorizontal";
    }

    if (parameters.addButtons == true) {
        AddButtons(getCommonAncestor(pills, pane), parameters);
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

            JAnimate(JCurTab, JNewTab, BSObject, parameters);

        });
    }

    //Add listeners for when next button is clicked
    var elements = BSObject.getElementsByClassName("JNextButton");
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
    var elements = BSObject.getElementsByClassName("JBackButton");
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

    ReFresh(BSObject, parameters);

}


function AddButtons(topContainer, parameters) {
    console.log("Add append buttons as child of:");
    console.log(topContainer);
    var buttombuttons = "<div class='BSMagicButtons col-sm-12' style='justify-content:space-between;'><div class='float-right'> <button type='button' class='btn btn-next btn-fill btn-danger btn-wd square JNextButton' name='next' value='Next' >" + parameters.nextText + "</button></div><div class='pull-left'><button type='button' class='btn btn-previous btn-fill btn-default btn-wd square JBackButton' name='previous' value='Previous' >" + parameters.prevText + "</button></div><div class='clearfix'></div></div>";
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
    var i, elements = BSObject.getElementsByClassName(parameters.customNavTabs);
    for (i = elements.length; i--;) {
        elements[i].parentNode.removeChild(elements[i]);
    }


    // create new div containing the drawing
    var div = document.createElement("div")
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
    if (parameters.navShape == "circle") { div.style.height = JCurtRect.width + "px"; } else
        div.style.height = JCurtRect.height + "px";
    div.style.position = "fixed";
    div.style.top = parseInt(JCurtRect.top) + parseInt(parameters.navOffsetY) - 12 + 'px'; //12 subtracted to add for padding in css
    div.style.left = parseInt(JCurtRect.left) + parseInt(parameters.navOffsetX) + 'px';
    div.style.pointerEvents = "none";
    div.className += " " + parameters.customNavTabs;
    div.innerHTML = JNewTab.innerHTML;

    if (div.children.length > 0) {
        div.children[0].style.left = parseInt(parameters.navTabTextOffetX) + "px";
        div.children[0].style.top = parseInt(parameters.navTabTextOffetY) + "px";
    }

    // var navpills = BSObject.getElementsByClassName("nav-pills");
    JCurTab.parentElement.appendChild(div);


    if (BSObject.querySelector('.nav-link.active').children.length > 0) {
        textOffset = BSObject.querySelector('.nav-link.active').children[0];
        textOffset.style.top = parseInt(parameters.navTabTextOffetY) + "px";
        textOffset.style.left = parseInt(parameters.navTabTextOffetX) + "px";
    }

    // now animate the new div to expand to the nex location and then move over and shink or epand to new size
    var tl = new TimelineLite();
    tl.eventCallback("onComplete", function() {
        ReFresh(BSObject, parameters);
    });
    tl.eventCallback("onComplete", function() {
        ReFresh(BSObject, parameters);
    });
    tl.eventCallback("onComplete", function() {
        ReFresh(BSObject, parameters);
    });

    tl.staggerFromTo(BSObject.getElementsByClassName(parameters.customNavTabs), 0.5, {
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
    div.style.width = JCurtRect.width + 'px';
    1212
    if (parameters.navShape == "circle") { div.style.height = JCurtRect.width + 'px'; } else
        div.style.height = JCurtRect.height + 'px';
    1212
    div.style.position = "fixed";
    div.style.top = parseInt(JCurtRect.top) + parseInt(parameters.navOffsetY) - 12 + 'px'; // 12 subtracted to add for padding in css
    div.style.left = parseInt(JCurtRect.left) + parseInt(parameters.navOffsetX) + 'px';
    div.style.pointerEvents = "none";
    div.className += " " + parameters.customNavTabs;
    div.innerHTML = JCurTab.innerHTML;

    var navpills = BSObject.getElementsByClassName("nav-pills");
    if (parameters.isWizard) {
        var pills = BSObject.getElementsByClassName('nav-pills')[0];
        var pane = BSObject.getElementsByClassName('tab-pane')[0];
        var BSparent = getCommonAncestor(pills, pane);
        //   console.log(BSparent);
        BSparent.children[0].style.display = "none";
    } else
        navpills[0].appendChild(div);

    if (BSObject.querySelector('.nav-link.active').children.length > 0) {
        textOffset = BSObject.querySelector('.nav-link.active').children[0];
        textOffset.style.top = parseInt(parameters.navTabTextOffetY) + "px";
        textOffset.style.left = parseInt(parameters.navTabTextOffetX) + "px";
    }

}

function ReFresh(BSObject, parameters) {

    //find the currently active tab
    JCurTab = BSObject.querySelector('.nav-link.active');

    // remove old box first so we don't create duplicates, possibly can remove later
    var i, elements = BSObject.getElementsByClassName(parameters.customNavTabs);
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

    //make sure button stays at last state if it can't go further
    isLast = CheckTabLocation(JCurTab, BSObject, parameters);

    //if there is no next, then we know we just clicked submit button, otherwise which tab is active
    if (JCurTab.classList.contains("nav-link") && JNewTab != null) {
        JCurTab.classList.remove("active");
        JNewTab.className += " active";

        // now change which tab content is visible
        var JCurTabContent = BSObject.querySelector('.tab-pane.active');

        var nextContent = getNextSibling(JCurTabContent);
        JCurTabContent.classList.remove("active");
        JCurTabContent.classList.remove("show");
        nextContent.className += " active";
        nextContent.className += " show";

        //animate the transition
        JAnimate(JCurTab, JNewTab, BSObject, parameters);


        // check tab status 1= first, 2 = middle, 3 = end, 13 = first and end
        var isLast = 0;
        isLast = CheckTabLocation(JNewTab, BSObject, parameters);
        console.log(isLast);
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
    if (document.body.contains(BSObject.getElementsByClassName("JNextButton")[0])) {
        BSObject.getElementsByClassName("JNextButton")[0].innerHTML = "SUBMIT";
    }
}

function nextButtonNotLastTab(BSObject, parameters) {
    // We will default the text to say Next button if NOT on the last tab
    if (document.body.contains(BSObject.getElementsByClassName("JNextButton")[0])) {
        BSObject.getElementsByClassName("JNextButton")[0].innerHTML = parameters.nextText;
    }
}


function backButtonOnFirstTab(BSObject, parameters) {
    // we will hide the back button if on the first tab
    if (document.body.contains(BSObject.getElementsByClassName("JBackButton")[0])) {
        BSObject.getElementsByClassName("JBackButton")[0].style.display = "none";
    }

}

function backButtonNotFirstTab(BSObject, parameters) {
    // We will ensure back button is visible if not first tab
    if (document.body.contains(BSObject.getElementsByClassName("JBackButton")[0])) {
        BSObject.getElementsByClassName("JBackButton")[0].style.display = "block";
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