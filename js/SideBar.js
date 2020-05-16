// define properties for Box-Shadow
var GlobalBSInset = false;
var GlobalBSHOffset = 0;
var GlobalBSVOffset = 0;
var GlobalBSBlur = 0;
var GlobalBSSpread = 0;
var GlobalBSBackgroundColor = "rgb(255,0,0)";
// Define properties for Borders
var GlobalBLeft = 0;
var GlobalBRight = 0;
var GlobalBTop = 0;
var GlobalBBottom= 0;
var GlobalBColor = "rgb(255,0,0)";
var GlobalBRadUL = 0;
var GlobalBRadUR = 0;
var GlobalBRadBR = 0;
var GlobalBRadBL = 0;
var GlobalBStyle = "none";

var htmlHorizontal = '<div class="row col-sm-12" style="justify-content: center;"> ' + 
'<center> ' + 
'<div class="row col-sm-12"> ' + 
'<center> ' + 
'<div class="bd-example-tabs" style="max-width: 700px;" id="JTab1" > ' + 
'<ul class="nav nav-tabs" role="tablist"> ' + 
'<li class="nav-item"> ' + 
'<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a> ' + 
'</li> ' + 
'<li class="nav-item"> ' + 
'<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a> ' + 
'</li> ' + 
'<li class="nav-item"> ' + 
'<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Messages</a> ' + 
'</li> ' + 
'</ul> ' + 
'<div class="tab-content" id="myTabContent"> ' + 
'<div class="tab-pane fade show active" id="homes" role="tabpanel" aria-labelledby="home-tab"> ' + 
'<p>Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher ' + 
'synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p> ' + 
'</div> ' + 
'<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> ' + 
'<p>Food truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth ' + 
'letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore ' + 
'stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed ' + 
'echo park.</p> ' + 
'</div> ' + 
'<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"> ' + 
'<p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeneys organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles ' + 
'etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred ' + 
'you probably havent heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p> ' + 
'</div> ' + 
'</div> ' + 
'</center> ' + 
'</div> ' + 
'</center> ' + 
'</div> '; 

htmlVertical = '<div class="row col-sm-12" style="justify-content: center;"> ' + 
'<center> ' + 
'<div class=" bd-example bd-example-tabs" style="max-width: 700px;" id="JTab1"   > ' + 
'<div class="row"> ' + 
'<div class="col-3"> ' + 
'<div class="nav flex-column flex-grow-1 flex-fill nav-pills" role="tablist" ' + 
'style="height: 200px;" aria-orientation="vertical"> ' + 
'<a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" ' + 
'href="#v-pills-home" role="tab" aria-controls="v-pills-home" ' + 
'aria-selected="true">Home</a> ' + 
'<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" ' + 
'href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" ' + 
'aria-selected="false">Profile</a> ' + 
'<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" ' + 
'href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" ' + 
'aria-selected="false">Messages</a> ' + 
'<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" ' + 
'href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" ' + 
'aria-selected="false">Settings</a> ' + 
'</div> ' + 
'</div> ' + 
'<div class="col-9"> ' + 
'<div class="tab-content" id="v-pills-tabContent"> ' + 
'<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" ' + 
'aria-labelledby="v-pills-home-tab"> ' + 
'<p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem ' + 
'sint. Veniam ' + 
'sint duis incididunt do esse magna mollit excepteur laborum qui. Id id ' + 
'reprehenderit sit ' + 
'est eu aliqua occaecat quis et velit excepteur ' + 
'laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate ' + 
'minim ' + 
'reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu ' + 
'deserunt excepteur ' + 
'ea incididunt minim occaecat.</p> ' + 
'</div> ' + 
'<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" ' + 
'aria-labelledby="v-pills-profile-tab"> ' + 
'<p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt ' + 
'duis pariatur ' + 
'mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt ' + 
'commodo et ' + 
'minim in quis laboris ipsum velit id veniam. Quis ' + 
'ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip ' + 
'labore Lorem ' + 
'enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse ' + 
'anim eiusmod do ' + 
'sint minim consectetur qui.</p> ' + 
'</div> ' + 
'<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" ' + 
'aria-labelledby="v-pills-messages-tab"> ' + 
'<p>Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute ' + 
'qui magna. Ad ' + 
'proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure ' + 
'occaecat velit ' + 
'nostrud magna nulla. Velit et et proident Lorem ' + 
'do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna ' + 
'commodo est ea ' + 
'veniam consectetur.</p> ' + 
'</div> ' + 
'<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" ' + 
'aria-labelledby="v-pills-settings-tab"> ' + 
'<p>Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit ' + 
'consectetur elit ' + 
'id dolor proident in cupidatat officia. Voluptate excepteur commodo labore ' + 
'nisi cillum ' + 
'duis aliqua do. Aliqua amet qui mollit consectetur ' + 
'nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ' + 
'ullamco sit ' + 
'adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod. ' + 
'</p> ' + 
'</div> ' + 
'</div> ' + 
'</div> ' + 
'</div> ' + 
'</div> ' + 
'</center> ' + 
'</div> ';

function getBSAlignmentBar(control){

    rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
    '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
    '<h4 class="text-light mb-0" style="text-align: center;">Alignment</h4> ' + 
    '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
    
    rcontent = getBSTop(control) + getBSBottom(control) + getBSLeft(control) + getBSRight(control);
    
    rfooter = '</div> ';
    
    rtn = rheader + rcontent + rfooter;
    
    $('#bs-canvas-right').html(rtn);
}

function getBSMarginBar(control){

    rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
    '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
    '<h4 class="text-light mb-0" style="text-align: center;">Margin</h4> ' + 
    '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
    
    rcontent = getBSMTop(control) + getBSMBottom(control) + getBSMLeft(control) + getBSMRight(control);
    
    rfooter = '</div> ';
    
    rtn = rheader + rcontent + rfooter;
    
    $('#bs-canvas-right').html(rtn);
}

function getBSPaddingBar(control){

    rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
    '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
    '<h4 class="text-light mb-0" style="text-align: center;">Padding</h4> ' + 
    '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
    
    rcontent = getBSPTop(control) + getBSPBottom(control) + getBSPLeft(control) + getBSPRight(control);
    
    rfooter = '</div> ';
    
    rtn = rheader + rcontent + rfooter;
    
    $('#bs-canvas-right').html(rtn);
}

    function getBSWidthBar(control){


        rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
        '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
        '<h4 class="text-light mb-0" style="text-align: center;">Width</h4> ' + 
        '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
        
        rcontent = getBSWidth(control) + getBSMinWidth(control) + getBSMaxWidth(control);
        
        rfooter = '</div> ';
        
        rtn = rheader + rcontent + rfooter;
        
        $('#bs-canvas-right').html(rtn);
    }

    function getBSHeightBar(control){


        rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
        '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
        '<h4 class="text-light mb-0" style="text-align: center;">Height</h4> ' + 
        '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
        
        rcontent = getBSHeight(control) + getBSMinHeight(control) + getBSMaxHeight(control);
        
        rfooter = '</div> ';
        
        rtn = rheader + rcontent + rfooter;
        
        $('#bs-canvas-right').html(rtn);

    }

    function getBSBorderBar(control){


        rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
        '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
        '<h4 class="text-light mb-0" style="text-align: center;">Border</h4> ' + 
        '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
        
        rcontent = getBLeft(control) + getBRight(control) + getBTop(control) + getBBottom(control) + getBColor(control) + getBStyle(control) + getBRadiusUL(control) + getBRadiusUR(control) + getBRadiusBR(control) + getBRadiusBL(control);
        
        rfooter = '</div> ';
        
        rtn = rheader + rcontent + rfooter;
        
        $('#bs-canvas-right').html(rtn);
    }

    function getBSBackgroundColorBar(control){


        rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
        '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
        '<h4 class="text-light mb-0" style="text-align: center;">Background Color</h4> ' + 
        '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
        
        rcontent = getBSBackgroundColor(control);
        
        rfooter = '</div> ';
        
        rtn = rheader + rcontent + rfooter;
        
        $('#bs-canvas-right').html(rtn);
    }

    function getBSColorBar(control){


        rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
        '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
        '<h4 class="text-light mb-0" style="text-align: center;">Text Color</h4> ' + 
        '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
        
        rcontent = getBSColor(control);
        
        rfooter = '</div> ';
        
        rtn = rheader + rcontent + rfooter;
        
        $('#bs-canvas-right').html(rtn);
    }

function getBSBoxShadowBar(control){


rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
'<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
'<h4 class="text-light mb-0" style="text-align: center;">Box Shadow</h4> ' + 
'</header><div class="bs-canvas-content px-3 py-5"><hr> ';

rcontent = getBSHOffset(control) + getBSVOffset(control) + getBSSpread(control) + getBSBlur(control) + getBSInset(control) + getBSBackgroundColorBox(control);

rfooter = '</div> ';

rtn = rheader + rcontent + rfooter;

$('#bs-canvas-right').html(rtn);
}





function getBTop(control){
    rtn = '<div class="uk-width-1-1">' +
    '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
    'id="BTop">0</span> Top: </label> ' + 
    '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
    'value="0" min="0" max="100" step="1" ' + 
    'oninput="document.getElementById(\'BTop\').innerHTML = this.value; updateBorder(this.value,\'Top\');"></div>  <hr>';
    return rtn;
    }
    
    function getBBottom(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BBottom">0</span> Bottom: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="0" max="100" step="1" ' + 
        'oninput="document.getElementById(\'BBottom\').innerHTML = this.value; updateBorder(this.value,\'Bottom\');"></div>  <hr>';
        return rtn;
        }
    
        function getBLeft(control){
            rtn = '<div class="uk-width-1-1">' +
            '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
            'id="BLeft">0</span> Left: </label> ' + 
            '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
            'value="0" min="0" max="100" step="1" ' + 
            'oninput="document.getElementById(\'BLeft\').innerHTML = this.value; updateBorder(this.value,\'Left\');"></div>  <hr>';
            return rtn;
        }
    
        function getBRight(control){
            rtn = '<div class="uk-width-1-1">' +
            '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
            'id="BRight">0</span> Right: </label> ' + 
            '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
            'value="0" min="0" max="100" step="1" ' + 
            'oninput="document.getElementById(\'BRight\').innerHTML = this.value; updateBorder(this.value,\'Right\');"></div>  <hr>';
            return rtn;
        }
    
        function getBStyle(control){
            rtn = '<div class="uk-width-1-1">' +
            '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
            'id="BStyle">None</span> Style: </label> ' + 
            '<div uk-form-custom="target: > * > span:first-child">' + 
            '<select oninput="document.getElementById(\'BStyle\').innerHTML = this.value; updateBorder(this.value,\'Style\'); ">' + 
            '<option value="none">None</option>' + 
            '<option value="solid">Solid</option> ' + 
            '<option value="dotted">Dotted</option> ' + 
            '<option value="dashed">Dashed</option> ' + 
            '<option value="double">Double</option> ' + 
            'option value="groove">Groove</option> ' + 
            'option value="ridge">Ridge</option> ' + 
            '<option value="inset">Inset</option> ' + 
            '<option value="outset">Outset</option> ' + 
            '</select> ' + 
            '<button class="uk-button uk-button-default" type="button" tabindex="-1"> ' + 
            '<span></span> ' + 
            '<span uk-icon="icon: chevron-down"></span> ' + 
            '</button> ' + 
            '</div>  <hr>';
            return rtn;
        
            }
        
            function getBRadiusUL(control) {
                rtn = '<div class="uk-width-1-1">' +
                    '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' +
                    'id="BRadiusUL">0</span> Upper-Left: </label> ' +
                    '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' +
                    'value="0" min="0" max="50" step="1" ' +
                    'oninput="document.getElementById(\'BRadiusUL\').innerHTML = this.value; updateBorder(this.value,\'UL\');"></div>  <hr>';
                return rtn;
            }
            
            function getBRadiusUR(control) {
                rtn = '<div class="uk-width-1-1">' +
                    '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' +
                    'id="BRadiusUR">0</span> Upper-Right: </label> ' +
                    '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' +
                    'value="0" min="0" max="50" step="1" ' +
                    'oninput="document.getElementById(\'BRadiusUR\').innerHTML = this.value; updateBorder(this.value,\'UR\');"></div>  <hr>';
                return rtn;
            }
            
            function getBRadiusBR(control) {
                rtn = '<div class="uk-width-1-1">' +
                    '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' +
                    'id="BRadiusBR">0</span> Bottom-Right: </label> ' +
                    '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' +
                    'value="0" min="0" max="50" step="1" ' +
                    'oninput="document.getElementById(\'BRadiusBR\').innerHTML = this.value; updateBorder(this.value,\'BR\');"></div>  <hr>';
                return rtn;
            }
            
            function getBRadiusBL(control) {
                rtn = '<div class="uk-width-1-1">' +
                    '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' +
                    'id="BRadiusBL">0</span> Bottom-Left: </label> ' +
                    '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' +
                    'value="0" min="0" max="50" step="1" ' +
                    'oninput="document.getElementById(\'BRadiusBL\').innerHTML = this.value; updateBorder(this.value,\'BL\');"></div>  <hr>';
                return rtn;
            }
        

function getBSHOffset(control){
    rtn = '<div class="uk-width-1-1">' +
    '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
    'id="BSHOffset">0</span> Horizonal-Offset: </label> ' + 
    '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
    'value="0" min="-50" max="50" step="1" ' + 
    'oninput="document.getElementById(\'BSHOffset\').innerHTML = this.value; updateBoxShadow(this.value,\'HOffset\');"></div>  <hr>';

    return rtn;
    }

    function getBSVOffset(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSVOffset">0</span> Vertical-Offset: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="-50" max="50" step="1" ' + 
        'oninput="document.getElementById(\'BSVOffset\').innerHTML = this.value; updateBoxShadow(this.value,\'VOffset\');"></div>  <hr>';
        return rtn;
    }

    function getBSSpread(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSSpread">0</span> Spread: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="0" max="50" step="1" ' + 
        'oninput="document.getElementById(\'BSSpread\').innerHTML = this.value; updateBoxShadow(this.value,\'Spread\');"></div>  <hr>';
        return rtn;
    }

    function getBSBlur(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSBlur">0</span> Blur: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="0" max="50" step="1" ' + 
        'oninput="document.getElementById(\'BSBlur\').innerHTML = this.value; updateBoxShadow(this.value,\'Blur\');"></div>  <hr>';
        return rtn;
    }

    function getBSOpacity(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSOpacity">0</span> Opacity: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="1.00" min="0.00" max="1.00" step="0.01" ' + 
        'oninput="document.getElementById(\'BSOpacity\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.opacity = this.value;    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.opacity\']; myParams[jsonKey] = this.value; adjustParameters(myParams);  "></div>  <hr>';
       




        return rtn;
    }

    function getBSInset(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "> Inset: &nbsp;</label> ' + 
        '<input id="BSinset" class="uk-width-expand uk-form-controls uk-checkbox" type="checkbox" onInput="updateBoxShadow(this.checked,\'Inset\');" >' + 
        '</div>  <hr>';
        return rtn;
    }
    
    function getBSBackgroundColor(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "> Background Color: </label> ' + 
        '<div id="BSBackgroundColor" class="BSBackgroundColor" data-color="#ffffff" ></div></div> <hr>';
        return rtn;
    }  
    
    function getBSBackgroundColorBox(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "> Background Color: </label> ' + 
        '<div id="BSBackgroundColorBox" class="BSBackgroundColorBox" data-color="#ffffff" onInput="updateBoxShadow(this.value,\'BackgroundColor\');" > </div></div> <hr>';
        return rtn;
    }
    
    function getBColor(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "> Border Color: </label> ' + 
        '<div id="BSBorderColor" class="BSBorderColor" data-color="#ffffff" onInput="updateBorder(this.value,\'Color\');" > </div></div> <hr>';
        return rtn;
    }




        


function getBSTop(control){
rtn = '<div class="uk-width-1-1">' +
'<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
'id="BSTop">0</span> Top: </label> ' + 
'<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
'value="0" min="-500" max="500" step="1" ' + 
'oninput="document.getElementById(\'BSTop\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.top = this.value+\'px\';     var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.top\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
return rtn;
}

function getBSBottom(control){
    rtn = '<div class="uk-width-1-1">' +
    '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
    'id="BSBottom">0</span> Bottom: </label> ' + 
    '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
    'value="0" min="-500" max="500" step="1" ' + 
    'oninput="document.getElementById(\'BSBottom\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.bottom = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.bottom\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
    return rtn;
    }

    function getBSLeft(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSLeft">0</span> Left: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="-100" max="100" step="1" ' + 
        'oninput="document.getElementById(\'BSLeft\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.left = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.left\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
        return rtn;
    }

    function getBSRight(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSRight">0</span> Right: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="-100" max="100" step="1" ' + 
        'oninput="document.getElementById(\'BSRight\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.right = this.value+\'px\';   var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.right\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "</div>  <hr>';
        return rtn;
    }


    function getBSMTop(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSMTop">0</span> Top: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="-100" max="100" step="1" ' + 
        'oninput="document.getElementById(\'BSMTop\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.marginTop = this.value+\'px\';     var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.margin-top\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
        return rtn;
        }
        
    function getBSMBottom(control){
            rtn = '<div class="uk-width-1-1">' +
            '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
            'id="BSMBottom">0</span> Bottom: </label> ' + 
            '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
            'value="0" min="-100" max="100" step="1" ' + 
            'oninput="document.getElementById(\'BSMBottom\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.marginBottom = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.margin-bottom\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
            return rtn;
            }
        
    function getBSMLeft(control){
                rtn = '<div class="uk-width-1-1">' +
                '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
                'id="BSMLeft">0</span> Left: </label> ' + 
                '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
                'value="0" min="-100" max="100" step="1" ' + 
                'oninput="document.getElementById(\'BSMLeft\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.marginLeft = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.margin-left\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
                return rtn;
            }
        
    function getBSMRight(control){
                rtn = '<div class="uk-width-1-1">' +
                '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
                'id="BSMRight">0</span> Right: </label> ' + 
                '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
                'value="0" min="-100" max="100" step="1" ' + 
                'oninput="document.getElementById(\'BSMRight\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.marginRight = this.value+\'px\';   var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.margin-right\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "</div>  <hr>';
                return rtn;
            }

            function getBSPTop(control){
                rtn = '<div class="uk-width-1-1">' +
                '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
                'id="BSPTop">0</span> Top: </label> ' + 
                '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
                'value="0" min="-100" max="100" step="1" ' + 
                'oninput="document.getElementById(\'BSPTop\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.paddingTop = this.value+\'px\';     var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.padding-top\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
                return rtn;
                }
                
            function getBSPBottom(control){
                    rtn = '<div class="uk-width-1-1">' +
                    '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
                    'id="BSPBottom">0</span> Bottom: </label> ' + 
                    '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
                    'value="0" min="-100" max="100" step="1" ' + 
                    'oninput="document.getElementById(\'BSPBottom\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.paddingBottom = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.padding-bottom\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
                    return rtn;
                    }
                
            function getBSPLeft(control){
                        rtn = '<div class="uk-width-1-1">' +
                        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
                        'id="BSPLeft">0</span> Left: </label> ' + 
                        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
                        'value="0" min="-100" max="100" step="1" ' + 
                        'oninput="document.getElementById(\'BSPLeft\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.paddingLeft = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.padding-left\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
                        return rtn;
                    }
                
            function getBSPRight(control){
                        rtn = '<div class="uk-width-1-1">' +
                        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
                        'id="BSPRight">0</span> Right: </label> ' + 
                        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
                        'value="0" min="-100" max="100" step="1" ' + 
                        'oninput="document.getElementById(\'BSPRight\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.paddingRight = this.value+\'px\';   var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.padding-right\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "</div>  <hr>';
                        return rtn;
                    }

                    

    function getBSWidth(control){

        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSWidth">100</span> Width: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="100" min="0" max="100" step="1" ' + 
       
        'oninput="' + 
'var withoutFlair = document.getElementById(\'BSObjectSelector\').value.replace(\'Flair\', \'\'); ' + 
'parameters = returnParameters(); ' + 
'param = withoutFlair; ' + 
'wasWidth = parameters[param]; ' + 
'wasWidth = document.getElementsByClassName(param)[0].getBoundingClientRect().width; ' + 
'rtnVal = wasWidth + \'px\'; ' + 
'if(document.getElementById(\'BSObjectSelector\').value.includes(\'Flair\')){ ' + 
'var withoutFlair = document.getElementById(\'BSObjectSelector\').value.replace(\'Flair\', \'\'); ' + 
'parameters = returnParameters(); ' + 
'param = withoutFlair; ' + 
'wasWidth = parameters[param]; ' + 
'wasWidth = document.getElementsByClassName(param)[0].getBoundingClientRect().width; ' + 
'newWidth = this.value; ' + 
'console.log(parameters); ' + 
'console.log(wasWidth); ' + 
'console.log(newWidth); ' + 
'if(parseInt(newWidth) > 0) { ' + 
'rtnVal = parseInt(parseFloat((wasWidth / 100)) * parseInt(newWidth)) + \'%\'; rtnVal = this.value + \'%\'; ' + 
'console.log(rtnVal); ' + 
'} ' + 
'else rtnVal =  parseInt(wasWidth) + \'px\'; ' + 
'} ' + 
'document.getElementById(\'BSWidth\').innerHTML = this.value;  ' + 
'document.getElementsByClassName(\''+control+'\')[0].style.width = rtnVal; ' + 
'var myParams = {}; ' + 
'jsonKey  = \'id\'; ' + 
'myParams[jsonKey] = \'JTab1\'; ' + 
'jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.width\']; ' + 
' myParams[jsonKey] = rtnVal; ' + 
'console.log(myParams); ' + 
' adjustParameters(myParams);"></div>  <hr>';

      //  'oninput="document.getElementById(\'BSWidth\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.width = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.width\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams);"></div>  <hr>';
        return rtn;
    }

    function getBSMinWidth(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSMinWidth">0</span> Min Width: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="0" max="500" step="1" ' + 
        'oninput="document.getElementById(\'BSMinWidth\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.minWidth = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.min-width\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
        return rtn;
    }

    function getBSMaxWidth(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSMaxWidth">0</span> Max Width: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="0" max="500" step="1" ' + 
        'oninput="document.getElementById(\'BSMaxWidth\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.maxWidth = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.max-width\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
        return rtn;
    }

    function getBSHeight(control){

        rtn = '<div class="uk-height-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSHeight">100</span> Height: </label> ' + 
        '<input id="range" class="uk-height-expand uk-form-controls  " type="range" ' + 
        'value="100" min="0" max="100" step="1" style="width: 100%;" ' +  
        'oninput="' + 
        'var withoutFlair = document.getElementById(\'BSObjectSelector\').value.replace(\'Flair\', \'\'); ' + 
        'parameters = returnParameters(); ' + 
        'param = withoutFlair; ' + 
        'wasHeight = parameters[param]; ' + 
        'wasHeight = document.getElementsByClassName(param)[0].getBoundingClientRect().height; ' + 
        'rtnVal = wasHeight + \'px\'; ' + 
        'if(document.getElementById(\'BSObjectSelector\').value.includes(\'Flair\')){ ' + 
        'var withoutFlair = document.getElementById(\'BSObjectSelector\').value.replace(\'Flair\', \'\'); ' + 
        'parameters = returnParameters(); ' + 
        'param = withoutFlair; ' + 
        'wasHeight = parameters[param]; ' + 
        'wasHeight = document.getElementsByClassName(param)[0].getBoundingClientRect().height; ' + 
        'newHeight = this.value; ' + 
        'if(parseInt(newHeight) > 0) { ' + 
        'rtnVal = parseInt(parseFloat((wasHeight / 100)) * parseInt(newHeight)) + \'%\'; rtnVal = this.value + \'%\'; ' + 
        'console.log(rtnVal); ' + 
        '} ' + 
        'else rtnVal =  parseInt(wasHeight) + \'px\'; ' + 
        '} ' + 
        'document.getElementById(\'BSHeight\').innerHTML = this.value;  ' + 
        'document.getElementsByClassName(\''+control+'\')[0].style.height = rtnVal; ' + 
        'var myParams = {}; ' + 
        'jsonKey  = \'id\'; ' + 
        'myParams[jsonKey] = \'JTab1\'; ' + 
        'jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.height\']; ' + 
        ' myParams[jsonKey] = rtnVal; ' + 
        ' adjustParameters(myParams);"></div>  <hr>';
/*
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSHeight">0</span> Height: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="50" min="0" max="500" step="1" ' + 
        'oninput="document.getElementById(\'BSHeight\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.height = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.height\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
       */
        return rtn;
    }

    function getBSMinHeight(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSMinHeight">0</span> Min Height: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="0" max="500" step="1" ' + 
        'oninput="document.getElementById(\'BSMinHeight\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.minHeight = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.min-height\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams);"></div>  <hr>';
        return rtn;
    }

    function getBSMaxHeight(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSMaxHeight">0</span> Max Height: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="0" max="500" step="1" ' + 
        'oninput="document.getElementById(\'BSMaxHeight\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.maxHeight = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.max-height\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
        return rtn;
    }

    function getBSColor(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "> Text Color: </label> ' + 
        '<div id="BSColor" data-color="#6D2781"  oninput="adjustParameters({\'id\': \'JTab1\',\'navTabActiveBS.color\': this.value  })"   ></div></div> <hr>';
        return rtn;
    }   




function updateBorder(value,component){
    tab = document.getElementsByClassName("BSMagic")[0].parentElement.id;
    control = document.getElementById('BSObjectSelector').value;
    console.log("CNTRL: " + control + " VALUE: " + value + " COMP: " + component);
    boxShadow = "";
    if(component == "Left")GlobalBLeft = value;
    else if(component == "Right")GlobalBRight = value;
    else if(component == "Top")GlobalBTop = value;
    else if(component == "Bottom")GlobalBBottom = value;
    else if(component == "Style")GlobalBStyle = value;
    else if(component == "Color")GlobalBColor = value;
    else if(component == "UL")GlobalBRadUL = value;
    else if(component == "UR")GlobalBRadUR = value;
    else if(component == "BR")GlobalBRadBR = value;
    else if(component == "BL")GlobalBRadBL = value;


borderTop = GlobalBTop + "px " + GlobalBStyle + " " + GlobalBColor;
borderLeft = GlobalBLeft     + "px " + GlobalBStyle + " " + GlobalBColor;
borderBottom = GlobalBBottom + "px " + GlobalBStyle + " " + GlobalBColor;
borderRight = GlobalBRight + "px " + GlobalBStyle + " " + GlobalBColor;

    borderR = "";
    borderR += GlobalBRadUL + "px ";
    borderR += GlobalBRadUR + "px ";
    borderR += GlobalBRadBR + "px ";
    borderR += GlobalBRadBL + "px ";
  

    var myParams = {};
    jsonKey  = "id";
     myParams[jsonKey] = "JTab1";
    jsonKey = [document.getElementById('BSObjectSelector').value + '.border-top'];
    myParams[jsonKey] = borderTop;
    jsonKey = [document.getElementById('BSObjectSelector').value + '.border-left'];
    myParams[jsonKey] = borderLeft;
    jsonKey = [document.getElementById('BSObjectSelector').value + '.border-bottom'];
    myParams[jsonKey] = borderBottom;
    jsonKey = [document.getElementById('BSObjectSelector').value + '.border-right'];
    myParams[jsonKey] = borderRight;
    jsonKey = [document.getElementById('BSObjectSelector').value + '.border-radius'];
    myParams[jsonKey] = borderR;

    // Inset if true, HOffset, VOffset, Blur, Spread, Background Color
    adjustParameters(myParams);

}

                   
    function updateBoxShadow(value,component){
        tab = document.getElementsByClassName("BSMagic")[0].parentElement.id;
        control = document.getElementById('BSObjectSelector').value;
        console.log("CNTRL: " + control + " VALUE: " + value + " COMP: " + component);
        boxShadow = "";
        if(component == "Inset")GlobalBSInset = value;
        else if(component == "HOffset")GlobalBSHOffset = value;
        else if(component == "VOffset")GlobalBSVOffset = value;
        else if(component == "Blur")GlobalBSBlur = value;
        else if(component == "Spread")GlobalBSSpread = value;
        else if(component == "BackgroundColor")GlobalBSBackgroundColor = value;

        boxShadow = "";
        if(GlobalBSInset == true)boxShadow += "inset ";
        boxShadow += GlobalBSHOffset + "px ";
        boxShadow += GlobalBSVOffset + "px ";
        boxShadow += GlobalBSBlur + "px ";
        boxShadow += GlobalBSSpread + "px ";
        boxShadow += GlobalBSBackgroundColor;

        var myParams = {};
        jsonKey  = "id";
         myParams[jsonKey] = "JTab1";
        jsonKey = [document.getElementById('BSObjectSelector').value + '.box-shadow'];
        myParams[jsonKey] = boxShadow;

        // Inset if true, HOffset, VOffset, Blur, Spread, Background Color
        adjustParameters(myParams);

    }


    function OnOver(elem){
        console.log(elem.value);
        $('.'+elem.value).css({"border":"4px solid red"});
     //   $('.'+elem.value).style.border = "4px solid red";
    }
    function OnLeave(elem){
      
        params = returnParameters();
        itemLeft = elem.value+'.border-left';
        itemTop = elem.value+'.border-top';
        itemRight = elem.value+'.border-right';
        itemBottom = elem.value+'.border-bottom';
       
        if(params[itemLeft] !== undefined){
            console.log("Found: " + params[itemLeft]);
            $('.'+elem.value).css({"border-left": params[itemLeft] });
        }else{
            $('.'+elem.value).css({"border-left": "" });
        }
        if(params[itemRight] !== undefined){
            console.log("Found: " + params[itemRight]);
            $('.'+elem.value).css({"border-right": params[itemRight] });
        }
        else{
            $('.'+elem.value).css({"border-right": "" });
        }
        if(params[itemTop] !== undefined){
            console.log("Found: " + params[itemTop]);
            $('.'+elem.value).css({"border-top": params[itemTop] });
        }
        else{
            $('.'+elem.value).css({"border-top": "" });
        }
        if(params[itemBottom] !== undefined){
            console.log("Found: " + params[itemBottom]);
            $('.'+elem.value).css({"border-bottom": params[itemBottom] });
        }
        else{
            $('.'+elem.value).css({"border-bottom": "" });
        }

   
    }

    function closeSideBar(){
        bsMain = $('.bs-offset-main'),
        bsOverlay = $('.bs-canvas-overlay');
        var canvas, aria;
      if ($(this).hasClass('bs-canvas-close')) {
         canvas = $(this).closest('.bs-canvas');
         aria = $(this).add($('[data-toggle="canvas"][data-target="#' + canvas.attr('id') + '"]'));
         if (bsMain.length)
            bsMain.css(($(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left'), '');
      } else {
         canvas = $('.bs-canvas');
         aria = $('.bs-canvas-close, [data-toggle="canvas"]');
         if (bsMain.length)
            bsMain.css({
               'margin-left': '',
               'margin-right': ''
            });
      }
      canvas.css('width', '');
      aria.attr('aria-expanded', "false");
      if (bsOverlay.length)
         bsOverlay.removeClass('show');
      return false;
    }



    jQuery(document).ready(function($) {

        var bsDefaults = {
             offset: false,
             overlay: false,
             width: '25%'
          },
          bsMain = $('.bs-offset-main'),
          bsOverlay = $('.bs-canvas-overlay');
    
       $('[data-toggle="canvas"][aria-expanded="false"]').on('click', function() {
          var canvas = $(this).data('target'),
             opts = $.extend({}, bsDefaults, $(canvas).data()),
             prop = $(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left';
    
          if (opts.width === '100%')
             opts.offset = false;
          
          $(canvas).css('width', opts.width);
          if (opts.offset && bsMain.length)
             bsMain.css(prop, opts.width);
    
          $(canvas + ' .bs-canvas-close').attr('aria-expanded', "true");
          $('[data-toggle="canvas"][data-target="' + canvas + '"]').attr('aria-expanded', "true");
          if (opts.overlay && bsOverlay.length)
             bsOverlay.addClass('show');
          return false;
       });
    



       // Open up the Box Shadow sidebar
$('#btnBorder').on('click', function() {

        //now open the sidebar of options
        getBSBorderBar(document.getElementById('BSObjectSelector').value);
    
            // Add color component
       $('#BSBorderColor').colorpicker({
        inline: true,
        container: true,
        format: 'rgba',
        customClass: 'colorpicker-2x',
        sliders: {
          saturation: {
            maxLeft: 200,
            maxTop: 200
          },
          hue: {
            maxTop: 200
          },
          alpha: {
            maxTop: 200
          }
        }
    }).on('colorpickerChange colorpickerCreate', function (e) { 
    
      if(e.type=="colorpickerChange"){
       
     //   var myParams = {};
    //    jsonKey  = "id";
    //     myParams[jsonKey] = "JTab1";
    //    jsonKey = [document.getElementById('BSObjectSelector').value + '.background-color'];
    //    myParams[jsonKey] = e.value.toRgbString();



        updateBorder( e.value.toRgbString(),'Color');
      //  adjustParameters(myParams);
      //  $('.'+document.getElementById('BSObjectSelector').value).css('background-color', e.value.toRgbString());
    }
    
        
    });
    
    
       });


       // Open up the Box Shadow sidebar
$('#btnBoxShadow').on('click', function() {

    //now open the sidebar of options
    getBSBoxShadowBar(document.getElementById('BSObjectSelector').value);

        // Add color component
   $('#BSBackgroundColorBox').colorpicker({
    inline: true,
    container: true,
    format: 'rgba',
    customClass: 'colorpicker-2x',
    sliders: {
      saturation: {
        maxLeft: 200,
        maxTop: 200
      },
      hue: {
        maxTop: 200
      },
      alpha: {
        maxTop: 200
      }
    }
}).on('colorpickerChange colorpickerCreate', function (e) { 

  if(e.type=="colorpickerChange"){
   
    var myParams = {};
    jsonKey  = "id";
     myParams[jsonKey] = "JTab1";
    jsonKey = [document.getElementById('BSObjectSelector').value + '.background-color'];
    myParams[jsonKey] = e.value.toRgbString();
    updateBoxShadow( e.value.toRgbString(),'BackgroundColor');
  //  adjustParameters(myParams);
  //  $('.'+document.getElementById('BSObjectSelector').value).css('background-color', e.value.toRgbString());
}

    
});


   });


// Open up the Color sidebar
$('#btnColor').on('click', function() {
    
    getBSColorBar(document.getElementById('BSObjectSelector').value);

    // Add color component
   $('#BSColor').colorpicker({
    inline: true,
    container: true,
    format: null,
    customClass: 'colorpicker-2x',
    sliders: {
      saturation: {
        maxLeft: 200,
        maxTop: 200
      },
      hue: {
        maxTop: 200
      },
      alpha: {
        maxTop: 200
      }
    }
}).on('colorpickerChange colorpickerCreate', function (e) { 
    if(e.type=="colorpickerChange"){
   
        var myParams = {};
    jsonKey  = "id";
     myParams[jsonKey] = "JTab1";
    jsonKey = [document.getElementById('BSObjectSelector').value + '.color'];
    myParams[jsonKey] = e.value.toRgbString();

    adjustParameters(myParams);
    $('.'+document.getElementById('BSObjectSelector').value).css('color', e.value.toRgbString());



          BSObject = document.getElementById("JTab1");
          parameters = returnParameters();
          ReFresh(BSObject, parameters);
          JCurTab = getActiveTab(BSObject, parameters)[0];
          
          JAnimate(JCurTab,JCurTab,BSObject, parameters);

      }
});

});


// Open up the Background Color sidebar
$('#btnBackgroundColor').on('click', function() {
    
    getBSBackgroundColorBar(document.getElementById('BSObjectSelector').value);

    // Add color component
   $('#BSBackgroundColor').colorpicker({
    inline: true,
    container: true,
    format: 'rgba',
    customClass: 'colorpicker-2x',
    sliders: {
      saturation: {
        maxLeft: 200,
        maxTop: 200
      },
      hue: {
        maxTop: 200
      },
      alpha: {
        maxTop: 200
      }
    }
}).on('colorpickerChange colorpickerCreate', function (e) { 

  if(e.type=="colorpickerChange"){
   
    var myParams = {};
    jsonKey  = "id";
     myParams[jsonKey] = "JTab1";
    jsonKey = [document.getElementById('BSObjectSelector').value + '.background-color'];
    myParams[jsonKey] = e.value.toRgbString();

    adjustParameters(myParams);
    $('.'+document.getElementById('BSObjectSelector').value).css('background-color', e.value.toRgbString());
}

    
});

});




// Open up the Alignment sidebar
$('#btnAlignment').on('click', function() {
    
    getBSAlignmentBar(document.getElementById('BSObjectSelector').value);
});

// Open up the Width sidebar
$('#btnWidth').on('click', function() {
    
    getBSWidthBar(document.getElementById('BSObjectSelector').value);
});

// Open up the Width sidebar
$('#btnHeight').on('click', function() {
    
    getBSHeightBar(document.getElementById('BSObjectSelector').value);
});

// Open up the Margin sidebar
$('#btnMargin').on('click', function() {
    
    getBSMarginBar(document.getElementById('BSObjectSelector').value);
});

// Open up the Padding sidebar
$('#btnPadding').on('click', function() {
    
    getBSPaddingBar(document.getElementById('BSObjectSelector').value);
});


$('#BSHorVert').on('change', function() {
    horvert = document.getElementById('BSHorVert').value;
    console.log(horvert);
    if(horvert=="Horizontal"){
        document.getElementById('insertTab').innerHTML=htmlHorizontal;
        // reinit
        BSMagic(returnParameters());
      //  BSMagic({ "id": "JTab1"});
        //pull back styles and config
        myParams = {};
        jsonKey  = "id";
        myParams[jsonKey] = "JTab1";

        adjustParameters(myParams);
    }
    else{
        document.getElementById('insertTab').innerHTML=htmlVertical;
        // reinit
        BSMagic(returnParameters());
         //pull back styles and config
        myParams = {};
        jsonKey  = "id";
        myParams[jsonKey] = "JTab1";

        adjustParameters(myParams);
    }
});




    $('#BSBBarOn').on('change', function() {
        baron = document.getElementById('BSBBarOn').value;
        if (baron=="true"){

        //    BSMagic(returnParameters());

            myParams = {};
            jsonKey  = "id";
            myParams[jsonKey] = "JTab1";
            jsonKey  = "showBottomNavBS";
            myParams[jsonKey] = true;

            $(".buttonBarBS").show();
            adjustParameters(myParams);

          BSObject = document.getElementById("JTab1");
          parameters = returnParameters();
          ReFresh(BSObject, parameters);
          JCurTab = getActiveTab(BSObject, parameters)[0];
          
          JAnimate(JCurTab,JCurTab,BSObject, parameters);
            
        }
        else{
           // BSMagic(returnParameters());

            myParams = {};
            jsonKey  = "id";
            myParams[jsonKey] = "JTab1";
            jsonKey  = "showBottomNavBS";
            myParams[jsonKey] = false;

         //   document.getElementsByClassName('buttonBarBS')[0].style.display = "none";
            $(".buttonBarBS").hide();
            adjustParameters(myParams);
           
            BSObject = document.getElementById("JTab1");
          parameters = returnParameters();
          ReFresh(BSObject, parameters);
          JCurTab = getActiveTab(BSObject, parameters)[0];
          
          JAnimate(JCurTab,JCurTab,BSObject, parameters);

        }
    });



});



    