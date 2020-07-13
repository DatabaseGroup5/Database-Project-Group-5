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
                <a href="./Home.html" class="w3-bar-item w3-button w3-mobile w3-black" style="width:23%">Home</a>
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
                <form class="search" action="http://localhost/Team_5/action_page.php" method="get" style="width:23%">
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
        $hostname = "localhost";
        $username = "root";
        $password = "";

        $conn = mysqli_connect($hostname,$username,$password);

        //check connection
        if(!$conn){ die("Connection failed: " . mysqli_connect_error()); }

        //create database
        $sqldb = "CREATE DATABASE IF NOT EXISTS forum";
        $db = mysqli_query($conn, $sqldb);
        #if ($db) { echo "Database created successfully\n"; } 
        #else { echo "Error creating database: " . mysqli_error($conn); }

        //use (select) database
        mysqli_select_db($conn, "forum");

        //create tables
        $forumtopics = "
        CREATE TABLE IF NOT EXISTS forum_topics (
        topic_id int not null primary key auto_increment,
        topic_title varchar (140),
        topic_create_time datetime,
        topic_owner varchar (140)
        );
        ";

        $forumposts = "
        CREATE TABLE IF NOT EXISTS forum_posts (
        post_id int not null primary key auto_increment,
        topic_id int not null,
        post_text text,
        post_create_time datetime,
        post_owner varchar (140)
        );
        ";

        //executing queries above
        $table1 = mysqli_query($conn,$forumtopics);
        $table2 = mysqli_query($conn,$forumposts);
        #if($table1 && $table2){ echo ",Tables created";}
        #else {echo "Error creating database: " . mysqli_error($conn);}

        //close connection
        mysqli_close($conn);
    ?>

    <?php

    //connect to server and select database
        $hostname = "localhost";
        $username = "root";
        $password = "";
        $conn = mysqli_connect($hostname, $username, $password) or die(mysqli_error($conn));
        mysqli_select_db($conn, "forum") or die(mysqli_error($conn));
        
        //gather the topics
        $get_topics = "select topic_id, topic_title, date_format(topic_create_time, '%b %e %Y at %r') as fmt_topic_create_time, topic_owner from forum_topics order by topic_create_time desc
                ";
        $get_topics_res = mysqli_query($conn,$get_topics) or die(mysqli_error($conn));
        if (mysqli_num_rows($get_topics_res) < 1) {
           //there are no topics, so say so
           $display_block = "<P><em>No topics exist.</em></p>";
        } 
        else {
           //create the display string
           $display_block = "
           <table cellpadding=3 cellspacing=1 border=1>
           <tr>
           <th>TOPIC TITLE</th>
           <th># of POSTS</th>
           </tr>";
            
            $inc = 1;   //count iteration for posts' numbers

            while ($topic_info = mysqli_fetch_array($get_topics_res)) {
               $topic_id = $topic_info['topic_id'];
               $topic_title = stripslashes($topic_info['topic_title']);
               $topic_create_time = $topic_info['fmt_topic_create_time'];
               $topic_owner = stripslashes($topic_info['topic_owner']);
        
               //get number of posts
               $get_num_posts = "select count(post_id) from forum_posts
                    where topic_id = $topic_id";
               $get_num_posts_res = mysqli_query($conn,$get_num_posts) or die(mysqli_error($conn));
               //$cnt = 'count(post_id)';
              // $num_posts = mysqli_result($get_num_posts_res,0,'count(post_id)');
               $num_posts_assoc = mysqli_fetch_row($get_num_posts_res);
               $num_posts = $num_posts_assoc[0];
               //echo "$num_posts"; //ganti
               
               //add to display
               $display_block .= "
               <tr>
               <td><a href=\"showtopic.php?topic_id=$topic_id\">
               <strong>$topic_title</strong></a><br>
               Created on $topic_create_time by $topic_owner</td>
               <td align=center>$num_posts</td>
               </tr>";

           }
           //close up the table
           $display_block .= "</table>";
        }

    ?>

    <html>
    <head>
    <title>Topics in My Forum</title>
    </head>
    <body>
    <h1 style="text-align: center;">Topics in My Forum</h1>
    <?php print $display_block; ?>
    <P>Would you like to <a href="addtopic.php">add a topic</a>?</p>
    </body>
    </html>
                    
<!-- ________________________________________________________________________________-->
           
           </body>
        </tr>
     </table>
</body>
</html>
