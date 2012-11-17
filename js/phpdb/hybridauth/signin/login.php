<?php 

    // configure debugging
    //ini_set('display_errors', 'On');
    //error_reporting(E_ALL | E_STRICT);

    // start a new session (required for Hybridauth)
    session_start();

    $config_file_path = "/home/mcb/phylo/public_html/phpdb/hybridauth/hybridauth/config.php"; 
    
    require_once( "/home/mcb/phylo/public_html/phpdb/hybridauth/hybridauth/Hybrid/Auth.php" );

    // get the selected provider
    $provider_name = $_GET["provider"];
    if (isset($_GET['restart'])) {
        if ($_GET['restart'] === '1' || $_GET['restart'] === '0') {
	        $restart_flag = (bool) $_GET['restart'];
    	}
    } else {
      $restart_flag==False;
    }
  
    try{
       // initialize Hybrid_Auth with a given file

       try {
       	   $hybridauth = new Hybrid_Auth( $config_file_path );
       }
       catch( Exception $e ){
       	   $message = "";
           switch( $e->getCode() ){
              case 0 : $message = "Unspecified error."; break;
              case 1 : $message = "Hybridauth configuration error."; break;
              case 2 : $message = "Provider not properly configured."; break;
              case 3 : $message = "Unknown or disabled provider."; break;
              case 4 : $message = "Missing provider application credentials."; break;
              case 5 : $message = "Authentification failed. The user has canceled the authentication or the provider refused the connection."; break;
              default: $message = "Unspecified error!";
          }
	  return;
       }

       // try to authenticate with the selected provider
       $adapter = $hybridauth->authenticate( $provider_name );

       // then grab the user profile 
       $user_profile = $adapter->getUserProfile();
 
       if ($restart_flag) {
          $username = $provider_name . "_" . $user_profile->identifier;
          setcookie("username",$username,time()+3600*24*365,"/");
          setcookie("fullname",$user_profile->displayName,time()+3600*24*365,"/");
          setcookie("logid",$user_profile->identifier,time()+3600*24*365,"/");
          setcookie("loginmode",$provider_name,time()+3600*24*365,"/");
	  echo "<script>";
	  echo "if (window.opener != null) { window.opener.guest = \"" . $username . "\"; };";
	  echo "window.opener.location.reload();";
	  echo "window.close()";
	  echo "</script>";
       } else { 
	 echo json_encode($user_profile);
       }
   }
   catch( Exception $e ){
       echo "Error: please try again!";
       echo "Original error message: " . $e->getMessage();
   }


?>