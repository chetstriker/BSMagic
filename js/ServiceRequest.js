(function($) {
var rowCnt=0;

// simulate pulling in data from a database
var purchaseItems='[{"Order": 0, "Device": "Desktop"},{"Order": 1, "Device": "Laptop"},{"Order": 2, "Device": "Tablet"},{"Order": 3, "Device": "Docking Station"},{"Order": 4, "Device": "Device Case"},{"Order": 5, "Device": "Extra Laptop Power Cable"},{"Order": 6, "Device": "Mouse"},{"Order": 7, "Device": "Keyboard"},{"Order": 8, "Device": "Monitor"},{"Order": 9, "Device": "Printer"},{"Order": 10, "Device": "Copier/Printer/Fax"},{"Order": 11, "Device": "Fax"},{"Order": 12, "Device": "Document Scanner"},{"Order": 13, "Device": "Barcode Scanner"},{"Order": 14, "Device": "Check reader"},{"Order": 15, "Device": "Credit card reader"},{"Order": 16, "Device": "Desk Phone"},{"Order": 2, "Device": "Smart Phone"},{"Order": 18, "Device": "Headset"},{"Order": 19, "Device": "Phone Jack"},{"Order": 20, "Device": "Network Jack"}]';
//convert JSON in to a javascript array
data = JSON.parse(purchaseItems);

//sort data by Device
data.sort(function(a, b) {
    return (a.Device) - (b.Device);
});



//var outputPurchase = '<div class="col-sm-12 row"><label class="col-sm-6 text-success">ITEM</label><label class="col-sm-6 text-success">QUANTITY</label><div class="col-sm-12 shadow-lg p-3 bg-white rounded border-top my-1 border-success"></div></div>';

//$( ".ProductList" ).append(outputPurchase);	

// on click of addProductBtn will take id and value to dropdown productSelect and productQuantity to put in newly generated  
//var productDD = '<select id="productSelect" name="productSelect" style="box-shadow: 0 3px 5px rgba(0,0,0,0.15); margin-bottom:-15px !important;" class="productSelect form-control col-sm-6 shadow-lg p-3 mb-5 bg-white rounded"> <option disabled="" selected=""></option>';

/*
var productDD = '<select id="productSelect" name="productSelect" style="margin-bottom:-56px !important; top:-56px; padding-left: 56px;" class="productSelect form-control col-sm-6 text-success"> <option disabled="" selected=""></option>';

//loop through all products and populate in the wizard UI
for(len =0; len< data.length; len++){
	//put the data in a template
	productDD += '<option value="'+data[len]["Device"].replace(/\s/g, '')+'">'+data[len]["Device"]+'</option>'; 
	//outputPurchase = '<div style="top:-15px; margin-bottom:-15px !important; min-height:50px;box-shadow: 0 3px 5px rgba(0,0,0,0.15);" class="form-control col-sm-4 shadow-lg p-3 mb-5 bg-white rounded"> <input id="productQuantity"  name="'+data[len]["Device"].replace(/\s/g, '')+'" type="text" class="input productQuantity" value="0" class="form-control" data-bts-mousewheel="true" data-bts-button-down-class="btn " data-bts-button-up-class="btn btn-info"><script>$("input[name=\''+data[len]["Device"].replace(/\s/g, '')+'\']").TouchSpin({initval: 0});</script></div>';
	outputPurchase = '<div style="top:-57px; padding-left:90px;" class="col-sm-2 text-success"><input type="number" name="productQuantity" id="productQuantity"  min="0" value="0" class="productQuantity text-success form-control"></div>';
	
	addBtn = '<button style="top:-57px; left:50px;" class=" btn btn-sm btn-success square addProductBtn"><span class="glyphicon glyphicon-plus"></span> ADD</button>';							
	//addBtn = '<div style="top:-15px; margin-bottom:-15px !important; min-height:50px;box-shadow: 0 3px 5px rgba(0,0,0,0.15);" class="text-success form-control col-sm-2"><button style="top:-7px; margin-bottom:-7px !important;" class=" btn btn-sm btn-success square addProductBtn"><span class="glyphicon glyphicon-plus"></span> ADD</button></div>';							
}
productDD += '</select>';
//add the templated data to the wizard UI
	$( ".ProductList" ).append(productDD);
	$( ".ProductList" ).append(outputPurchase);	
	$( ".ProductList" ).append(addBtn);	
	
	*/
	
});

rowCnt=0;





	$( ".addProductBtn" ).click(function() {
		console.log( $( ".productSelect" )[0].value );
		console.log( $( ".productQuantity" )[0].value );
		rowCnt++;
		var addedProduct = '<div id="row' + rowCnt + '"style="min-height:40px;" class="col-sm-12 row"><label class="col-sm-11" style="box-shadow: 0 3px 5px rgba(0,0,0,0.15); max-height:20px;" qnty="' + $( ".productQuantity" )[0].value + '" item="' + $( ".productSelect" )[0].value + '" class="col-sm-6 text-success">' + $( ".productQuantity" )[0].value + ' x ' + $( ".productSelect" )[0].value + '</label><button type="button" id="btn'+rowCnt+'"style="top:-15px; margin-bottom:-15px; max-height:27px;" class=" removeProduct btn btn-sm btn-danger"><i class="fa fa-close"></i></button></div>';
		$(".ProductListSelected").append(addedProduct);
		
	  });														
	

	  $(document).on('click','.removeProduct',function(){
		alert("click3");  
	});

	  

	

/*
//loop through all products and populate in the wizard UI
for(len =0; len< data.length; len++){
	//put the data in a template
	var outputPurchase = '<div style="box-shadow: 0 3px 5px rgba(0,0,0,0.15);" class="form-control col-sm-4 shadow-lg p-3 mb-5 bg-white rounded"><span class="input-label">'+data[len]["Device"]+'</span> <input id="'+data[len]["Device"].replace(/\s/g, '')+'"  name="'+data[len]["Device"].replace(/\s/g, '')+'" type="text" class="input-lg" value="0" class="form-control" data-bts-mousewheel="true" data-bts-button-down-class="btn " data-bts-button-up-class="btn btn-info"><script>$("input[name=\''+data[len]["Device"].replace(/\s/g, '')+'\']").TouchSpin({initval: 0});</script></div>';
	//add the templated data to the wizard UI
	$( ".ProductList" ).append(outputPurchase);										
}
 
//Now add other field at the end:
var other = '<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3"><span class="input-label">Other Description</span><input class="form-control" id="other_description"  name="other_description" placeholder="Other Description" type="text"></input></div><div class="col-sm-12 col-md-6 col-lg-4 col-xl-3"><span class="input-label">Other Quantity</span> <input id="other_quantity"  name="other_quantity" type="text" class="input-lg" value="0" class="form-control" data-bts-mousewheel="true" data-bts-button-down-class="btn " data-bts-button-up-class="btn btn-info"><script>$("input[name=\'other_quantity\']").TouchSpin({initval: 0});</script></div>';
//add the templated data to the wizard UI
$( ".ProductList" ).append(other);	
*/	  
	      
		



 $.fn.extend({
	treed: function (o) {

		var openedClass = 'glyphicon-minus-sign';
		var closedClass = 'glyphicon-plus-sign';

		if (typeof o != 'undefined') {
			if (typeof o.openedClass != 'undefined') {
				openedClass = o.openedClass;
			}
			if (typeof o.closedClass != 'undefined') {
				closedClass = o.closedClass;
			}
		};

		//initialize each of the top levels
		var tree = $(this);
		tree.addClass("tree");
		tree.find('li').has("ul").each(function () {
			var branch = $(this); //li with children ul
			branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
			branch.addClass('branch');
			branch.on('click', function (e) {
				if (this == e.target) {
					var icon = $(this).children('i:first');
					icon.toggleClass(openedClass + " " + closedClass);
					$(this).children().children().toggle();
				}
			})
			branch.children().children().toggle();
		});
		//fire event from the dynamically added icon
		tree.find('.branch .indicator').each(function () {
			$(this).on('click', function () {
				$(this).closest('li').click();
			});
		});
		//fire event to open branch if the li contains an anchor instead of text
		tree.find('.branch>a').each(function () {
			$(this).on('click', function (e) {
				$(this).closest('li').click();
				e.preventDefault();
			});
		});
		//fire event to open branch if the li contains a button instead of text
		tree.find('.branch>button').each(function () {
			$(this).on('click', function (e) {
				$(this).closest('li').click();
				e.preventDefault();
			});
		});
	}
});

//Initialization of treeviews

$('#tree1').treed();

$('#tree2').treed({
	openedClass: 'glyphicon-folder-open',
	closedClass: 'glyphicon-folder-close'
});

$('#tree3').treed({
	openedClass: 'glyphicon-chevron-right',
	closedClass: 'glyphicon-chevron-down'
});






