(function(){
	function g() {};
	g.prototype.english = [{
    "info": {
        "lang": "English",
        "author": "Jerome Waldispuhl",
    },
    "header": {
        "field 1": "Play",
        "field 2": "Tutorial",
        "field 3": "About",
        "field 4": "Credits",
        "field 5": "Ranking",
        "field 6": "Live ranking",
        "field 7": "Highscores",
        "field 8": "Results",
        "field 9": "Back",
        "field 10": "A human computing framework for comparative genomics",
        "field 11": "Mobile",
        "field 12": "Classic",
        "field 13": "Contribute",
        "field 14": "Go back to classic edition",
        "field 15": "History",
        "field 16": "Expert",
        "field 17": "Settings",
    },
	"body": {
		"misc" : {
			"field 1":"Contribute",
			"field 2":"Setting Up! One moment please.",
			"field 3":"Leave a Feedback",
			"field 4":"View on",
			"field 5" : "Email",
			"field 6" : "Register",
			"field 7" : "Cancel",
			"field 8" : "Forgot Password",
			"field 9" : "Beta",
			"field 10" : "Customize",
			"field 11" : "Theme",
			"field 12" : "Board Color",
			"field 13" : "Brick Color",
			"field 14" : "Restore Default",
			"field 15" : "Save",
			"field 16" : "Cancel",
			"field 17" : "Back",
			"field 18" : "Ok",
			"field 19" : "Are you sure you want to quit?",
			"field 20" : "New Game",
			"field 21" : "Replay Game",
			"field 22" : "Share with your friends",
		},
		"play": {
			"gameselect": {
				"login": {
					"field 1": "Guest Login",
					"field 2": "Login",
					"field 3": "Register",
					"field 4": "Or just sign in instantly with",
					"field 5": "logout",
					"field 6": "Please login or register so you can keep track of your contribution to science",
					"field 7": "Username",
					"field 8": "Password",
					"field 9": "Email address (optional)",
					"field 10": "Confirm",
					"field 11": "Challenge your friends, share alignments, and more!",
					"field 12": "Connect to Phylo with ***",
					"field 13": "Not logged in. Playing as a guest.",
					"field 14": "Welcome ***",
					"field 15": "You are now logged out",
					"field 16": "Could not login: Wrong username/password.",
					"field 17": "Logout",
					"field 18": "Registration",
					"field 19": "Welcome back!",
                },
                "levelselect": {
                    "header": "Level select. Choose a level by difficulty, ID or associated disease",
                    "random": {
                        "field 1": "Select the number of sequences.",
                        "field 2": "Random",
                        "field 3": "Easy - Hard",
                    },
                    "level id": {
                        "field 1": "Enter the ID of the level you wish to play",
                        "field 2": "Level ID",
                        "field 3": "Enter Level ID",
                        "field 4": "Submit",
                    },
                    "disease": {
                        "field 1": "Select a disease to get an associated level",
                        "field 2": "Disease",
                        "field 3": "BLOOD AND IMMUNE SYSTEM",
                        "field 4": "BONE AND SKIN",
                        "field 5": "BRAIN AND NERVOUS SYSTEM",
                        "field 6": "CANCER",
                        "field 7": "DIGESTIVE SYSTEM",
                        "field 8": "HEART AND CIRCULATORY SYSTEM",
                        "field 9": "METABOLIC DISORDERS",
                        "field 10": "MUSCLES",
                        "field 11": "REPRODUCTION SYSTEM",
                        "field 12": "RESPIRATORY SYSTEM",
                        "field 13": "SENSORY SYSTEM",
                    },
                },
			"game board": {
				"field 1": "Score",
				"field 2": "Par",
				"field 3": "Stage",
				"field 4": "Best Score",
				"field 5": "Level",
				"field 6": "Difficulty",
				"field 7": "Music on - Music off - mute",
				"field 8": "Stats",
				"field 9": "Matches",
				"field 10": "Mismatches",
				"field 11": "Gaps",
				"field 12": "Gap extends",
				"field 13": "Score now",
            },
			"end of game": {
				"field 1": "Thank you",
				"field 2": "We appreciate your contribution to science. Did you know:",
				"field 3": "Congratulations! You've completed the final stage, and we just submitted your alignment for this session.",
				"field 4": "Unfortunately, you did not reach the par. Your alignment has not been submitted.",
				"field 5": "You played level ***. Remember this ID if you wish to play this level again later! The DNA in this puzzle has been linked to:",
				"field 6": "This level has been completed *** times. Users have failed to reach this level *** times.",
				"field 7": "The high score for this level is: ***",
				"field 8": "The average score for this level is: ***",
				"field 9": "*** has the highest score for this level.",
				"field 10": "So far *** users have submitted *** alignments for *** different levels.",
				"field 11": "New Game",
				"field 12": "Replay Game",
				"field 13": "Share",
				"field 14": "Challenge a friend",
				"field 15": "Menu",
				"field 16": "Press the star again to submit your score now,  or keep playing to try and get the best score possible!",
            },
		},	
		"about": {
			"field 1":"What's Phylo all about?",
			"field 2":"The comparison of the genomes from various species is one of the most fundamental and powerful technique in molecular Biology. It helps us to decipher our DNA and identify new genes. Though it may appear to be just a game, Phylo is actually a framework for harnessing the computing power of mankind to solve the Multiple Sequence Alignment problem.",
			"field 3": "What is a Multiple Sequence Alignment?",
			"field 4": "A sequence alignment is a way of arranging the sequences of D.N.A, R.N.A or protein to identify regions of similarity. These similarities may be consequences of functional, structural, or evolutionary relationships between the sequences. From such an alignment, biologists may infer shared evolutionary origins, identify functionally important sites, and illustrate mutation events. More importantly, biologists can trace the source of certain genetic diseases.",
			"field 5": "The Problem",
			"field 6": "Traditionally, multiple sequence alignment algorithms use computationally complex heuristics to align the sequences. Unfortunately, the use of heuristics do not guarantee global optimization as it would be prohibitively computationally expensive to achieve an optimal alignment. This is due in part to the sheer size of the genome, which consists of roughly three billion base pairs, and the increasing computational complexity resulting from each additional sequence in an alignment.",
			"field 7": "Our Approach",
			"field 8": "Humans have evolved to recognize patterns and solve visual problems efficiently. By abstracting multiple sequence alignment to manipulating patterns consisting of coloured shapes, we have adapted the problem to benefit from human capabilities. <br>By taking data which has already been aligned by a heuristic algorithm, we allow the user to optimize where the algorithm may have failed.",
			"field 9": "The Data",
			"field 10": "All alignments were generously made available through UCSC Genome Browser. Infact, all alignments contain sections of human DNA which have been speculated to be linked to various genetic disorders, such as breast cancer. Every alignment is received, analyzed, and stored in a database, where it will eventually be re-introduced back into the global alignment as an optimization.",
			"field 11": "For more information about any one of these topics, click here.",
},
		"credit": {
			"field 1": "Project leaders (Media and scientific contact)",
			"field 2": "Development team",
			"field 3": "Original designers",
			"field 4": "Supported by",
			"field 5": "Follow us on",
			"field 6": "Music",
			"field 7": "Special Thanks",
            "field 8": "Scientific Advisor",
			"field 9": "Translation",
},
		"ranking": {
            "field 1": "All-time",
            "field 2": "Monthly",
            "field 3": "Weekly",
            "field 4": "Username",
            "field 5": "Total",
            "field 6": "1 star",
            "field 7": "2 stars",
            "field 8": "3 stars",
            "field 9": "Your score match the par",
            "field 10": "You beat the par",
            "field 11": "You have the highscore",
            "field 12": "Level ID",
            "field 13": "Difficulty",
            "field 14": "Disease classification",
            "field 15": "Disease",
            "field 16": "Score",
            "field 17": "Click on the level ID to play the puzzle",
            "field 18": "Null",
},
},
	"footer": {
		"field 1": "Phylo is a challenging video game in which every puzzle completed contributes to mapping diseases within human DNA. Learn <a href='?pid=about"+window.location.hash+"'>more</a>.",
		"field 2": "Join the phylo <a href='https://www.facebook.com/groups/127713783941517/'>community</a> on facebook or give us a thumbs up.",
},
},
}];
	var proto = g.prototype,
		attr = [
			["lang",proto.english]
			];
	common.exportSingleton("ENscript",g,attr);
})();