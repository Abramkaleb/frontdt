console.log ("OK")


const endpoint = 

    require_once('lib/Antares.php');

	$PLATFORM_URL = 'https://platform.antares.id:8443';
	$ACCESS_KEY = '5fe73ec991d0d8bb:4bd2da90a6b504c5';
	$DEVICE_URI = '/antares-cse/antares-id/Digital-Twin/LoRa';

	Antares::init([
		"PLATFORM_URL" => $PLATFORM_URL, // TODO: Change this to your platform URL
		"ACCESS_KEY" => $ACCESS_KEY // TODO: Change this to your access key
	]);
	
    /* Database connection settings */
    $servername = "localhost";
    $username = "labandroid_digitaltwin";
    $password = "digitaltwinPwd";
    $dbname = "labandroid_digitaltwin";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Database Connection failed: " . $conn->connect_error);
    }
    
}
  export default Dashboard