(function() {
	function g() {};
	g.prototype.lang = [{
	"info": {
		"lang": "Portuguese (BR)",
		"author": "Gustavo Hime",
	},
	"header": {
		"field 1": "Jogar",
		"field 2": "Tutorial",
		"field 3": "Sobre",
		"field 4": "Cr�ditos",
		"field 5": "Ranking",
		"field 6": "Live ranking",
		"field 7": "Recordes",
		"field 8": "Resultados",
		"field 9": "Votlar",
		"field 10": "Um framework computacional humano para gen�mica comparativa",
		"field 11": "Celular",
		"field 12": "Cl�ssico",
		"field 13": "Quer contribuir? Clique aqui",
		"field 14": "Retornar do modo para celular",
	},
	"body": {
		"play": {
			"gameselect": {
				"login": {
					"field 1": "Login como visitante",
					"field 2": "Login",
					"field 3": "Cadastrar-se",
					"field 4": "Ou simplesmente fa�a login usando",
					"field 5": "logout",
					"field 6": "Favor fazer login ou registrar-se para que possamos agregar sua contribui��o para a ci�ncia",
					"field 7": "Usu�rio",
					"field 8": "Senha",
					"field 9": "Email (opcional)",
					"field 10": "Confirmar",
					"field 11": "Desafie seus amigos, compartilhe alinhamentos, e mais!",
					"field 12": "Conectar ao Phylo usando Facebook",
					"field 13": "Usu�rio n�o logado. jogando como visitante.",
					"field 14": "Bem vindo ***",
					"field 15": "Voc� agora est� deslogado",
					"field 16": "Could not login: Wrong username/password.",
					"field 17": "Logout",
					"field 18": "Cadastro",
					"field 19": "Bem vindo de volta! Voc� n�o � ***?",
				},
			"levelselect": {
				"header": "Selecionar n�vel. Escolha um n�vel por dificuldade, ID ou doen�a associada",
				"random": {
					"field 1": "Selecione o n�mero de seq��ncias.",
					"field 2": "Aleat�rio",
					"field 3": "F�cil - Dif�cil",
				},
				"level id": {
					"field 1": "Entre a ID do n�vel que deseja jogar",
					"field 2": "ID do n�vel",
					"field 3": "Entre a ID do n�vel",
					"field 4": "Enviar",
				},
				"disease": {
					"field 1": "Selecione uma doen�a para come�ar um n�vel associado a ela",
					"field 2": "Doen�a",
					"field 3": "SANGUE E SISTEMA IMUNOL�GICO",
					"field 4": "OSSO E PELE",
					"field 5": "C�REBRO E SISTEMA NERVOSO",
					"field 6": "C�NCER",
					"field 7": "SISTEMA DIGESTIVO",
					"field 8": "CORA��O E SISTEMA CIRCULAT�RIO",
					"field 9": "DIST�RBIOS METAB�LICAS",
					"field 10": "M�SCULOS",
					"field 11": "SISTEMA REPRODUTIVO",
					"field 12": "SISTEMA RESPIRAT�RIO",
					"field 13": "SISTEMA SENSORIAL",
				},
			},
			"short tutorial": {
				"field 1": "Mova os quadrados para a esquerda e para a direita. Tente emparelhar verticalmente as cores, evitando lacunas. D� um double-click e arraste para selecionar v�rios blocos.",
				"field 2": "Continuar",
				"field 3": "Cheque aqui para ver como est� indo. Pontua��oes vermelhas significam que voc� ainda pode melhorar aquele ramo!",
				"field 4": "Olhe aqui para ver a pontua��o m�nima. Esta � a pontua��o m�nima que voc� precisa para passar de fase. Clique na estrela dourada quando o tiver atingido!",
				"field 5": "Estou pronto!",
				"field 6": "Recomenda-se vivamente que voc� complete o tutorial. Mas clique de novo se insistir.",
			},
			"video tutorial": {
				"field 1": "Aprenda o b�sico sobre Phylo",
			},
			"game board": {
				"field 1": "Pontua��o",
				"field 2": "M�nimo",
				"field 3": "Fase",
				"field 4": "Melhor Pontua��o",
				"field 5": "N�vel",
				"field 6": "Dificuldade",
				"field 7": "Com m�sica - Sem m�sica - mudo",
				"field 8": "Stats",
				"field 9": "Concord�ncias",
				"field 10": "Discord�ncias",
				"field 11": "Lacunas",
				"field 12": "Extens�o de lacunas",
				"field 13": "Pontuar agora",
			},
			"end of game": {
				"field 1": "Obrigado",
				"field 2": "N�s apreciamos sua contribui��o � ci�ncia. Voc� sabia:",
				"field 3": "Parab�ns! Voc� completou a �ltima fase, e n�s enviamos seu alinhamento desta sess�o.",
				"field 4": "Infelizmente, seu tempo acabou antes de chegar � �ltima fase, e seu alinhamento desta sess�o n�o foi enviado.",
				"field 5": "Voc� jogou o n�vel ***. Guarde este ID se desejar jogar este n�vel novamente mais tarde!! O DNA neste n�vel est� associado a:",
				"field 6": "Este n�vel foi completado *** vezes. Usu�rios falharam em completar este n�vel *** vezes.",
				"field 7": "A melhor pontua��o para este n�vel �: ***",
				"field 8": "A pontua��o m�dia para este n�vel �: ***",
				"field 9": "*** det�m o recorde para este n�vel.",
				"field 10": "At� o momento, *** usu�rios submeteram *** alinhamentos para *** n�veis diferentes.",
				"field 11": "Novo jogo",
				"field 12": "Jogar de novo",
				"field 13": "Compartilhar no Facebook",
				"field 14": "Desafiar um amigo",
				"field 15": "Menu",
				"field 16": "Clique na estrela novamente para enviar sua pontua��o agora, ou continue jogando para tentar atingir uma pontua��o melhor ainda!",
			},
		},
		"tutorial": {
			"field 1": "Em Phylo, seu objetivo � mover seq��ncias de blocos horizontalmente de forma a criar um n�mero m�ximo de colunas de cores semelhantes. Cada par de quadrados de uma mesma cor (concord�ncia) numa coluna vale um b�nus.",
			"field 2": "Entretanto, as seq��ncias n�o s�o id�nticas. Logo, cores diferentes numa coluna (discord�ncia) e lacunas s�o inevit�veis, e voc� � penalizado por elas.",
			"field 3": "Seu desafio � encontrar o alinhamento que d� a maior pontua��o na soma de b�nus (positivos) e penalidades (negativas).",
			"field 4": "B�nus e penalidades para concord�ncias e discord�ncias s�o pequenos. Mas o custo para lacunas � grande! Normalmente, � prefer�vel ter uma lacuna grande em vez de v�rias pequenas. Tente primeiro minimizar o n�mero de lacunas.",
			"field 5": "Voc� notou a �rvore � esquerda? Ela diz que seq��ncias devem ser alinhadas priorit�riamente. Isto � importante quando voc� tiver que escolher entre que pares de linhas alinhar uma concord�ncia. � mais importante criar alinhamentos pr�ximos entre seq��ncias de um mesmo grupo filog�nico do que tentar aumentar a similaridade entre classifica��es mais afastadas.",
			"field 6": "Para passar as fases de um n�vel, voc� precisa atingir a pontua��o m�nima, ou seja, o valor dado pelo computador. Quando sua pontua��o � maior ou igual a este m�nimo, a estrela dourada aparece no canto inferior direito. Clique nela para iniciar a fase seguinte.",
			"field 7": "Quando todas as seq��ncias estiver na tela, tente atingir a pontua��o mais alta poss�vel e envie seu resultado clicando na estrela novamente!",
			"field 8": "concord�ncia",
			"field 9": "discord�ncia",
			"field 10": "lacuna",
			"field 11": "�rvore filog�nica",
		},
		"about": {
			"field 1":"Do que trata-se Phylo?",
			"field 2":"Embora possa parecer um simples jogo, Phylo � na verdade um sistema para arregimentar o poder computacional da humanidade para resolver um problema comun: o Alinhamento de M�ltiplas Seq��ncias.",
			"field 3":"O que � um Alinhamento de M�ltiplas Seq��ncias?",
			"field 4": "Um alinhamento de seq��ncia � um arranjo de seq��ncias de DNA, RNA ou prote�na que identifica regi�es similares. Estas similaridades podem se conseq��ncia de rela��es funcionais, estruturais ou evolucionarias entre as seq��ncias alinhadas. Usando estes alinhamentos, bi�logos podem inferir origens evolucion�rias comuns, identificar posi��es funcionalmente relevantes, e ilustrar eventos de muta��o. Mas o mais importante �: bi�logos podem buscar as causas de doen�as gen�ticas.",
			"field 5": "O Problema",
			"field 6": "Tradicionalmente, algoritmos para alinhamento de m�ltiplas seq��ncias utilizam heur�sticas computacionalmente complexas. Infelizmente, o uso destas heur�sticas n�o garante uma otimiza��o global, e o custo computacional para encontrar a solu��o �tima global seria proibitivo. Isto deve-se em parte ao tamanho do genoma simplesmente, que consiste em aproximadamente tr�s bilh�es de pares de nucleot�deos, e do aumento exponencial da complexidade computacional com a n�mero de seq��ncias a serem alinhadas.",
			"field 7": "Nossa abordagem",
			"field 8": "O ser humano evoluiu para reconhecer padr�es e resolver problemas visuais com grande efici�ncia. Ao transformar o problema de alinhamento m�ltiplo de seq��ncias na manipula��o de blocos coloridos, nos adaptamos o problema para tirar proveito desta capacidade. Partindo de dados que j� foram alinhados por computadores, n�s damos aos usu�rios a oportunidade de otimizar al�m daquilo que a heur�stica computacional foi capaz.",
			"field 9": "Os Dados",
			"field 10": "Todos os alinhamentos foram generosamente disponibilizados atrav�s do UCSC Genome Browser. De fato, todos os alinhamentos cont�m se��es de DNA humano que especula-se estejam relacionadas a diversas doen�as gen�ticas, como c�ncer. Toda vez que algu�m completa um n�vel, o alinhamento � enviado para n�s, analizado e armazenado num banco de dados, de onde em algum momento ser� reintroduzido no alinhamento global original, como otimiza��o suplementar.",
			"field 11": "Para mais informa��es sobre qualquer um destes t�picos, clique aqui.",
		},
		"credit": {
			"field 1": "L�deres do Projeto (M�dia e contatos cient�ficos)",
			"field 2": "Equipe de desenvolvimento",
			"field 3": "Designers originais",
			"field 4": "Suporte",
			"field 5": "Siga-nos",
			"field 6": "M�sica",
			"field 7": "Agradecimentos",
		},
		"ranking": {
			"field 1": "2011 Phylo Ranking",
			"field 2": "Posi��o, Usu�rio, Pontua��o",
			"field 3": "Ranking Geral",
			"field 4": "2011 contribuidor",
			"field 5": "Maior contribuidor",
			"field 6": "Ranking por categoria de doen�a",
			"field 7": "SANGUE E SISTEMA IMUNOL�GICO",
			"field 8": "OSSO E PELE",
			"field 9": "C�REBRO E SISTEMA NERVOSO",
			"field 10": "C�NCER",
			"field 11": "SISTEMA DIGESTIVO",
			"field 12": "CORA��O E SISTEMA CIRCULAT�RIO",
			"field 13": "DIST�RBIOS METAB�LICAS",
			"field 14": "M�SCULOS",
			"field 15": "SISTEMA REPRODUTIVO",
			"field 16": "SISTEMA RESPIRAT�RIO",
			"field 17": "SISTEMA SENSORIAL",
			"field 18": "Informa��o",
			"field 19": "Classifica��o de doen�as",
			"field 20": "Classifica��o de doen�as usada no Phylo em 29 de Novembro de 2011.",
			"field 21": "Nota: a classifica��o pode vir a ser alterada.",
			"field 22": "Sistema de Pontua��o",
			"field 23": "Descri��o do sistema de pontua��o",
			"field 24": "As pontua��es de usu�rios cadastrados � baseada no n�mero de n�veis que melhoraram o alinhamento original da seq��ncia de DNA.",
			"field 25": "N�s reinserimos todas as solu��es completadas em suas posi��es originais no alinhamento m�ltiplo de 44 esp�cies de onde foram extra�das. Os jogadores recebem um ponto para cada solu��o sua que tenha contribu�do para aumentar a pontua��o do genoma completo. Obviamente, duplicatas s�o removidas. N�s geramos diversas tablas de ranking:",
			"field 26": "Ranking geral: Todos os n�veis s�o considerados. Os jogadores s�o ordernados de acordo com sua pontua��o total.",
			"field 27": "Ranking de Primeira Contribui��o: Apenas o primeiro jogador a chegar a solu��o efetivamente usada recebe um ponto por ela. Outros que cheguem � mesma ou equivalente solu��o n�o recebem nada.",
			"field 28": "Ranking por categoria de doen�a: Apenas os n�veis correspondentes a genes relacionados a uma doen�a da categoria em quest�o s�o considerados. A lista de categorias e doen�as relacionadas est� descrita na se��o sobre classifica��o de doen�as.",
		},
		"live ranking": {
			"field 1": "Ranking online",
			"field 2": "ranking online",
			"field 3": "Mensal",
			"field 4": "Semanal",
			"field 5": "N�veis completados",
		},
		"results": {
			"field 1": "resultados para 2011",
			"field 2": "Um tarball com todos os dados pode ser baixado de",
		},
		"challenge": {
			"field 1": "Desafios",
			"field 2": "Desafios abertos",
			"field 3": "Entre o nome de um amigo no campo acima, ou clique em 'Jogar Agora' para desafiar um jogador aleat�rio!",
			"field 4": "Jogar Agora",
		},
	},
	"footer": {
		"field 1": "Phylo � um jogo desafiante em Flash, no qual cada quebra-cabe�a resolvido contribui para o mapeamento de doen�as no DNA humano. Saiba mais.",
		"field 2": "Junte-se � comunidade Phylo no Facebook ou simplesmente curta.",
		},
	},
}];
	var proto = g.prototype,
		attr = [
			["lang",proto.lang],
			];
	common.exportSingleton("PTscript",g,attr);
})();
