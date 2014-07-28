var offerConfig;
var products;
var typeMa;
//var vector;

function initialize(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'offers/offerConfig.json');
	xhr.onreadystatechange = function(aEvt) {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				offerConfig = JSON.parse(xhr.response);
				displayVectorSelector();
				displayInterface(offerConfig['offerList'][0]['vector']);
			}
		}
	}
	xhr.send();
}

function displayVectorSelector(){
	var selectorButton = "<button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'>";
	selectorButton += "<p id='selectorName'></p><span class='caret'></span></button>";
	selectorButton += "<ul class='dropdown-menu text-center' role='menu'>";
	offerConfig['offerList'].forEach(function(offer){
		selectorButton += "<li onclick='displayInterface("+JSON.stringify(offer['vector'])+")'><a href='#'>Choisir "+offer['vector']+"</a></li>";
	});
	selectorButton += "</ul>";
	document.getElementById('vectorSelector').innerHTML = selectorButton;
}

function displayInterface(vector){	
	displayProducts(vector);
	updateGenerateButton(vector);
	document.getElementById('selectorName').innerHTML = 'Vecteur : '+vector;
	document.getElementById('products').value = "";
	document.getElementById('megResult').innerHTML = "\n";
}

function displayProducts(vector){
	offerConfig['offerList'].forEach(function(offerItem){
		if(offerItem['vector'] == vector){
			products = offerItem['productList'];
			typeMa = offerItem['typeMa'];
		}
	});
	updateProducts(vector);
}

function updateProducts(vector){
	var productDisplay = "<div class='btn-group-vertical' data-toggle='buttons'>";
	products.forEach(function(product){
		productDisplay += "<label class='btn btn-default'>";
		productDisplay += "<input type='checkbox' id='"+product['code']+"'' value='"+product['code']+"'>"+product['label']+" ("+product['code']+")";
		productDisplay += "</label>";
	});
	productDisplay += "</div>";
	productDisplay += "<div><button class='btn btn-default' onclick='resetProducts("+JSON.stringify(vector)+")'>Reset</button></div>";
	document.getElementById('productList').innerHTML = '<div>'+productDisplay+'</div>';
}

function updateGenerateButton(vector){
	var buttonDisplay = "<button class='btn btn-success btn-lg' type='submit' ";
	buttonDisplay += "onclick='generateMeg("+JSON.stringify(vector)+", "+typeMa+"), displaySelectedProducts()'>"; 
	buttonDisplay += "Générer MEG "+vector+"</button>";
	document.getElementById('generateButton').innerHTML = buttonDisplay;
}

function selectedProductList(){
	var productList = new Array();
	var currentProduct;
	products.forEach(function(product){
		currentProduct = document.getElementById(product['code']);
		if(currentProduct.checked){
			productList.push(currentProduct.value);
		}
	});
	return productList;
}

function displaySelectedProducts(){
	var productArray = selectedProductList();
	var productString = "";
	productArray.forEach(function(product){
		productString += product;
		if(productArray.indexOf(product) != productArray.length-1 ){
			productString += ", ";
		}
	});
	document.getElementById('products').value = productString;
}

function resetProducts(vector){
	displayInterface(vector);
	document.getElementById('products').value = "";
}