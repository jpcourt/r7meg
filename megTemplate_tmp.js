var meg =  '<canal.det.modele.gestion.ModifOffre>'
meg  += '<modifElemArray>';
meg += '<canal.det.modele.gestion.ModifElem>';
meg += '<situationFlash>';

if(vector = 'tnt'){
	meg += '<canal.det.modele.gestion.Profil>';
	meg += '<zoneGeographique>000000</zoneGeographique>';
	meg += '<typeClient>IN</typeClient>';
	meg += '<interditCasino>false</interditCasino>';
	meg += '<categorieTarifaire>1</categorieTarifaire>';
	meg += '<autorisePrelevement>true</autorisePrelevement>';
	meg += '<autoriseOperateur>true</autoriseOperateur>';
	meg += '</canal.det.modele.gestion.Profil>';
}

meg += '<abonnementArray>';

productArray.forEach(function(product){
	meg += '<canal.det.modele.gestion.Abonnement>';
	meg += '<offre>';
	meg += '<vecteur>11</vecteur>';
	meg += '<operateurCommercial>CAN</operateurCommercial>';
	meg += '<idOffreDroits>';
	meg += '<font color=red><b>'+product+'</b></font>';
	meg += '</idOffreDroits>';
	meg += '</offre>';
	meg += '<dateValiditeDebut>';
	meg += '<time>1190898000000</time>';
	meg += '<timezone>GMT</timezone>';
	meg += '</dateValiditeDebut>';
	meg += '</canal.det.modele.gestion.Abonnement>';
});

meg += '</abonnementArray>';
meg += '</situationFlash>';

meg += '<destinataireElem>';
meg += '<canal.det.modele.gestion.Ma>';
meg += '<typeMa>24</typeMa>';
meg += '<idMateriel>';
meg += '<font color=red><b>'+msd+'</b></font>';
meg += '</idMateriel>';
meg += '</canal.det.modele.gestion.Ma>';
meg += '</destinataireElem>';
meg += '</canal.det.modele.gestion.ModifElem>';
meg += '</modifElemArray>';
meg += '<entete>';
meg += '<signature>UPCD4TP</signature>';
meg += '<prioriteDemandee>8</prioriteDemandee>';
meg += '<demande>';
meg += '<source>TEST</source>';
meg += '<numeroDemande>N0009801442</numeroDemande>';
meg += '</demande>';
meg += '<dateEnvoi>';
meg += '<time>1190898000000</time>';
meg += '<timezone>GMT</timezone>';
meg += '</dateEnvoi>';
meg += '<commentaire>Test modoff merlin</commentaire>';
meg += '<canal>CRC</canal>';
meg += '</entete>';
meg += '</canal.det.modele.gestion.ModifOffre>';