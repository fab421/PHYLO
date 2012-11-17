(function() {
	function g() {};
	g.prototype.lang = [{
	"info": {
		"lang": "Français",
		"author": "Jérôme Waldispuhl",
},
	"header": {
		"field 1": "Jouer",
		"field 2": "Tutoriel",
		"field 3": "À propos",
		"field 4": "Crédits",
		"field 5": "Classement",
		"field 6": "Classement en direct",
		"field 7": "Meilleurs scores",
		"field 8": "Résultats",
		"field 9": "Retour",
		"field 10": "Un outil de calcul humain pour la génomique comparative",
		"field 11": "Mobile",
		"field 12": "Classique",
		"field 13": "Voulez vous contribuer? Cliquez ici",
		"field 14": "Retour à la version classique",
},
	"body": {
		"play": {
			"gameselect": {
				"login": {
					"field 1": "Connexion invité",
					"field 2": "Connexion",
					"field 3": "Enregistrement",
					"field 4": "Ou connecte toi instantanément avec",
					"field 5": "Déconnection",
					"field 6": "Connecte toi ou inscrit toi pour enregistrer ta contribution à la science",
					"field 7": "Nom d’utilisateur",
					"field 8": "Mot de passe",
					"field 9": "Adresse courrier électronique (optionnel)",
					"field 10": "Confirmez",
					"field 11": "Challenge tes amis, partage tes alignments et plus!",
					"field 12": "Connecte toi à Phylo avec Facebook",
					"field 13": "Non connecté. Tu joues en tant qu’invité.",
					"field 14": "Bienvenu ***",
					"field 15": "Tu es maintenant déconnecté",
					"field 16": "Impossible de se connecter: Nom d’utilisateur ou Mot de passe incorrect.",
					"field 17": "Déconnection",
					"field 18": "Enregistrement",
					"field 19": "Bienvenu! Tu n’es pas ***?",
},
			"levelselect": {
				"header": "Sélection de puzzle. Choisi un puzzle par difficulté, identifiant ou maladie associée",
				"random": {
					"field 1": "Sélectionne le nombre de séquences.",
					"field 2": "Aléatoire",
					"field 3": "Facile – Difficile",
},
				"level id": {
					"field 1": "Entre l’identifiant du puzzle que tu souhaites jouer.",
					"field 2": "Identifiant de puzzle",
					"field 3": "Entre un identifiant de puzzle",
					"field 4": "Soumettre",
},
				"disease": {
					"field 1": "Sélectionne un puzzle associé à une maladie",
					"field 2": "Maladie",
					"field 3": "SANG ET SYSTEME IMMUNITAIRE", 
					"field 4": "OS ET TISSUS",
					"field 5": "CERVEAU ET SYSTEME NERVEUX",
					"field 6": "CANCER",
					"field 7": "SYSTEME DIGESTIF",
					"field 8": "COEUR ET SYSTEME CIRCULATOIRE",
					"field 9": "DESORDRES METABOLIQUES",
					"field 10": "MUSCLES",
					"field 11": "SYSTEME DE REPRODUCTION",
					"field 12": "SYSTEME RESPIRATOIRE",
					"field 13": "SYSTEME SENSITIF",
},
},
			"short tutorial": {
				"field 1": "Bouge les blocs vers la gauche et la droite. Essaie d’aligner les couleurs verticalement tout en évitant les espaces vides.  Clique deux fois pour sélectionner plusieurs blocs.",
				"field 2": "Continue",
				"field 3": "Surveille ton score ici. Un score rouge signifie que tu peux améliorer cette branche!",
				"field 4": "Regarde ici pour essayer de dépasser le par. C’est le score minimum que tu dois atteindre pour passer au prochain niveau. Clique sur l’étoile illuminée quand tu seras prêt!",
				"field 5": "Je suis prêt!",
				"field 6": "Il est très recommandé de compléter le tutoriel. Clique encore si tu souhaites passez outre.",
},
			"video tutorial": {
				"field 1": "Apprend les bases de Phylo",
},
			"game board": {
				"field 1": "Score",
				"field 2": "Par",
				"field 3": "Niveau",
				"field 4": "Meilleur Score",
				"field 5": "Puzzle",
				"field 6": "Difficulté",
				"field 7": "Musique - Silence - Silence",
				"field 8": "Statistiques",
				"field 9": "Alignement",
				"field 10": "Disparité",
				"field 11": "Espace",
				"field 12": "Extension d’espace",
				"field 13": "Évaluation",
},
			"end of game": {
				"field 1": "Merci",
				"field 2": "Nous apprécions votre contribution à la science. Le saviez-vous:",
				"field 3": "Félicitations! Tu as fini le dernier niveau et tu viens de soumettre ton alignement pour ce puzzle.",
				"field 4": "Malheureusement tu es arrivé à court de temps. Tu n’as donc pas pu soumettre un alignement.",
				"field 5": "Tu as joué le puzzle ***. Souviens toi de cet identifiant si tu souhaites rejouer ce niveau plus tard! L’AND de puzzle a été associé à:",
				"field 6": "Ce puzzle a été complété *** fois. Les joueurs ont échoué à ce puzzle *** fois.",
				"field 7": "Le meilleur score pour ce puzzle est: ***",
				"field 8": " Le score moyen pour ce puzzle est: ***",
				"field 9": "*** a le meilleur score pour ce puzzle.",
				"field 10": "À ce jour, *** joueurs ont soumis *** alignements pour *** puzzles différents.",
				"field 11": "Nouveau puzzle",
				"field 12": "Rejoue le puzzle",
				"field 13": "Partage sur Facebook",
				"field 14": "Challenge un ami",
				"field 15": "Menu",
				"field 16": "Clique encore sur l’étoile pour soumettre ton score maintenant,  ou continue a jouer pour essayer d’obtenir le meilleur score possible!",
},
		},	
		"tutorial": {
			"field 1": "Dans Phylo, ton but est de déplacer les séquences de blocs horizontalement dans le but de créer le maximum de colonnes de couleurs similaires. Chaque alignement de couleur te donne un bonus.",
			"field 2": "Cependant, les séquences ne sont pas identiques. En conséquence, les disparités de couleurs et les espaces vides sont inévitables et tu es pénalisé pour cela.",
			"field 3": "Ton challenge est de trouver la meilleur balance entre les bonus et les pénalités.",
			"field 4": "Les bonus et pénalités pour les alignements de couleurs sont faible. Mais le coût de création d’un espace est grand! Il est souvent préférable d’avoir un long espace plutôt que plusieurs petits. Essaie de minimiser le nombre d‘espaces en priorité!",
			"field 5": "As-tu remarqué l’arbre sur la gauche? Il indique quelles séquences doivent être alignées en priorité. C’est utile quand tu dois favoriser un alignment de blocs par rapport à un autre. Il est plus important de conserver des motifs de couleur pour des séquences dans un même groupe plutôt que dans des groupes différents.",
			"field 6": "Pour atteindre le niveau final tu dois passer des niveaux. Pour cela tu dois atteindre le par (i.e. le score de l’ordinateur). Quand ton score est égal ou supérieur au par, une étoile s’illumine en bas a droite. Clique dessus pour atteindre le niveau suivant.",
			"field 7": "Quand toutes les séquences sont présente dans le tableau, essaie d’obtenir le meilleur score possible et soumet ta solution en cliquant encore sur l’étoile!",
			"field 8": "Alignement",
			"field 9": "Disparité",
			"field 10": "Espace",
			"field 11": "Arbre phylogénétique",
},
		"about": {
			"field 1":"Qu’est ce que Phylo?",
			"field 2":" Bien que cela ne semble être qu'un simple jeu, Phylo est en fait un jeu qui nous permet d'utiliser la puissance de calcul humaine pour résoudre un problème courant ; l'alignement de séquences multiple.",
			"field 3": " Qu'est ce qu'un alignement de séquences multiple?",
			"field 4": " Un alignement de séquence est une façon d'arranger les séquences d'ADN, ARN ou protéines afin d'identifier les régions similaires. Ces similarités peuvent être la conséquence de relations fonctionnelles, structurelles ou évolutives entre les séquences.<br> à partir de tels alignements, les biologistes peuvent inférer des origines évolutives partagées par les séquences, identifier des sites fonctionnels importants, et décrire les mutations caractéristiques. Mais ce qui est encore plus important est que les biologistes peuvent s'en servir pour identifier l'origine de maladies génétiques.",
			"field 5": "Le Problème",
			"field 6": "Traditionnellement, les algorithmes d'alignement multiple utilisent des heuristiques calculatoire sophistiquées pour aligner les séquences. Malheureusement, l'utilisation de ces heuristiques ne permet pas garantir de trouver une solution optimale, tandis que l'utilisation d'algorithmes exact permettant de trouver la solution optimale est quant à elle impossible en raison de son coût calculatoire (i.e. l'exécution de l'algorithme prendrai trop de temps). Cela provient de la taille des génomes qui contiennent environ trois milliards de bases, et de l'augmentation de complexité calculatoire chaque fois qu'une nouvelle séquence est ajoutée à un alignement.",
			"field 7": "Notre approche",
			"field 8": " Au cours de l'évolution les humains ont acquis la capacité de reconnaître les formes géométriques et à résoudre de manière efficace et rapide les problèmes visuels. En abstrayant les alignements de séquences multiples à une manipulation de formes géométriques colorées, nous avons adapté le problème aux capacités de raisonnement des humains. <br> En récupérant les données qui ont déjà été alignées par des algorithmes heuristiques, nous permettons à l'utilisateur d'améliorer les résultats là où l'ordinateur a échoué.",
			"field 9": "Les Données",
			"field 10": " Les alignements de génomes sont gracieusement fournis par le navigateur de génomes de l'Université de Californie à Santa Cruz. <br>En fait, tous les alignements contiennent des régions de l'ADN humain qui sont suspectées d'être reliées à des désordres génétiques tels que le cancer du sein. <br>Chaque alignement est reçu, analysé, et stocké dans une base de données, à partir d'où il sera éventuellement possible de réintroduire les résultats dans l'alignement global en tant qu'optimisation.",
			"field 11": " Pour plus d'information à propos de ces sujets clique ici.",
},
		"credit": {
			"field 1": "Responsables du projet (Contacts médias et scientifiques)",
			"field 2": "Équipe de développement",
			"field 3": "Concepteurs originaux",
			"field 4": "Supporté par",
			"field 5": "Suivez nous sur",
			"field 6": "Musique",
			"field 7": "Remerciements",
			"field 8": "Conseiller scientifique",
			"field 9": "Traductions",
},
		"ranking": {
			"field 1": "Classement Phylo 2011",
			"field 2": "Classement, Nom d‘utilisateur, Score",
			"field 3": "Classement général",
			"field 4": "Contributeurs 2011",
			"field 5": "Premiers contributeurs",
			"field 6": "Classement par maladies",
			"field 7": "SANG ET SYS. IMMUNITAIRE",
			"field 8": "OS ET TISSUS",
			"field 9": "CERVEAU ET SYS. NERVEUX",
			"field 10": "CANCER",
			"field 11": "SYSTEME DIGESTIF",
			"field 12": "COEUR ET SYS. CIRCULATOIRE",
			"field 13": "DESORDRES METABOLIQUES",
			"field 14": "MUSCLES",
			"field 15": "SYSTEME DE REPRODUCTION",
			"field 16": "SYSTEME RESPIRATOIRE",
			"field 17": "SYSTEME SENSITIF",
			"field 18": "Information",
			"field 19": "Classification des maladies",
			"field 20": "Classification des maladies utilisées dans Phylo au 29 Novembre 2011.",
			"field 21": "NB: la classification est sujette à changements.",
			"field 22": "Système de scores",
			"field 23": "Description du système de scores",
			"field 24": " Les scores des usagers enregistrés sont basés sur le nombre de puzzles qui ont effectivement amélioré l'alignement de séquences d'ADN original.",
			"field 25": " Nous avons réinséré les solutions des puzzles à leur position originale dans l'alignement de séquences multiple provenant de 44 espèces différentes. Les joueurs ont été crédités d'1 point pour chaque solution qui a amélioré le score de l'alignement complet des génomes. Bien sur les solutions identiques ont été supprimées. Nous reportons plusieurs classements:",
			"field 26": " Classement général: Tous les puzzles sont considérés. Les joueurs sont classés suivant leur score total.",
			"field 27": " Classement des premiers contributeurs: Seul le premier joueur a avoir soumis la première solution insérée reçoit 1 point. Les autres reçoivent 0.",
			"field 28": " Classement par famille de maladies: Seul les puzzles dont les séquences correspondent à des gènes reliés à la famille de maladie en question sont considérés. La liste des familles de maladies et le nom des maladies considérées est disponible dans la section de classification des maladies.",
},
		"live ranking": {
			"field 1": "Classement de Phylo en direct",
			"field 2": "Classement en direct",
			"field 3": "Mensuel",
			"field 4": "Hebdomadaire",
			"field 5": "Puzzles complétés"		
},
		"results": {
			"field 1": "Résultats 2011",
			"field 2": "Une archive contenant tous les résultats peut-etre téléchargée à",
},
		"challenge": {
			"field 1": "Challenges",
			"field 2": "Challenge ouvert",
			"field 3": "Entre le nom d’un ami au dessus, ou simplement clique sur Jouer pour défier un joueur aléatoire !",
			"field 4": "Jouer",
},
},
	"footer": {
		"field 1": "Phylo est un jeu Flash compétitif où chaque puzzle résolu contribue à améliorer notre compréhension de la relation entre l’ADN et les maladies. Apprenez en plus.",
		"field 2": "Rejoins la communauté de Phylo sur Facebook ou donne nous un coup de pouce.",
},
},
}];
	var proto = g.prototype,
		attr = [
			["lang",proto.lang],
			];
	common.exportSingleton("FRscript",g,proto);
})();
