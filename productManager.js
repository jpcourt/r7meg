/*var vector = '';

products.push({'code' : '2003', 'label' : 'CANAL+ Multiécrans AX'});
products.push({'code' : '2004', 'label' : 'CANAL+ TECH PVR'});
products.push({'code' : '221', 'label' : 'MINIPACK TNT'});
products.push({'code' : '550', 'label' : 'Tunnel CSAT'});
products.push({'code' : '4220', 'label' : 'CSAT Panorama'});
products.push({'code' : '4223', 'label' : 'Pack Ciné Séries HX'});
products.push({'code' : '4226', 'label' : 'Pack Ciné Séries AX'});
products.push({'code' : '4229', 'label' : 'Pano Séries Ciné HX'});
products.push({'code' : '4232', 'label' : 'Pano Séries Ciné AX'});
*/
function getProducts(chosenVector){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'offerConfig.json');
	xhr.onreadystatechange = function(aEvt) {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var products = new Array();
				xhr.response.forEach(function(offerItem){
					if(offerItem['vector'] == chosenVector){
						products = offerItem['productList'];
					}
				});
				return products;
			}
		}
	}
	xhr.send();
}

function displayProducts(chosenVector){
	//vector = chosenVector;
	var products = getProducts(chosenVector);
	var productDisplay = "<div class='btn-group-vertical' data-toggle='buttons'>";
	products.forEach(function(product){
		productDisplay += "<label class='btn btn-default'>";
		productDisplay += "<input type='checkbox' id='"+product['code']+"'' value='"+product['code']+"'>"+product['label']+" ("+product['code']+")";
		productDisplay += "</label>";
	});
	productDisplay += "</div>";
	productDisplay += "<div><button class='btn btn-default' onclick='resetProducts()'>Reset</button></div>";
	document.getElementById('productList').innerHTML = '<div>'+productDisplay+'</div>';
	var buttonDisplay = "<button class='btn btn-success btn-lg' type='submit' ";
	buttonDisplay += "onclick='generateMeg("+JSON.stringify(chosenVector)+"), displaySelectedProducts()'>"; 
	buttonDisplay += "Générer MEG "+chosenVector+"</button>";
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

function resetProducts(){
	displayProducts();
	document.getElementById('products').value = "";
}