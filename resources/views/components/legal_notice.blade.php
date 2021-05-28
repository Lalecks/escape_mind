@extends('layouts.template')
@section('title', __("mentions légales"))

@section('content')
<section class="container" id="legal_notice">
	<header class="logo-img">
		<a href="{{asset('/')}}" class="logo logo-title glass-effect hoverable">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.7 233.93"><defs><style>.cls-1{fill:#fff;}</style></defs><title>escape_mind logo</title><path class="cls-1" d="M119.09,14.69A5.33,5.33,0,1,0,124.41,20,5.33,5.33,0,0,0,119.09,14.69Z" transform="translate(-19.68 -8.63)"/><path class="cls-1" d="M221.85,66.44a10.53,10.53,0,0,0-10.36,8.72l-19.92-2.45A32.2,32.2,0,0,0,160,34.27,32,32,0,0,0,139.08,42l-12.34-13.6a11.37,11.37,0,1,0-.78.65L138.31,42.7a32.16,32.16,0,0,0,4.52,50.92l-14.28,21.47a16.83,16.83,0,0,0-13.32-2.75l.85,2.62a14.14,14.14,0,0,1,14,5.46l2.83-.74a16.8,16.8,0,0,0-3.81-4.13L143.47,94A32,32,0,0,0,160,98.61a32.44,32.44,0,0,0,5.78-.53l7.72,29.63a28.18,28.18,0,0,0-16.26,15.72l-22.51-9a17.26,17.26,0,0,0,.57-2,17.07,17.07,0,0,0,.28-1.84l-2.88.75c0,.17,0,.35-.08.52a14.15,14.15,0,0,1-21.37,9.08l-2.18,1.86c.45.32.92.61,1.41.89l-8.25,15.77a43.49,43.49,0,0,0-37.65.92l-5-10.61a28.09,28.09,0,0,0,16.15-23.48l26.1,2a16.92,16.92,0,0,0,4.56,12.18l2.08-1.78a14.17,14.17,0,0,1,4.61-22.78l-.85-2.62a16.89,16.89,0,0,0-10.05,12.11c-.1.51-.18,1-.24,1.52l-26.15-2c0-.2,0-.4,0-.61a28,28,0,1,0-18.57,26.43l5.11,10.87a43.48,43.48,0,1,0,64.2,48l18.24,2.25a14.8,14.8,0,1,0,23.08-13.35l7.86-17.39a28.08,28.08,0,1,0,7.5-55.13,28.6,28.6,0,0,0-6.11.67l-7.67-29.46a32.25,32.25,0,0,0,21.5-22l20.39,2.51a10.52,10.52,0,1,0,10.49-11.26ZM119.09,29a9,9,0,1,1,9-9A9,9,0,0,1,119.09,29ZM84.38,232.85a33.78,33.78,0,1,1,33.78-33.78A33.78,33.78,0,0,1,84.38,232.85Zm33.81-61.1a43.45,43.45,0,0,0-15-11.9l8.23-15.75a17.11,17.11,0,0,0,3.86,1.34,17.61,17.61,0,0,0,2.94.36Zm1.26,1.63V145.8a17,17,0,0,0,14-8.47l22.79,9.14a28.16,28.16,0,0,0,1.05,18.23L123.7,180.49A43.54,43.54,0,0,0,119.45,173.38ZM144.77,211l-18-2.22a43.44,43.44,0,0,0-.76-22.29l17.45-8.2,9.13,19.4a14.81,14.81,0,0,0-7.83,13.06A2.29,2.29,0,0,0,144.77,211Zm27.11-.25a12.32,12.32,0,1,1-12.32-12.32A12.33,12.33,0,0,1,171.88,210.74Zm-6.22-13.48a14.7,14.7,0,0,0-11.95-.12l-9.12-19.4,15.78-7.42a28.2,28.2,0,0,0,12.95,10Z" transform="translate(-19.68 -8.63)"/><circle class="cls-1" cx="64.7" cy="190.44" r="25.19"/></svg>
		</a>
		<a class="hoverable" href="{{asset('/')}}">Accueil</a>
	</header>

	<h1>Informations légales</h1>

	<div class="glass-effect">
		<h2>1. Présentation du site.</h2>
		<p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
		<p>
			<strong>Propriétaire</strong> : Sarah Mauriaucourt – Résidence Universitaire Jules Mousseron, Rue du Chemin Vert, 59300 AULNOY-LEZ-VALENCIENNES<br />
			<strong>Créateur</strong> : <a target="blank" href="https://sarahmauriaucourt.fr/">Sarah Mauriaucourt</a><br />
			<strong>Responsable publication</strong> : Sarah Mauriaucourt – mauriaucourt.sarah@gmail.com<br />
			Le responsable publication est une personne physique ou une personne morale.<br />
			<strong>Webmaster</strong> : Sarah Mauriaucourt – <a href="mailto:mauriaucourt.sarah@gmail.com" class="link">mauriaucourt.sarah@gmail.com</a><br />
			<strong>Hébergeur</strong> : Infomaniak – Avenue de la Praille 261227 Carouge, Suisse<br />
			Crédits : Alexandre Lavaud développeur web, Camille Kozack infographiste, Mondine Odin Sound designer et Antony Deschodt Sound designer<br />
			Le modèle de mentions légales est offert par <a target="blank" href="https://www.subdelirium.com/" class="link">Subdelirium.com</a>
		</p>
	</div>
	<div class="glass-effect">
		<h2>2. Conditions générales d’utilisation du site et des services proposés.</h2>
		<p>L’utilisation du site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> sont donc invités à les consulter de manière régulière.</p>
		<p>Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par Sarah Mauriaucourt, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.</p>
		<p>Le site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> est mis à jour régulièrement par Sarah Mauriaucourt. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>
	</div>
	<div class="glass-effect">
		<h2>3. Description des services fournis.</h2>
		<p>Le site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> a pour objet de fournir une information concernant l’ensemble des activités de la société.</p>
		<p>Sarah Mauriaucourt s’efforce de fournir sur le site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
		<p>Tous les informations indiquées sur le site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
	</div>
	<div>
		<h2>4. Limitations contractuelles sur les données techniques.</h2>
		<p>Le site utilise la technologie JavaScript.</p>
		<p>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour</p>
	</div>
	<div class="glass-effect">
		<h2>5. Propriété intellectuelle et contrefaçons.</h2>
		<p>Sarah Mauriaucourt est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>
		<p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Sarah Mauriaucourt.</p>
		<p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
	</div>
	<div class="glass-effect">
		<h2>6. Limitations de responsabilité.</h2>
		<p>Sarah Mauriaucourt ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site http://escapemind.sarahmauriaucourt.fr, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>
		<p>Sarah Mauriaucourt ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a>.</p>
		<p>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. Sarah Mauriaucourt se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, Sarah Mauriaucourt se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).</p>
	</div>
	<div class="glass-effect">
		<h2>7. Gestion des données personnelles.</h2>
		<p>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p>
		<p>A l'occasion de l'utilisation du site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a>, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a>, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.</p>
		<p> En tout état de cause Sarah Mauriaucourt ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a>. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> l’obligation ou non de fournir ces informations.</p>
		<p>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p>
		<p>Aucune information personnelle de l'utilisateur du site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de Sarah Mauriaucourt et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a>.</p>
		<p>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>
	</div>
	<div class="glass-effect">
		<h2>8. Liens hypertextes et cookies.</h2>
		<p>Le site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de Sarah Mauriaucourt. Cependant, Sarah Mauriaucourt n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>
		<p>La navigation sur le site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>
		<p>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :</p>
		<p>Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</p>
		<p>Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée.
			Paramétrez les Règles de conservation sur :  utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour  désactiver les cookies.</p>
		<p>Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.</p>
		<p>Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences.  Dans l'onglet "Confidentialité", vous pouvez bloquer les cookies.</p>
	</div>
	<div class="glass-effect">
		<h2>9. Droit applicable et attribution de juridiction.</h2>
		<p>Tout litige en relation avec l’utilisation du site <a href="//http://escapemind.sarahmauriaucourt.fr/" class="link">escape_mind</a> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
	</div>
	<div class="glass-effect">
		<h2>10. Les principales lois concernées.</h2>
		<p>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.</p>
		<p> Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>
	</div>
	<div class="glass-effect">
		<h2>11. Lexique.</h2>
		<p>Utilisateur : Internaute se connectant, utilisant le site susnommé.</p>
		<p>Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
	</div>
	<div class="glass-effect">
		<h2>12. Remerciements.</h2>
		<p>Nous tenons à remercier Antoine Staszewski et Dayvinn Simon pour nous avoir prêté leur matériel et avoir accepté de figurer ou d'être acteur dans nos cinématiques. Merci à Yann d'avoir toujours été présent et impliqué comme acteur. Nous tenons également à remercier Alex Yaghli pour nous avoir permis d'utiliser une de ses compositions.</p>
	</div>
</section>
@endsection