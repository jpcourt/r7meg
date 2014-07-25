function generateMeg(chosenVector){

	var msd = document.getElementById('msd').value;
	//var product = document.getElementById('product').value;

	var productArray = selectedProductList();
	// Fonction pour 

	if( msd == "" ){

		document.getElementById('megResult').innerHTML = 'Merci de remplir MSD et Produit';

	}else if( msd < 24000000000 || msd > 25000000000 || isNaN(msd) ){

		document.getElementById('megResult').innerHTML = 'Format de MSD non conforme';

	}else{

		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'megTemplate.xml');
		xhr.onreadystatechange = function(aEvt) {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var meg = xhr.response;
					var compiledMeg = _.template(meg);
					if(chosenVector == "tnt"){ 
						var typeMa = 24;
					}else if(chosenVector == "fibre"){
						var typeMa = 86; 
					}else if(chosenVector == "sat"){
						var typeMa = 18;
					}else{ 
						var typeMa = 99;
					}
					var megData = {"vector" : chosenVector, "typeMa" : typeMa, 'productArray' : productArray, 'msd' : msd };
					var xmlMeg = compiledMeg(megData);
					var txtMeg = xmlMeg.replace("<", "%lt").replace(">", "%gt");
					document.getElementById('megResult').innerHTML = "<pre>"+txtMeg+"</pre>";

				}
			}
		}
		xhr.send();

	}
}