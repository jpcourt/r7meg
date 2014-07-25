var products;

function displayProducts(vector){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'offerConfig.json');
	xhr.onreadystatechange = function(aEvt) {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var offerConfig = JSON.parse(xhr.response);
				offerConfig['offerList'].forEach(function(offerItem){
					if(offerItem['vector'] == vector){
						products = offerItem['productList'];
					}
				});
				updateProducts(vector);
			}
		}
	}
	xhr.send();
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

function displayInterface(vector){
	
	displayProducts(vector);

	var buttonDisplay = "<button class='btn btn-success btn-lg' type='submit' ";
	buttonDisplay += "onclick='generateMeg("+JSON.stringify(vector)+"), displaySelectedProducts()'>"; 
	buttonDisplay += "Générer MEG "+vector+"</button>";
	document.getElementById('generateButton').innerHTML = buttonDisplay;
	document.getElementById('selectorName').innerHTML = 'Vecteur : '+vector;
	document.getElementById('products').value = "";
	document.getElementById('megResult').innerHTML = "\n";
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