(function() {
	function g() {};
	g.prototype.lang = [{
	 "info": {
		"lang": "русский",
		"author": "Валерия Назарова",
	 },
	 "error": {
	     "bug1" : "Oops! We couldnt connect to the server.<br>We suspect you are not connected to the internet!",
	     "bug2" : "Oops! The Server Crashed!<br> Please Try again later",
	 },
	 "header": {
		"field 1": "Игра",
		"field 2": "Помощь",
		"field 3": "Об игре",
		"field 4": "Авторы",
		"field 5": "Рейтинг",
		"field 6": "Живой рейтинг",
		"field 7": "Лучшие игроки", 
		"field 8": "Результаты",
		"field 9": "Возврат",
		"field 10": "Ориентированный на человеческое мышление метод сравнительной геномики",
		"field 11": "Телефон",
		"field 12": "Стандартный",
		"field 13": "Хотите внести вклад в науку? Нажмите здесь",
		"field 14": "Возвращение к стандартной версии",
	},
	"body": {
		"play": {
			"gameselect": {
				"login": {
					"field 1": "Гость",
					"field 2": "Вход",
					"field 3": "Регистрация",
					"field 4": "или подключиться одновременно с ",
					"field 5": "Выход",
					"field 6": "Пожалуйста, используйте свое имя или зарегистрируйтесь если хотите сохранить историю своего прогресса",
					"field 7": "Имя пользователя",
					"field 8": "Пароль",
					"field 9": "Email(дополнительно)",
					"field 10": "Повторите",
					"field 11": "Привлекайте друзей, делитесь своими комбинациями и многое другое! ",
					"field 12": "Подключитесь к Phylo через Facebook",
					"field 13": "Вход не выполнен. Играйте в качестве гостя",
					"field 14": "Добро пожаловать ***",
					"field 15": "Вы вышли из игры",
					"field 16": "Не получается подключиться: неверное имя пользователя или пароль",
					"field 17": "Выход",
					"field 18": "Регистрация",
					"field 19": "Добро пожаловать! Вы не ***?",
				},
			"levelselect": {
				"header": "Выбор головоломки. Выберите головоломку по уровню сложности, номеру или связанную с болезнью",
				"random": {
					"field 1": "Выберите количество последовательностей.",
					"field 2": "Случайные последовательности",
					"field 3": "просто - сложно",
				},
				"level id": {
					"field 1": "Введите номер выбранной головоломки.",
					"field 2": "Номер головоломки",
					"field 3": "Введите номер головоломки",
					"field 4": "Подтвердить",
				},
				"disease": {
					"field 1": "Выберите головоломку, связанную с болезнью",
					"field 2": "Болезни",
					"field 3": "Кровь и иммуная система",
					"field 4": "Кости и ткани",
					"field 5": "Мозг и нервная система",
					"field 6": "Рак",
					"field 7": "Пищеварительная система",
					"field 8": "Сердце и кровеносная система",
					"field 9": "Нарушение обмена веществ",
					"field 10": "Мышцы",
					"field 11": "Половая система",
					"field 12": "Дыхательная система",
					"field 13": "Система органов чувств",
				},
			},
			"short tutorial": {
				"field 1": "Перемещайте квадраты налево и направо. Расставьте цвета вертикально, не оставляя между ними промежутков. Нажмите два раза, чтобы выбрать несколько квадратов",
				"field 2": "Продолжить",
				"field 3": "Проверьте свой статус здесь. Красный цвет означает, что вы можете улучшить свой результат по этой ветви.",
				"field 4": "Следите за своим количеством баллов здесь. Это минимальное количество баллов, которое вы должны набрать, чтобы перейти на следующий уровень. По окончанию нажмите на появившуюся звездочку!",
				"field 5": "Я готов!",
				"field 6": "Очень рекомендуется до конца ознакомиться с инструкцией. Нажмите еще раз, если хотите ее пропустить. ",
			},
			"video tutorial": {
				"field 1": "Изучить основы Phylo",
			},
			"game board": {
				"field 1": "Баллы",
				"field 2": "Пар",
				"field 3": "Уровень",
				"field 4": "Самый высокий балл",
				"field 5": "Головоломка",
				"field 6": "Уровень сложности",
				"field 7": "громко- тихо- тишина",
				"field 8": "Статистика",
				"field 9":  "Соответствие",
				"field 10": "Несоответствие",
				"field 11": "Пробел",
				"field 12": "Протяженность пробелов",
				"field 13": "Оценить сейчас",
			},
			"end of game": {
				"field 1": "Спасибо",
				"field 2": "Мы ценим ваш вклад в науку. Знаете ли вы, что:",
				"field 3": "Поздравляем! Вы прошли этот уровень и зарегистрировали своё решение к этой головоломке",
				"field 4": "К сожалению, ваше время истекло. Вы не смогли решить эту головоломку.",
				"field 5": "Вы решили головоломку номер ***. Запомните этот номер, если собираетесь вернуться к игре на этом уровне! ДНК в головоломке было соотнесено с:",
				"field 6": "Эта головоломка была решена *** раз. Эту головоломку не смогли решить *** раз.",
				"field 7": "Самый высокий балл при решении этой головоломки - ***",
				"field 8": "Средний балл  при решении этой головоломки - ***",
				"field 9": "Самый высокий балл при решении этой головоломки у",
				"field 10": "На сегодняшний день - *** игроков зарегистрировали *** последовательностей для *** различных головоломок.",
				"field 11": "Новая игра",
				"field 12": "Переиграть",
				"field 13": "Выложить на Facebook",
				"field 14": "Озадачить друга",
				"field 15": "Меню",
				"field 16": "Нажмите на звездочку еще раз, чтобы зарегистрировать ваши баллы сейчас, или продолжите играть, чтобы добиться самого лучшего результата!",
			},
		},
		"tutorial": {
		    "field 1": "Задача игры Phylo - перемещать горизонтально цепочки квадратов, чтобы получить максимальное соответвие цветов по-вертикали. За каждое цветовое соответствие вы получаете бонус.",
		    "field 2": "Однако, цепочки не идентичны, поэтому несоответствия цветов и пробелы неизбежны, и за это вы теряете баллы.",
		    "field 3": "Ваша задача - найти золотую середину между бонусами и потерей баллов.",
		   "field 4": "Бонусы и потери баллов за соответствия и несоответствия цветов в цепочках малы. Однако, потери баллов за создание пробелов высоки! Намного лучше оставлять один большой пробел, чем много маленьких. Одним словом, постарайтесь минимизировать количество пробелов.",
		    "field 5": "Заметили дерево слева? Оно показывает, какую последовательность квадратов необходимо сравнить первоначально. Это помогает выбрать одно соответствие цветов перед другим. Намного важнее сохранить соответствия цветов между цепочками квадратов одной группы, чем увеличивать соответствия между цепочками разных групп.",
		    "field 6": "Чтобы достичь последней стадии головоломки, вам необходимо пройти все этапы выравнивания. Для этого следует обойти пар, т.е. решение компьютера. Когда ваш счет равен или превышает пар, в нижнем углу загорится звездочка. Нажмите на нее, чтобы перейти на следующий этап.",
		    "field 7": "Когда на игровом поле выложены все цепочки, попытайтесь добиться наибольшего количества баллов! Не забудьте зарегестрировать ваше решение, еще раз нажав на звездочку.",
		    "field 8": "соответствие",
		    "field 9": "несоответствие",
		    "field 10": "пробел",
		    "field 11": "филогенетическое дерево",
		    "field 12": "Основы игры: правила и советы",
		    "field 13": "Необходимая информация показана в правом нижнем углу игрового поля. Здесь вы можете увидеть ваши очки, пар (очки компьютера), стадию головоломки и ваш лучший результат. Вы можете всегда вернуться к вашему лучшему решению, нажав на разноцветный круг, над которым вы можете увидеть таймер с оставшимся временем для данной головоломки.",
		    "field 14": "Правила набора очков.",
		    "field 15": "Каждый узел филогенетического дерева содержит информацию о последовательности предков. Эта последовательность вычитывается автоматически и представляет компромиссное решение для последовательностей группы данного узла. Укажите на какой-нибудь узел филогенетического дерева, чтобы увидеть соответствующую последовательность внизу игрового поля. По умолчанию, там изображена последовательность, компромиссная для всего дерева.",
		    "field 16": "Счет игры определяется степенью соответствия каждой последовательности компромиссной последовательности ее группы. Соответствие цветов означает +1 балл, а несоответствие -1. Пробел представляет штраф в -4 балла, а его размер -1х количество пустых квадратов (кв.). В данном случае, количество баллов за соответствие последовательности летучей мыши последовательности ее предка, или ее группы, равно -4 (12 соответствий, 5 несоответствий, 1 пробел размером 1 кв. и 1 пробел размером 2 кв.)",
		    "field 17": "Ваш общий счет представляет сумму соответствий каждой последовательности с последовательностью ее предка. В данном случае, общий счет - это сумма соответствий предка В с человеком и шимпанзе, предка С с собакой и летучей мышью, и предка А с В и С.",
		    "field 18": "Готовы? Пример",
            "field 29": "Например, вы начинаете с двух последовательностей (человека и шимпанзе). Переместите все квадраты налево и проверьте последовательность предка (группы). Соотнесение последовательности предка с вашими двумя последовательностями определяется 13-ю соответствиями для человека, и 5-ю соответствиями, 1 несоответствием и 1 пробелом размером в 7 квадратов для шимпанзе. Таким образом, ваш общий счет: 18*(+1) + 1*(-1) + (-4 + 7*(-1))=6. Вы обошли пар! Нажмите на звездочку, чтобы перейти к следующему этапу.", 
		    "field 19": "Теперь перед вами две новые последовательности, собаки и летучей мыши. Снова переместите их налево. Ваш счет равен 4. 18 соответствий и 1 пробел размером 1 квадрат между собакой и предком группы , и 5 соответствий и 14 несоответствий между летучей мышью и тем же предком. Общий счет: 23*(+1) + 14*(-1) + (-4) + (-1)=4. Однако, есть лучшее решение. Какое?",
		    "field 20": "Переместите нижнюю последовательность на один квадрат налево, начиная с 7-ого блока. Вы создаете дополнительный пробел, но в тоже время вы получаете множественное соответствие с последовательностью собаки. Вы заметили, последовательность предка изменилась?! Теперь у вас 18 соответствий и 1 пробел размером 2 квадрата для собаки, и 12 соответствий, 7 несоответствий и 1 пробел размером в 1 квадрат для летучей мыши. Ваш общий счет: 30*(+1) + 7*(-1) + (2*(-4) + 3*(-1))=12. Вы готовы к следующему этапу.",
		    "field 21": "Теперь вы должны организовать ваши предыдущие последовательности. Ваш первоначальный счет - 14 баллов. Это ниже пар (19 баллов)... Вы должны найти лучшее соответствие для первой группы (первые две последовательности) и второй группы (две нижние последовательности). Как это сделать?",
		    "field 22": "Передвиньте первую группу на 4 квадрата направо. Появились две колонки зеленого цвета, а также увеличилось соответствие между последовательностями человека, собаки и летучей мыши. Теперь ваш счет - 26 баллов. Как это посчитано? ",
		    "field 23": "Давайте взглянем на последовательность предка группы человек-шимпанзе. Его соответствие с последовательностью человека составляет 11 баллов (12 соответствий и 1 несоответствие), а с последовательностью шимпанзе -5 баллов (6 соответствий и 1 пробел размером 7 квадратов). Таким образом, общий счет для этой группы: 11 + (-5)=6.",
		    "field 24": "Подведем аналогичные подсчеты для группы собака-летучая мышь. Соответствие предка группы с собакой составляет 14 баллов (16 соответствий и 2 несоответствия), а с летучей мышью -4 балла (12 соответствий, 5 несоответствий, 1 пробел размером 1 квадрат и 1 пробел размером 2 квадрата). Общий счет группы: 14 + (-4)=10.",
		    "field 25": "Чтобы завершить подсчет ваших очков, необходимо сравнить последовательности предков обеих групп с последовательностью предка всего филогенетического дерева. Сначала подсчитаем соответствие предка человека-шимпанзе с общим деревом: 9 соответствий, 4 несоответствия, 2 пробела размером 1 и 4 квадрата. Общий счет: 9*(+1) +4*(-1) + (2*(-4) + 5*(-1))=-8. ",
		    "field 26": "Теперь подсчитаем соответствие предка группы собака - летучая мышь с общим предком филогенетического дерева. Счет по этой ветви определяется 18-ю соответствиями и равен 18 баллам. Таким образом, суммарный счет при сравнении обеих групп с их предком: (-8) + 18=10.",
		    "field 27": "Ваш общий счет по игре представляет сумму всех отдельно подсчитанных ранее очков. Он отображен на филогенетическом дереве, где каждый узел представляет сумму очков от соответствий предков потомкам. В данном примере, соответствия последовательностей человека и шимпанзе с их предком определяются 6-ю баллами, а соответствия последовательностей собаки и летучей мыши 10-ю баллами. Счет при сравнении двух групп с предком филогенетического дерева равен 10 баллам. Таким образом, ваш общий счет по данной головоломке равен 26 баллам и отображен в корне дерева.",
		    "field 28": "Вы получили наивысший балл. Нажмите звездочку и зарегистрируйте ваше решение. Номер данной головоломки 3847. Теперь Вы готовы играть!",
		},
		"about": {
			"field 1":"Что такое Phylo?",
			"field 2":" На первый взгляд - это простая игра, но на самом деле - это игра, которая позволяет использовать человеческое мышление для того, чтобы решать такую важную задачу, как выравнивание последовательностей (Multiple Sequence Alighnments)",
			"field 3": "Что такое Multiple Sequence Alignments?",
			"field 4": "Multiple Sequence Alignments - это способ упорядочить последовательности ДНК, РНК или белков, чтобы выявить схожие области. Эти сходства могуть быть последствием функциональных, структурных или эволюционных связей между последовательностями. С помощью такого рода выравниваний биологи могут вычислить эволюционные основы последовательностей, выявить важные функциональные области и описать характерные мутации. Но что еще важнее - это то, что благодаря Multiple Sequence Alignments, биологи могут определить происхождение генетических заболеваний.",
			"field 5": "Основная проблематика",
			"field 6": "Традиционно в алгоритмах Multiple Sequence Alignments используются изощренные эвристические методы расчетов. К сожалению, из-за длительности расчетов, использование таких методов не позволяет гарантировать оптимизацию Multiple Sequence Alignments в целом. Причиной этого являются размер генома, который содержит до 3 миллиардов оснований, и значительное увеличение сложности расчета при добавлении новых последовательностей.",
			"field 7": "Наше решение",
			"field 8": "В течение эволюции люди приобрели спосбность распознавать геометрические формы и быстро и эффективно решать визуальные проблемы. Ассоциируя Multiple Sequence Alighnment с передвижениями цветных геометрических форм, мы адаптировали проблему к возможностям человеческого мышления. Собрав данные евристических алгоритмов, мы предоставили пользователю возможность улучшить результаты таких выравниваний.",
			"field 9": "Материалы",
			"field 10": "Выравнивание геномов любезно предоставлены UCSC Genome Browser. Все выравнивания содержат участки человеческого ДНК, которые, предположительно, связаны с определенными генетическими нарушениями, такими, как рак груди. Каждый полученный результат Multiple Sequence Alignment, анализируется и хранится в базе данных, откуда, в последствии, он будет введен обратно в UCSC Genome как результат оптимизации.",
			"field 11": "Чтобы получить больше информации на эту тему, нажмите здесь ",
		},
		"credit": {
			"field 1": "Руководитель проекта",
			"field 2": "Разработчики",
			"field 3": "Первоначальные дизайнеры ",
			"field 4": "Поддержка",
			"field 5": "Играйте с нами на",
			"field 6": "Музыка",
			"field 7": "Отдельная благодарность",
                        "field 8": "Научный консультант",
			"field 9": "Перевод",
		},
		"ranking": {
			"field 1": " Рейтиг Phylo 2011",
			"field 2": "Рейтиг, имя пользователя, Счет",
			"field 3": "Общий рейтинг",
			"field 4": "Игроки 2011",
			"field 5": "Первые игроки",
			"field 6": "Рейтиг по категориям заболеваний",
			"field 7": "Кровь и иммуная система",
			"field 8": "Кости и ткани",
			"field 9": "Мозг и нервная система",
			"field 10": "Рак",
			"field 11": "Пищеварительная система",
			"field 12": "Сердце и кровеносная система",
			"field 13": "Нарушение обмена веществ",
			"field 14": "Мышцы",
			"field 15": "Половая система",
			"field 16": "Дыхательная система",
			"field 17": "Система органов чувств",
			"field 18": "Информация",
			"field 19": "Классификация болезней",
			"field 20": "Классификация болезней, используемых в Phylo на 29 ноября 2011.",
			"field 21": "NB: в классификацию могут быть внесены изменения.",
			"field 22": "Система баллов",
			"field 23": "Описание системы баллов",
			"field 24": "Баллы зарегестрированных пользователей зависят от количества головоломок, которые непосредственно улучшили выравнивание последовательностей ДНК.",
			"field 25": "Мы внесли решения головоломок в их изначальное положение в Multiple Sequence Alignment 44-х различных видов. Игроки получают 1 балл за каждое решение, которое улучшило выравнивание геномов. Конечно, идентичные решения не учитываются. Система оценки:",
			"field 26": "Общий рейтинг: рассматриваются все головоломки. Игроки классифицируются в зависимости от их общего счета.",
			"field 27": "Рейтинг первых игроков: только игрок, предложивший первое решение для определенной головоломки, получает 1 балл. Другие получают 0 баллов.",
			"field 28": "Рейтинг по категории заболеваний: рассматриваются только головоломки, последовательности которых соответствуют генам, относящимся к определенной категории заболеваний. Список таких категорий и названия рассматриваемых болезней доступен в разделе 'Классификация болезней'.",
		},
		"live ranking": {
			"field 1": "Живой рейтинг Phylo",
			"field 2": "Живой рейтинг",
			"field 3": "За месяц",
			"field 4": "За неделю",
			"field 5": "Решенные головоломки",
		},
		"results": {
			"field 1": "Результаты 2011",
			"field 2": "Архив всех результатов можно загрузить в ",
		},
		"challenge": {
			"field 1": "Challenges",
			"field 2": "Challenge ouvert",
			"field 3": "Введи имя друга сверху или просто выбери функцию Играть чтобы дисквалифицировать d?fier спорного игрока! ",
			"field 4": "Играть",
		},
	},
	"footer": {
		"field 1": "Phylo - это испытывающая человеческие способности Flash-игра, в которой каждая решенная головоломка помогает соотнести медицинский заболевания с геномом человека. Узнай об этом больше.",
		"field 2": "Присоединись к сообществу Phylo на Facebook",
		},
	},
}];
	var proto = g.prototype,
		attr = [
			["lang",proto.lang],
			];
	common.exportSingleton("RUscript",g,attr);
})();
