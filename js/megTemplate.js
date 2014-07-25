var meg = "<canal.det.modele.gestion.ModifOffre>
	<modifElemArray>
		<canal.det.modele.gestion.ModifElem>
			<situationFlash>
				<% if ( vector == 'tnt') { %>
					<canal.det.modele.gestion.Profil>
						<zoneGeographique>000000</zoneGeographique>
						<typeClient>IN</typeClient>
						<interditCasino>false</interditCasino>
						<categorieTarifaire>1</categorieTarifaire>
						<autorisePrelevement>true</autorisePrelevement>
						<autoriseOperateur>true</autoriseOperateur>
					</canal.det.modele.gestion.Profil>
				<% } %>
				<abonnementArray>
					<% _.each(productArray, function(product) { %>
						<canal.det.modele.gestion.Abonnement>
							<offre>
								<vecteur>11</vecteur>
								<operateurCommercial>CAN</operateurCommercial>
								<idOffreDroits>
									<font color=red><b><%= product %></b></font>
								</idOffreDroits>
							</offre>
							<dateValiditeDebut>
								<time>1190898000000</time>
								<timezone>GMT</timezone>
							</dateValiditeDebut>
						</canal.det.modele.gestion.Abonnement>
					<% }); %>
				</abonnementArray>
			</situationFlash>
			<destinataireElem>
				<canal.det.modele.gestion.Ma>
					<typeMa><%= typeMA %></typeMa>
					<idMateriel>
						<font color=red><b><%= msd %></b></font>
					</idMateriel>
				</canal.det.modele.gestion.Ma>
			</destinataireElem>
		</canal.det.modele.gestion.ModifElem>
	</modifElemArray>
	<entete>
		<signature>UPCD4TP</signature>
		<prioriteDemandee>8</prioriteDemandee>
		<demande>
			<source>TEST</source>
			<numeroDemande>N0009801442</numeroDemande>
		</demande>
		<dateEnvoi>
			<time>1190898000000</time>
			<timezone>GMT</timezone>
		</dateEnvoi>
		<commentaire>Test modoff merlin</commentaire>
		<canal>CRC</canal>
	</entete>
</canal.det.modele.gestion.ModifOffre>";