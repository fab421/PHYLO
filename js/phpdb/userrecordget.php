<?php
include './dbConnector.php';
error_reporting(0);

// read disease map (FIXME: normalize the names)
$content = file('diseaseCatalog.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$diseasemap = array();
foreach ($content as $header => $line) {
   list($mycategory,$mydisease) = explode("    ",$line);
   $diseasemap[$mydisease] = $mycategory;
}

//change above to fix path as needed
//note that systemComponents.php will need the correct database information

if($_GET['username']) {
   $username = $_GET['username'];
} else {
  $username = 'guest';
}

$connector = new dbConnector();
$date = date("Y-m-d");

$results = $connector->query("SELECT user,level_id,score,date_submitted FROM alignments WHERE user='$username' ORDER BY user,level_id,score DESC");
$levels = $connector->query("SELECT level_id,difficulty,best_score,original_score,disease_category,disease_link from levels");

// build array with level infos

$myscoretable = array();
while ($myrow = $connector->fetchArray($levels)) {
      $newid = $myrow['level_id'];
      $myscoretable[$newid] = array();
      $myscoretable[$newid]['best'] = $myrow['best_score'];
      $myscoretable[$newid]['original'] = $myrow['original_score'];
      $myscoretable[$newid]['difficulty'] = $myrow['difficulty'];
      if ($myrow['disease_category']) {
         $myscoretable[$newid]['disease_category'] = $myrow['disease_category'];
      } else {
         if (array_key_exists($myrow['disease_link'],$diseasemap)) {
	    $myscoretable[$newid]['disease_category'] = $diseasemap[$myrow['disease_link']];
         } else {
	    $myscoretable[$newid]['disease_category'] = 'N/A';
	 }
      }
      $myscoretable[$newid]['disease_name'] = $myrow['disease_link'];
      $myscoretable[$newid]['score'] = 0;
};
$myscoretable['total'] = array (0,0,0,0);

// compute score

while ($myrow = $connector->fetchArray($results)) {
      $user = $myrow['user'];
      $levelid = $myrow['level_id'];
      $score = $myrow['score'];
      $date = strtotime($myrow['date_submitted']);

      // compute star rating
      $starscore=0;
      if ($score >= $myscoretable[$levelid]['best']) {
      	 $starscore = 3;
      } else {
   	 if ($score > $myscoretable[$levelid]['original']) {
	    $starscore = 2;
	 } else {
            if ($score == $myscoretable[$levelid]['original']) {
               $starscore = 1;
	    }
         }
      }

      // update ranking
      if (array_key_exists($levelid,$myscoretable)) {
	 if ($starscore > $myscoretable[$levelid]['score']) {
	    $myscoretable[$levelid]['score'] = $starscore;
         }
      }
}

switch($_GET['lang']) {
   case 'fr':
   case 'FR':
      $colname1="Identifiant de niveau";
      $colname2="Difficulté";
      $colname3="Classification de maladie";
      $colname4="Maladie";
      $colname5="Score";
      break;
   case 'sp':
   case 'SP':
      $colname1="ID del nivel";
      $colname2="Dificultad";
      $colname3="Clasificación de enfermedad";
      $colname4="Enfermedad";
      $colname5="Puntuación";
      break;
   case 'ru':
   case 'RU':
      $colname1="Номер головоломки";
      $colname2="Уровень сложности";
      $colname3="Классификация болезней";
      $colname4="Болезни";
      $colname5="Баллы";
      break;
   case 'ro':
   case 'RO':
      $colname1="ID Nivel";
      $colname2="Dificultate";
      $colname3="Clasificarea bolilor";
      $colname4="Boală";
      $colname5="Scor";
      break;
   case 'he':
   case 'HE':
      $colname1="אקראי";
      $colname2="דרגת קושי";
      $colname3="סיווג מחלה";
      $colname4="מחלה";
      $colname5="ניקוד";
      break;
   case 'pt':
   case 'PT':
      $colname1="ID do nível";
      $colname2="Dificuldade";
      $colname3="Classificação de doenças";
      $colname4="Doença";
      $colname5="Pontuação";
      break;
   case 'cns':
   case 'CNS':
      $colname1="级别ID";
      $colname2="难度";
      $colname3="疾病分类法";
      $colname4="疾病";
      $colname5="分数";
      break;
   case 'cnt':
   case 'CNT':
      $colname1="級別ID";
      $colname2="難度";
      $colname3="疾病分類法";
      $colname4="疾病";
      $colname5="分數";
      break;
   case 'en':
   case 'EN':
   default:
      $colname1="Level ID";
      $colname2="Difficulty";
      $colname3="Disease classification";
      $colname4="Disease";
      $colname5="Score";
} 
?>
<div id="ranking">
<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed" width="100%">
<thead>
<?
echo "<tr><td></td><td width=\"10%\">" . $colname1 . "</a></td><td width=\"10%\">" . $colname2 . "</td><td>" . $colname3 . "</td><td>" . $colname4 . "</td><td width=\"10%\">" . $colname5 . "</td><td></td></tr>";
?>
</thead>
<tbody>
<?php
foreach ($myscoretable as $levelid => $info) {
   switch ($info['score']) {
      case 1:
         $scoretag="<img class=\"startable\" src=\"img/1star.png\">";
	 break;
      case 2:
         $scoretag="<img class=\"startable\" src=\"img/1star.png\"><img class=\"startable\" src=\"img/1star.png\">";
         break;
      case 3:
         $scoretag="<img class=\"startable\" src=\"img/1star.png\"><img class=\"startable\" src=\"img/1star.png\"><img class=\"startable\" src=\"img/1star.png\">";
         break;
      default:
	$scoretag="";
   }

   if ($info['score']>0) {
      echo "<tr><td>" . $levelid . "</td><td><a href=\"http://phylo.cs.mcgill.ca/v2/index.html#!play&autoStart=" . $levelid . "\">" . $levelid . "</a></td><td>" . $info['difficulty'] . "</td><td>" . $info['disease_category'] . "</td><td>" . $info['disease_name'] . "</td><td>" . $scoretag . "</td><td>" . $info['score'] . "</td></tr>\n";
   }
};
?>
</tbody>
</table>
</div>

