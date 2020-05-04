function getBSAlignmentBar(control){


    rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
    '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
    '<h4 class="d-inline-block text-light mb-0 float-right">Alignment</h4> ' + 
    '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
    
    rcontent = getBSTop(control) + getBSBottom(control) + getBSLeft(control) + getBSRight(control);
    
    rfooter = '</div> ';
    
    rtn = rheader + rcontent + rfooter;
    
    $('#bs-canvas-right').html(rtn);
    }

    function getBSWidthBar(control){


        rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
        '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
        '<h4 class="d-inline-block text-light mb-0 float-right">Alignment</h4> ' + 
        '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
        
        rcontent = getBSWidth(control) + getBSMinWidth(control) + getBSMaxWidth(control);
        
        rfooter = '</div> ';
        
        rtn = rheader + rcontent + rfooter;
        
        $('#bs-canvas-right').html(rtn);
    }

    function getBSHeightBar(control){


        rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
        '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
        '<h4 class="d-inline-block text-light mb-0 float-right">Alignment</h4> ' + 
        '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
        
        rcontent = getBSHeight(control) + getBSMinHeight(control) + getBSMaxHeight(control);
        
        rfooter = '</div> ';
        
        rtn = rheader + rcontent + rfooter;
        
        $('#bs-canvas-right').html(rtn);

    }

    function getBSBackgroundColorBar(control){


        rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
        '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
        '<h4 class="d-inline-block text-light mb-0 float-right">Alignment</h4> ' + 
        '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
        
        rcontent = getBSBackgroundColor(control);
        
        rfooter = '</div> ';
        
        rtn = rheader + rcontent + rfooter;
        
        $('#bs-canvas-right').html(rtn);
    }

    function getBSColorBar(control){


        rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
        '<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
        '<h4 class="d-inline-block text-light mb-0 float-right">Alignment</h4> ' + 
        '</header><div class="bs-canvas-content px-3 py-5"><hr> ';
        
        rcontent = getBSColor(control);
        
        rfooter = '</div> ';
        
        rtn = rheader + rcontent + rfooter;
        
        $('#bs-canvas-right').html(rtn);
    }

function getBSBoxShadowBar(control){


rheader = '<header class="bs-canvas-header p-3 bg-primary overflow-auto"> ' + 
'<button type="button" class="bs-canvas-close float-left close" aria-label="Close" onClick="closeSideBar()"><span aria-hidden="true" class="text-light">&times;</span></button> ' + 
'<h4 class="d-inline-block text-light mb-0 float-right">Box Shadow</h4> ' + 
'</header><div class="bs-canvas-content px-3 py-5"><hr> ';

rcontent = getBSHOffset(control) + getBSVOffset(control) + getBSSpread(control) + getBSBlur(control) + getBSOpacity(control) + getBSInset(control) + getBSBackgroundColor(control);

rfooter = '</div> ';

rtn = rheader + rcontent + rfooter;

$('#bs-canvas-right').html(rtn);
}



function getBSHOffset(control){
    rtn = '<div class="uk-width-1-1">' +
    '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
    'id="BSHOffset">0</span> Horizonal-Offset: </label> ' + 
    '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
    'value="0" min="-50" max="50" step="1" ' + 
    'oninput="document.getElementById(\'BSHOffset\').innerHTML = this.value;"></div>  <hr>';

    return rtn;
    }

    function getBSVOffset(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSVOffset">0</span> Vertical-Offset: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="-50" max="50" step="1" ' + 
        'oninput="document.getElementById(\'BSVOffset\').innerHTML = this.value;"></div>  <hr>';
        return rtn;
    }

    function getBSSpread(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSSpread">0</span> Spread: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="-30" max="50" step="1" ' + 
        'oninput="document.getElementById(\'BSSpread\').innerHTML = this.value;"></div>  <hr>';
        return rtn;
    }

    function getBSBlur(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSBlur">0</span> Blur: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="0" min="0" max="50" step="1" ' + 
        'oninput="document.getElementById(\'BSBlur\').innerHTML = this.value;></div>  <hr>';
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
        '<input id="BSinset" class="uk-width-expand uk-form-controls uk-checkbox" type="checkbox"> ' + 
        '</div>  <hr>';
        return rtn;
    }
    
    function getBSBackgroundColor(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "> Background Color: </label> ' + 
        '<div id="BSBackgroundColor" class="BSBackgroundColor" data-color="#ffffff"  ></div></div> <hr>';
        return rtn;
    }   



        


function getBSTop(control){
rtn = '<div class="uk-width-1-1">' +
'<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
'id="BSTop">0</span> Top: </label> ' + 
'<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
'value="0" min="-100" max="100" step="1" ' + 
'oninput="document.getElementById(\'BSTop\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.top = this.value+\'px\';     var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.top\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
return rtn;
}

function getBSBottom(control){
    rtn = '<div class="uk-width-1-1">' +
    '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
    'id="BSBottom">0</span> Bottom: </label> ' + 
    '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
    'value="0" min="-100" max="100" step="1" ' + 
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



    function getBSWidth(control){
        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSWidth">0</span> Width: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="50" min="0" max="500" step="1" ' + 
        'oninput="document.getElementById(\'BSWidth\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.width = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.width\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams);"></div>  <hr>';
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


        rtn = '<div class="uk-width-1-1">' +
        '<label class="uk-form-label "><span class="uk-badge uk-label-info" ' + 
        'id="BSHeight">0</span> Height: </label> ' + 
        '<input id="range" class="uk-width-expand uk-form-controls  " type="range" ' + 
        'value="50" min="0" max="500" step="1" ' + 
        'oninput="document.getElementById(\'BSHeight\').innerHTML = this.value; document.getElementsByClassName(\''+control+'\')[0].style.height = this.value+\'px\';    var myParams = {}; jsonKey  = \'id\'; myParams[jsonKey] = document.getElementsByClassName(\'BSMagic\')[0].parentElement.id; jsonKey = [document.getElementById(\'BSObjectSelector\').value + \'.height\']; myParams[jsonKey] = this.value+\'px\'; adjustParameters(myParams); "></div>  <hr>';
       
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
$('#btnBoxShadow').on('click', function() {

        //now open the sidebar of options
        getBSBoxShadowBar(document.getElementById('BSObjectSelector').value);

        
        // now add the color picker to the sidebar
        $('#BSBackgroundColor').colorpicker({
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
        $('.').css('background-color', e.value);
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
    myParams[jsonKey] = document.getElementsByClassName("BSMagic")[0].parentElement.id;
    jsonKey = [document.getElementById('BSObjectSelector').value + '.color'];
    myParams[jsonKey] = e.value.toRgbString();

    adjustParameters(myParams);
    $('.'+document.getElementById('BSObjectSelector').value).css('color', e.value.toRgbString());

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
    myParams[jsonKey] = document.getElementsByClassName("BSMagic")[0].parentElement.id;
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

// adjustParameters({"id": "JTab2","nextButtonBS.background-color": "green"});



    
    });


    