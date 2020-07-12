<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        * {
            box-sizing: border-box;
        }

        form.search input[type=text] {
            padding: 10px;
            font-size: 17px;
            border: 1px solid grey;
            float: left;
            width: 80%;
            background: #f1f1f1;
        }

        form.search button {
            float: left;
            width: 20%;
            padding: 10px;
            background: #2196F3;
            color: white;
            font-size: 17px;
            border: 1px solid grey;
            border-left: none;
            cursor: pointer;
        }

        form.search button:hover {
            background: #0b7dda;
        }

    </style>
</head>

<body>
    <table>
        <tr>
            <div class="w3-bar w3-black">
                <a href="#" class="w3-bar-item w3-button w3-mobile w3-black" style="width:23%">Home</a>
                <div class="w3-dropdown-hover w3-black" style="width:23%">
                    <div class="w3-dropdown-hover" style="width:23%">
                        <button class="w3-button w3-mobile w3-black" style="width:440%">Countries</button>
                        <!--COUNTRIES DROPDOWN-->
                        <div class="w3-dropdown-content w3-bar-block w3-card-4" style="width: 100%">
                            <div class='w3-col l3 m6'>
                                <h3>North America</h3>
                                    <a class="w3-bar-item w3-button" href='./Countries/UnitedStates.html'>United States</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Canada.html'>Canada</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Mexico.html'>Mexico</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/AntiguaandBarbuda.html'>Antigua and Barbuda</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Bahamas.html'>Bahamas</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Barbados.html'>Barbados</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Belize.html'>Belize</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/CostaRica.html'>Costa Rica</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Cuba.html'>Cuba</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Dominica.html'>Dominica</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/DominicanRepublic.html'>Dominican Republic</a>          
                                    <a class="w3-bar-item w3-button" href='./Countries/ElSalvador'>El Salvador</a> 
                                    <a class="w3-bar-item w3-button" href='./Countries/Grenada'>Grenada</a> 
                                    <a class="w3-bar-item w3-button" href='./Countries/Guatemala'>Guatemala</a> 
                                    <a class="w3-bar-item w3-button" href='./Countries/Haiti'>Haiti</a> 
                                    <a class="w3-bar-item w3-button" href='./Countries/Honduras'>Honduras</a> 
                                    <a class="w3-bar-item w3-button" href='./Countries/Jamaica'>Jamaica</a> 
                                    <a class="w3-bar-item w3-button" href='./Countries/Nicaragua'>Nicaragua</a> 
                                    <a class="w3-bar-item w3-button" href='./Countries/Panama'>Panama</a> 
                                    <a class="w3-bar-item w3-button" href='./Countries/SaintKittsandNevis'>Saint Kitts and Nevis</a> 
                                    <a class="w3-bar-item w3-button" href='./Countries/SaintVincentandTheGrenadines'>Saint Vincent and the Grenadines</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/SaintLucia'>Saint Lucia</a> 
                                    <a class="w3-bar-item w3-button" href='./Countries/TrinidadandTobago'>Trinidad and Tobago</a> 

                                    <div class="w3-hide-large w3-hide-small">
                                      <h3>South America</h3>
                                      <a class="w3-bar-item w3-button" href='./Countries/Argentina'>Argentina</a>
                                      <a class="w3-bar-item w3-button" href='./Countries/Bolivia'>Bolivia</a>
                                      <a class="w3-bar-item w3-button" href="./Countries/Brazil">Brazil</a>
                                      <a class="w3-bar-item w3-button" href='./Countries/Chile'>Chile</a>
                                      <a class="w3-bar-item w3-button" href='./Countries/Colombia'>Colombia</a>
                                      <a class="w3-bar-item w3-button" href='./Countries/Ecuador'>Ecuador</a>
                                      <a class="w3-bar-item w3-button" href='./Countries/FrenchGuiana'>French Guiana</a>
                                      <a class="w3-bar-item w3-button" href='./Countries/Guyana'>Guyana</a>
                                      <a class="w3-bar-item w3-button" href='./Countries/Paraguay'>Paraguay</a>
                                      <a class="w3-bar-item w3-button" href="./Countries/Peru">Peru</a>
                                      <a class="w3-bar-item w3-button" href='./Countries/Suriname'>Suriname</a>
                                      <a class="w3-bar-item w3-button" href='./Countries/Uruguay'>Uruguay</a>
                                      <a class="w3-bar-item w3-button" href="./Countries/Venezuela">Venezuela</a>
                                  </div>
                                <div class='w3-col l3 m6'>
                                    <h3>Australia/Oceania</h3>
                                    <a class="w3-bar-item w3-button" href='/Countries/Australia'>Australia</a>
                                    <a class="w3-bar-item w3-button" href='/Countries/Fiji'>Fiji</a>
                                    <a class="w3-bar-item w3-button" href='/Countries/NewZealand'>New Zealand</a>
                                    <a class="w3-bar-item w3-button" href='/Countries/PapuaNewGuinea'>Papua New Guinea</a>
                                    <h3>Africa</h3>
                                    <a class="w3-bar-item w3-button" href='./Countries/Algeria.html'>Algeria</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Angola.html'>Angola</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Benin.html'>Benin</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Botswana.html'>Botswana</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/BurkinaFaso.html'>Burkina Faso</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Burundi.html'>Burundi</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Cameroon.html'>Cameroon</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/CaboVerde.html'>Cabo Verde</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/CentralAfricanRepublic.html'>Central African Republic</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Chad.html'>Chad</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Comoros.html'>Comoros</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/CongoBraszzaville.html'>Congo (Braszzaville)</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/CongoKinshasa.html'>Congo (Kinshasa)</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Dijibouti.html'>Dijibouti</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Egypt.html'>Egypt</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/EquatorialGuinea.html'>Equatorial Guinea</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Eritrea.html'>Eritrea</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Ethiopia.html'>Ethiopia</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Gabon.html'>Gabon</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Gambia.html'>Gambia</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Ghana.html'>Ghana</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/GuineaBissau.html'>Guinea-Bissau</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Kenya.html'>Kenya</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Lesotho.html'>Lesotho</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Liberia.html'>Liberia</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Libya.html'>Libya</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Madagascar.html'>Madagascar</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Malawi.html'>Malawi</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Mali.html'>Mali</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Mauritania.html'>Mauritania</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Mauritius.html'>Mauritius</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Morocco.html'>Morocco</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Mozambique.html'>Mozambique</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Namibia.html'>Namibia</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Niger.html'>Niger</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Nigeria.html'>Nigeria</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Rwanda.html'>Rwanda</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/SaoTomeAndPrincipe.html'>Sao Tome and Principe</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Senegal.html'>Senegal</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Seychelles.html'>Seychelles</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/SierraLeone.html'>Sierra Leone</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Somalia.html'>Somalia</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/SouthAfrica.html'>South Africa</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/SouthSudan.html'>South Sudan</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Sudan.html'>Sudan</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Tanzania.html'>Tanzania</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Togo.html'>Togo</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Tunisia.html'>Tunisia</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Uganda.html'>Uganda</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/WesternSahara.html'>Western Sahara</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Zambia.html'>Zambia</a>
                                    <a class="w3-bar-item w3-button" href='./Countries/Zimbabwe.html'>Zimbabwe</a>
                                </div>
                            </div>
                            <div class='w3-col l3 m6'>
                                <h3>Europe</h3>
                                <a class="w3-bar-item w3-button" href='./Countries/UnitedKingdom.html'>United Kingdom</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Albania.html'>Albania</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Andorra.html">Andorra</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Austria.html'>Austria</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Belarus.html'>Belarus</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Belgium.html">Belgium</a>
                                <a class="w3-bar-item w3-button" href=./Countries/BosniaandHerzegovina.html'>Bosnia and Herzegovina</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Bulgaria.html'>Bulgaria</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Croatia.html">Croatia (Hrvatska)</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Cyprus.html'>Cyprus</a>
                                <a class="w3-bar-item w3-button" href='./Countries/CzechRepublic.html'>Czech Republic</a>
                                <a class="w3-bar-item w3-button" href="./Countries/France.html">France</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Germany.html'>Germany</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Greece.html">Greece</a>
                                <a class="w3-bar-item w3-button" href='./Countries/HolySee.html'>Holy See (Vatican City State)</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Hungary.html'>Hungary</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Italy.html">Italy</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Liechtenstein.html'>Liechtenstein</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Luxembourg.html'>Luxembourg</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Malta.html'>Malta</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Moldova.html'>Moldova</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Monaco.html">Monaco</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Montenegro.html'>Montenegro</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Netherlands.html'>Netherlands</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Poland.html">Poland</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Portugal.html'>Portugal</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Romania.html'>Romania</a>
                                <a class="w3-bar-item w3-button" href="./Countries/SanMarino.html">San Marino</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Serbia.html'>Serbia</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Slovakia.html'>Slovakia</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Slovenia.html">Slovenia</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Spain.html'>Spain</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Ukraine.html'>Ukraine</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Denmark.html">Denmark</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Estonia.html'>Estonia</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Finland.html">Finland</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Greenland.html'>Greenland</a>
                                <a class="w3-bar-item w3-button" href='./Countries/UnitedStates.html'>Iceland</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Ireland.html">Ireland</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Latvia.html'>Latvia</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Lithuania.html'>Lithuania</a>
                                <a class="w3-bar-item w3-button" href="./Countries/Norway.html">Norway</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Sweden.html'>Sweden</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Turkey.html'>Turkey</a>
                            </div>
                            <div class='w3-col l3 m6'>
                                <h3>Asia</h3>
                                <a class="w3-bar-item w3-button" href='/Countries/Afghanistan'>Afghanistan</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Armenia'>Armenia</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Azerbaijan'>Azerbaijan</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Bahrain'>Bahrain</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Bangladesh'>Bangladesh</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Bhutan'>Bhutan</a>
                                <a class="w3-bar-item w3-button" href='/Countries/BruneiDarussalam'>Brunei Darussalam</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Cambodia'>Cambodia</a>
                                <a class="w3-bar-item w3-button" href='/Countries/China'>China</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Georgia'>Georgia</a>
                                <a class="w3-bar-item w3-button" href='/Countries/India'>India</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Indonesia'>Indonesia</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Iran'>Iran</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Iraq'>Iraq</a>
                                <a class="w3-bar-item w3-button" href='/Countries/Israel'>Israel</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Japan.html'>Japan</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Jordan.html'>Jordan</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Kazakhstan.html'>Kazakhstan</a>
                                <a class="w3-bar-item w3-button" href='./Countries/SouthKorea.html'>South Korea</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Kuwait.html'>Kuwait</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Laos.html'>Laos</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Lebanon.html'>Lebanon</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Malaysia.html'>Malaysia</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Maldives.html'>Maldives</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Mongolia.html'>Mongolia</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Burma.html'>Myanmar (Burma)</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Nepal.html'>Nepal</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Oman.html'>Oman</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Pakistan.html'>Pakistan</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Phillipines.html'>Philippines</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Qatar.html'>Qatar</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Russia.html'>Russia</a>
                                <a class="w3-bar-item w3-button" href='./Countries/SaudiArabia.html'>Saudi Arabia</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Singapore.html'>Singapore</a>
                                <a class="w3-bar-item w3-button" href='./Countries/SriLanka.html'>Sri Lanka</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Syria.html'>Syria</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Taiwan.html'>Taiwan</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Tajikistan.html'>Tajikistan</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Thailand.html'>Thailand</a>
                                <a class="w3-bar-item w3-button" href='./Countries/TimorLeste.html'>TimorLeste</a>                        
                                <a class="w3-bar-item w3-button" href='./Countries/UnitedArabEmirates.html'>United Arab Emirates</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Uzbekistan.html'>Uzbekistan</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Vietnam.html'>Vietnam</a>
                                <a class="w3-bar-item w3-button" href='./Countries/Yemen.html'>Yemen</a>
                            </div>

                        </div>

                    </div>
                </div>
                <a href="#" class="w3-bar-item w3-button w3-mobile w3-black" style="width:23%">List</a>
                <form class="search" action="http://localhost:4000/Team_5/action_page.php" method="get" style="width:23%">
                    <input type="text" placeholder="Search.." name="search" style="width:23%" class="w3-bar-item w3-input">
                    <button type="submit" class="w3-button w3-black" style="width:8%"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </tr> 
        <tr>    <!-- FORUM -->
            
            <head>
                <h1 class="h3"> Forum </h1>
                <h6> Discuss COVID-19. </h6>
                <hr style="width:100%;text-align:left;margin-left:30;border: 1px solid black">
            </head>
            <body>
     <!-- ___________________________forum_____________________________________________-->
 <?php
 //check for required info from the query string
 if (!$_GET['topic_id']) {
    header("Location: topiclist.php"); 
    exit;
 }
 
 //connect to server and select database
 $conn = mysqli_connect("localhost", "root", "") or die(mysqli_error($conn));
 mysqli_select_db($conn, "forum") or die(mysqli_error($conn));
 
 //verify the topic exists
 $verify_topic = "select topic_title from forum_topics where topic_id = $_GET[topic_id]";
 $verify_topic_res = mysqli_query($conn, $verify_topic) or die(mysqli_error($conn));

 if (mysqli_num_rows($verify_topic_res) < 1) {
     //this topic does not exist
    $display_block = "<P><em>You have selected an invalid topic.
     Please <a href=\"topiclist.php\">try again</a>.</em></p>";
 } else {
     //get the topic title
    $topic_titlee = mysqli_fetch_row($verify_topic_res);
    $topic_title = stripslashes($topic_titlee[0]);
 
    //gather the posts
    $get_posts = "select post_id, post_text, date_format(post_create_time,
         '%b %e %Y at %r') as fmt_post_create_time, post_owner from
         forum_posts where topic_id = $_GET[topic_id]
         order by post_create_time asc";
 
    $get_posts_res = mysqli_query($conn,$get_posts) or die(mysqli_error($conn));
 
    //create the display string
    $display_block = "
    <P>Showing posts for the <strong>$topic_title</strong> topic:</p>   
 
    <table width=100% cellpadding=3 cellspacing=1 border=1>
    <tr>
    <th>AUTHOR</th>
    <th>POST</th>
    </tr>";
 
    while ($posts_info = mysqli_fetch_array($get_posts_res)) {
        $post_id = $posts_info['post_id'];
        $post_text = nl2br(stripslashes($posts_info['post_text']));
        $post_create_time = $posts_info['fmt_post_create_time'];
        $post_owner = stripslashes($posts_info['post_owner']);
 
        //add to display
        $display_block .= "
        <tr>
        <td width=35% valign=top>$post_owner<br>[$post_create_time]</td>
        <td width=65% valign=top>$post_text<br><br>
         <a href=\"replytopost.php?post_id=$post_id\"><strong>REPLY TO
         POST</strong></a></td>
        </tr>";
    }
 
    //close up the table
    $display_block .= "</table>";
 }

 ?>

 <html>
     <head>
         <title>Posts in Topic</title>
     </head>
     <body>
         <h1>Posts in Topic</h1>
         <?php print $display_block; ?>
         <a href="topiclist.php"> Back to topic list? </a>
     </body>
 </html>
                    
<!-- ________________________________________________________________________________-->
           
           </body>
        </tr>
     </table>
</body>
</html>
