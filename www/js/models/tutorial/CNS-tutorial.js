{ 
		"tutorial": {
            "basics": {
                "1": "基本规则和技巧。",
                "2": "在Phylo中，你的目标是水平移动方砖，让方砖的颜色在垂直方向上尽量的相似。每一个匹配将带来加分。",
                "3": "然而，序列并不相同。因此，颜色错配/插空不可避免，它们会带来一些罚分。你的挑战是找到最低代价的方案，在加分与罚分中取得平衡。",
                "4": "加分与罚分相对插空而言是次要的！而零散的插空比连续的罚分更多。优先减少插空的数量吧",
                "5": "你注意到左边的树了吗？它告诉你需要序列解决的次序。它能让你循序渐渐。获得相同组内保守的模式比增加不同组间的相似性更重要。",
                "6": "为了到达最后的挑战，你需要过关斩将。这需要冲击标杆（计算机的分数）。当你的分数达到/超过标杆时，一颗闪闪的星星将在右下角出现。点击它吧，你过关了。当所有的序列都出现的时候，尝试获得更高的分数，点击星星，将提交你的成果。",
                "7": "Basic information are available at the bottom right corner of your game board. There, you will find your current score, the par (i.e. the computer score to beat), your advancement in the game (i.e. stages) and the best score you obtained so far. You can revert at anytime to the best solution you found by clicking the multi-color wheel. Above you also see your timer and the time left to finish the puzzle."
            },
            "scoring": {
		"1": "Advanced: Scoring.",
		"2": "Each node of the phylogenetic tree stores an ancestor sequence. Ancestors are computed automatically and represent a consensus of all sequences derived from it. Point at any node of the tree to display the corresponding sequence at the botton of the grid. By default, we display the ancestor at the root of the tree",
		"3": "The alignment score estimates the similarity between a sequence and its ancestor. A color match brings you a bonus of +1 and a color mismatch costs you a penalty of -1. The creation of a gap has a penalty of -5 and its extension by one unit costs -1. Here, the alignment score between the sequence of the bat and its ancestor is -4 (12 matches, 5 mistmatches, 1 gap of length 1 and 1 gap of length 2).",
		"4": "Your score is the sum of the alignment scores of each sequences with their immediate ancestor. Here, the score is the sum of the comparisons between the ancestor of B with human and chimp, the ancestor C with dog and bat, and the ancestor A with B and C."
            },
            "example": {
		"1": "Getting ready: An example.",
		"2": "You are starting with two sequences (human and chimp). Push everything on the left and check out the ancestor. Aligning this ancestor with your two sequences gives you 13 matches for the first sequence (human), and 5 matches, 1 mismatches, and one gap of length 7 for the second sequence (chimp). Thus a total of 18 × (+1) + 1 × (‐1) + (‐5 + 6 × (‐1)) = 6. You beat the par. Click on the star and jump to the next stage!",
		"3": "Two new sequences (dog and bat) appear. Again, push them all to the left. Your score is 4. 18 matches and 1 gap of length 1 between the dog's sequence and its ancestor, and 5 matches and 14 mismatches between the bat sequence and the same ancestor (Thus a total of 23 × (+1) + 14 × (‐1) + (‐5) = 4). You can do better. How?",
		"4": "Shift the bottom sequence of one unit to the left starting from the seventh block. You create an additional gap but you also create many matches. Did you notice? the ancestor changed. You have now 18 matches and 1 gap of length 2 with the dog's sequence, and 12 matches, 7 mismatches and 1 gap of length 1 with the bat's sequence. Your score is 30 × (+1) + 7 × (‐1) + ( 2 × ‐5 + 1 × (-1)) = 12. Move to the next stage.",
		"5": "Now, you have to assemble your previous alignments. Your initial score is 14. It does not beat the par (19)… Intuitively, we want to find a better alignment of the 1st block (the two top sequences) and the 2nd block (the two lower sequences). How?",
		"6": "Shift the first block by 4 units to the right. This move creates two complete green columns. It also improve the similarity between the human's sequence and those of the dog and the bat. Your total score is now 26. How is it calculated?",
		"7": "Lets have a look at the human and chimp ancestor. Its alignment score with the human sequence is 11 (12 matches and 1 mismatch), and -5 with the chimp sequence (6 matches and 1 gap of length 7). Thus the score at this ancestor node is 11 + (-5) = 6.",
		"8": "We do the same thing for the dog and bat ancestor. Its alignment score with the dog sequence is 14 (16 matches and 2 mismatches) and -4 with the bat sequence (12 matches, 5 mismatches, 1 gap of length 1, and 1 gap of length 2). Thus, the score at this ancestor node is 14 + (-4) = 10",
		"9": "To complete your score, you need to compute the alignment score of the human/chimp ancestor and dog/bat ancestor with the ancestor at the root of the tree. First, we compute the alignment score of the human/chimp ancestor with the global ancestor. There is 9 matches, 4 mismatches, 1 gap of length 4 and 1 gap of length 4. The score is 9 × (+1) + 4 × (‐1) + ( 2 × ‐5 + 3 × (-1)) = -8.",
		"10": "Then, we compute the alignment score of the dog/bat ancestor with the global ancestor. There is 18 matches and the score is 18. Therefore, the score associated with the root is (-8) + 18 = 10.",
		"11": "Your final score is the sum of all individual scores previously computed. It is summarized in the tree, where each node is labelled with the score of the alignment of its descendants. Here, the score of the alignment of human and chimp is 6, the score  of the alignment of dog and bat is 10, the score of the alignment of ancestors with the root is 10. Thus, your total score is 26 and it is displayed at the root of the tree.",
		"12": "You have the highest score. Click the star and submit your puzzle. You are done! The level id for this puzzle is 3847. Now, you are ready to play!"
            },
            "misc": {
		"1": "匹配",
		"2": "错配",
		"3": "插空",
		"4": "进化树"
            }

        }
    
    }


