function generateMeg(vector){

	var msd = document.getElementById('msd').value;
	//var product = document.getElementById('product').value;

	var productArray = selectedProductList();
	// Fonction pour 

	if( msd == "" ){

		document.getElementById('megResult').innerHTML = '<pre>Merci de remplir MSD et Produit</pre>';

	}else if( msd < 10000000000 || msd > 99999999999 || isNaN(msd) ){

		document.getElementById('megResult').innerHTML = '<pre>Format de MSD non conforme</pre>';

	}else{

		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'xml_templates/'+vector+'_megTemplate.xml');
		xhr.onreadystatechange = function(aEvt) {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var meg = xhr.response;
					var compiledMeg = _.template(meg);
					var typeMa;
					if(vector == "tnt"){ 
						typeMa = 24;
					}else if(vector == "fibre"){
						typeMa = 86; 
					}else if(vector == "sat"){
						typeMa = 18;
					}else{ 
						typeMa = 99;
					}
					var megData = {"vector" : vector, "typeMa" : typeMa, 'productArray' : productArray, 'msd' : msd };
					var xmlMeg = compiledMeg(megData);
					var txtMeg = xmlMeg.replace(/</mg, "&lt").replace(/>/mg, "&gt")
					txtMeg = txtMeg.replace(/\n/mg,"").replace(/\r/mg,"").replace(/\t/mg,"");
					txtMeg = txtMeg.replace(/&ltfont color=red&gt&ltb&gt/mg, '<font color=red><b>').replace(/&lt\/b&gt&lt\/font&gt/mg, '</b></font>')
					document.getElementById('megResult').innerHTML = "<pre>"+txtMeg+"</pre>";

				}
			}
		}
		xhr.send();

	}
}