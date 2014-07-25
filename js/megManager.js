function generateMeg(vector, typeMa){

	var msd = document.getElementById('msd').value;

	var productArray = selectedProductList();

	if( msd == "" ){

		document.getElementById('megResult').innerHTML = '<pre>Merci de remplir MSD et Produit</pre>';

	}else if( msd < typeMa*1000000000 || msd >= (typeMa+1)*1000000000 || isNaN(msd) ){

		document.getElementById('megResult').innerHTML = '<pre>Format de MSD non conforme</pre>';

	}else{

		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'xml_templates/'+vector+'_megTemplate.xml');
		xhr.onreadystatechange = function(aEvt) {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var meg = xhr.response;
					var compiledMeg = _.template(meg);
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