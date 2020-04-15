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



//on load
$(window).on("load", function(){

    //create variable to determine if we have vertical tabs
    var vertical = false;
    // convert nav-tabs to nav-pills
    var i, elements = document.getElementsByClassName('nav-tabs');
    for (i = elements.length; i--;) {     
      elements[i].className += " nav-pills";
      elements[i].style.setProperty("background-color","transparent");
      
      elements[i].classList.remove("nav-tabs");
    }

    //see if we have vertical tabs
    if(document.getElementsByClassName('nav-pills')[0].classList.contains('flex-column')){vertical = true;}

    // Navbar identified by having class="nav-pills"
    var navpills = document.getElementsByClassName("nav-pills");
    // each Navbar item identified by having class="nav-link"
    var navlinks = navpills[0].getElementsByClassName("nav-link");
    // grabs the first tab and sets it as active
    var JCurTab = navpills[0].getElementsByClassName("nav-link")[0];
    JCurTab.className += " active";

    //check if first or last tab
    CheckTabLocation(JCurTab);

  
    //divide the navbar width into equal space for each tab (Horizonal)
    var jtotal = navlinks.length;
    jwidth = 100/jtotal;

    Array.prototype.forEach.call(navlinks, function(tab) {
        // if parent contain nav-pills that we don't have the nav-link in a wrapper
      if(tab.parentElement.classList.contains("nav-pills"))
        tab.style.width = jwidth+'%';
        else
        tab.parentElement.style.width = jwidth+'%';
    });


    //make vertical alignment even if using vertical tabs
    if(vertical == true){
        
         element = document.getElementsByClassName('flex-column')[0];
         console.log(element);
         height = element.getBoundingClientRect().height;
         width = element.getBoundingClientRect().width;
         elementHeight = height / jtotal;

         Array.prototype.forEach.call(navlinks, function(tab) {
            // if parent contain nav-pills that we don't have the nav-link in a wrapper
          if(tab.parentElement.classList.contains("nav-pills")){
            tab.style.height = elementHeight+'px';
            tab.style.width = width+'px';
            tab.style.textAlign = "center";
            }
            else
            {
            tab.parentElement.style.height = elementHeight+'px';
            tab.parentElement.style.width = width+'px';
            tab.parentElement.style.textAlign = "center"
            }
        });

    }

    //find the currently active tab
    JCurTab = document.querySelector('.nav-link.active');

     // if parent contain nav-pills that we don't have the nav-link in a wrapper
    if(JCurTab.parentElement.classList.contains("nav-pills"))
        Initialize(JCurTab);  // draw initial bo around starting tab
    else
       Initialize(JCurTab.parentElement);  // draw initial bo around starting tab
    
   
    

    //Add listeners for when tab is clicked
    var elements = document.getElementsByClassName("nav-link");

    var i=0;
    for ( i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(){
            var JCurTab = document.querySelector('.nav-link.active');
            var JNewTab = this;
            
            //check if we are on the first or last tab
            console.log(CheckTabLocation(JNewTab));

            JAnimate(JCurTab, JNewTab);

            
           
        
        });
    }

    //Add listeners for when next button is clicked
    var elements = document.getElementsByClassName("JNextButton");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(){
            var JCurTab = document.querySelector('.nav-link.active');
            NextTab(JCurTab);
        });
    }

    //Add listeners for when back button is clicked
    var elements = document.getElementsByClassName("JBackButton");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(){
            var JCurTab = document.querySelector('.nav-link.active');
            BackTab(JCurTab);
        });
    }


    //add listeners to resize or relocate if scrolling or resizing
    window.onscroll = function() {ReFresh()};
    window.onresize = function() {ReFresh()};

});



// animate moving box from last tab to new tab
function JAnimate(JCurTab,JNewTab){

    //fix selection in nav-items not in a wrapper
    if(JCurTab.parentElement.classList.contains("nav-pills"))
        JCurTab = JCurTab;
            else
        JCurTab = JCurTab.parentElement;

     if(JNewTab.parentElement.classList.contains("nav-pills"))
        JNewTab = JNewTab;
            else
        JNewTab = JNewTab.parentElement;
    
    // remove old box first so we don't create duplicates, possibly can remove later
    var i, elements = document.getElementsByClassName('JNavBlue');
    for (i = elements.length; i--;) {         
      elements[i].parentNode.removeChild(elements[i]);             
    }
    

    // create new div containing the drawing
    var div = document.createElement("div");
    var JCurtRect = JCurTab.getBoundingClientRect();
    var JNewRect = JNewTab.getBoundingClientRect();

   
    // Getting offsets between items
    Yoffset  = Math.abs(JCurtRect.top - JNewRect.top);
    Xoffset  = Math.abs(JCurtRect.left - JNewRect.left);

    // Get Width from one to the other
    FullWidth = JNewRect.width + Xoffset + 29; // 29 is added for for an unknown reason at the moment
    FullHeight = JNewRect.height + Yoffset;

    //need to redraw div otherwise movement will be be offset incorrectly - possible can remove later
    div.style.width = JCurtRect.width;
    div.style.height = JCurtRect.height;
    div.style.position = "fixed";
    div.style.top = (JCurtRect.top - 12)+'px'; // 12 added to add for padding in css
    div.style.left = JCurtRect.left+'px';
    div.style.pointerEvents = "none";
    div.className += " JNavBlue";
    div.textContent = JNewTab.textContent;

    
    var navpills = document.getElementsByClassName("nav-pills");
    navpills[0].appendChild(div);


// now animate the new div to expand to the nex location and then move over and shink or epand to new size
var tl = new TimelineLite();
tl.staggerFromTo(".JNavBlue",0.5,{
    y: JCurTab.top,
    x: JCurTab.left,
    width: Math.abs(FullWidth),
    height: Math.abs(FullHeight),
},{
  y: JNewRect.top - JCurtRect.top,
  x: JNewRect.left - JCurtRect.left,
  width: JNewRect.width,
  height: JNewRect.height,
  ease: "back"
} ,0.5);

    
}


function Initialize(JCurTab){

    var vertical = false;
    //see if we have vertical tabs
    if(document.getElementsByClassName('nav-pills')[0].classList.contains('flex-column')){vertical = true;}
     // Navbar identified by having class="nav-pills"
     var navpills = document.getElementsByClassName("nav-pills");
    // each Navbar item identified by having class="nav-link"
    var navlinks = navpills[0].getElementsByClassName("nav-link");
    //make vertical alignment even if using vertical tabs
    var jtotal = navlinks.length;
    jwidth = 100/jtotal;
    
    if(vertical == true){
        
         element = document.getElementsByClassName('flex-column')[0];
         console.log(element);
         height = element.getBoundingClientRect().height;
         width = element.getBoundingClientRect().width;
         elementHeight = height / jtotal;

         Array.prototype.forEach.call(navlinks, function(tab) {
            // if parent contain nav-pills that we don't have the nav-link in a wrapper
          if(tab.parentElement.classList.contains("nav-pills")){
            tab.style.height = elementHeight+'px';
            tab.style.width = width+'px';
            tab.style.textAlign = "center";
            }
            else
            {
            tab.parentElement.style.height = elementHeight+'px';
            tab.parentElement.style.width = width+'px';
            tab.parentElement.style.textAlign = "center"
            }
        });

    }

    // create initial box image around active tab on load
    var JCurtRect = JCurTab.getBoundingClientRect();
    var div = document.createElement("div");
    div.style.width = JCurtRect.width+'px';
    div.style.height = JCurtRect.height+'px';
    div.style.position = "fixed";
    div.style.top = (JCurtRect.top - 12)+'px'; // 12 added to add for padding in css
    div.style.left = JCurtRect.left+'px';
    div.style.pointerEvents = "none";
    div.className += " JNavBlue";
    div.textContent = JCurTab.textContent;

    var navpills = document.getElementsByClassName("nav-pills");
    
    navpills[0].appendChild(div);
}

function ReFresh(){
    //find the currently active tab
    JCurTab = document.querySelector('.nav-link.active');
    
    // remove old box first so we don't create duplicates, possibly can remove later
    var i, elements = document.getElementsByClassName('JNavBlue');
    for (i = elements.length; i--;) {         
      elements[i].parentNode.removeChild(elements[i]);             
    }

     // if parent contain nav-pills that we don't have the nav-link in a wrapper
    if(JCurTab.parentElement.classList.contains("nav-pills"))
        Initialize(JCurTab);  // draw initial bo around starting tab
    else
        Initialize(JCurTab.parentElement);  // draw initial bo around starting tab


};

//when forward button is pressed
function NextTab(JCurTab){
 
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
            sibling = sibling.nextElementSibling
        }
    };

    //find and go to the next tab if it exists;
     var next = getNextSibling(JCurTab.parentElement).getElementsByClassName("nav-link")[0];
      
     
   
    //if there is no next, then we know we just clicked submit button, otherwise which tab is active
    if(JCurTab.classList.contains("nav-link") && next != null){
            JCurTab.classList.remove("active");
            next.className += " active";
       
       
        
       // now change which tab content is visible
       var JCurTabContent = document.querySelector('.tab-pane.active');
       
       var nextContent = getNextSibling(JCurTabContent);
       JCurTabContent.classList.remove("active");
       JCurTabContent.classList.remove("show");
       nextContent.className += " active";
       nextContent.className += " show";

        //animate the transition
        JAnimate(JCurTab,next);


    // check tab status 1= first, 2 = middle, 3 = end, 13 = first and end
    var isLast=0;
     isLast = CheckTabLocation(next);
    if(isLast == 3 || isLast==13){
        //We are on te last tab, if we care to identify it
        //console.log("LAST TAB: "+isLast);
    }
            
    }
    else{
       // console.log("CLICKED LAST");
        CheckTabLocation(next);
        submitClicked();
    }
  
}


//when forward button is pressed
function BackTab(JCurTab){
 
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

    //find and go to the previous tab if it exists;
     var back = getPreviousSibling(JCurTab.parentElement).getElementsByClassName("nav-link")[0];
      
     
   
    //if there is no back, then we know we are at the beginning, otherwise which tab is active
    if(JCurTab.classList.contains("nav-link") && back != null){
            JCurTab.classList.remove("active");
            back.className += " active";
       
       
        
       // now change which tab content is visible
       var JCurTabContent = document.querySelector('.tab-pane.active');
       
       var backContent = getPreviousSibling(JCurTabContent);
       JCurTabContent.classList.remove("active");
       JCurTabContent.classList.remove("show");
       backContent.className += " active";
       backContent.className += " show";

        //animate the transition
        JAnimate(JCurTab,back);


    // check tab status 1= first, 2 = middle, 3 = end, 13 = first and end
    var isFirst=0;
    isFirst = CheckTabLocation(back);
    if(isFirst == 1 || isFirst==13){
        //We are on te last tab, if we care to identify it
        //console.log("FIRST TAB: "+isFirst);
    }
            
    }
    else{
        //console.log("CLICKED FIRST");
        CheckTabLocation(back);
    }
  
}


function nextButtonOnLastTab(){
    // We will change the text of the Next button to say Submit if on the last tab
    if (document.body.contains(document.getElementsByClassName("JNextButton")[0])){
        document.getElementsByClassName("JNextButton")[0].textContent = "SUBMIT";
    }
}
function nextButtonNotLastTab(){
    // We will default the text to say Next button if NOT on the last tab
    if (document.body.contains(document.getElementsByClassName("JNextButton")[0])){
        document.getElementsByClassName("JNextButton")[0].textContent = "NEXT";
    }
}


function backButtonOnFirstTab(){
    // we will hide the back button if on the first tab
    if (document.body.contains(document.getElementsByClassName("JBackButton")[0])){
        document.getElementsByClassName("JBackButton")[0].style.display = "none";
    }
    
}
function backButtonNotFirstTab(){
    // We will ensure back button is visible if not first tab
    if (document.body.contains(document.getElementsByClassName("JBackButton")[0])){
        document.getElementsByClassName("JBackButton")[0].style.display = "block";
    }

    
}

function CheckTabLocation(curTab){
    //Now we will also check if we are on the first or last tab, in case we want to adjust the buttons

    var firstTab = document.getElementsByClassName("nav-link")[0];
    var lastTab = document.getElementsByClassName("nav-link")[document.getElementsByClassName("nav-link").length -1];

    if( curTab == firstTab == lastTab)
    {
        //This is the first AND last tab
        backButtonOnFirstTab();
        nextButtonOnLastTab();
        return 13;
    }
    if ( (curTab != firstTab) && (curTab != lastTab) )
    {
        backButtonNotFirstTab();
        nextButtonNotLastTab();
        return 2;
    }
    if( curTab == lastTab ){
        //we are on the last tab
        nextButtonOnLastTab();
        backButtonNotFirstTab();
        return 3;
    }
    if( curTab == firstTab ){
        //we are on the first tab
        backButtonOnFirstTab();
        return 1;
    }
}

function submitClicked(){
    // we will hide the back button if on the first tab
    console.log("CLICKED SUBMIT");
}