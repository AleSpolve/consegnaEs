var player1;
var palyer2;

var grid=[6,12,18,24,30,36,42,
          5,11,17,23,29,35,41,
          4,10,16,22,28,34,40,
          3,9,15,21,27,33,39,
          2,8,14,20,26,32,38,
          1,7,13,19,25,31,37]; 

var turnoGiocatori=false;


function turno(){

    if (turnoGiocatori == true) {
        turnoGiocatori = false;
    } else {
        turnoGiocatori = true;
    }

    if (turnoGiocatori == true) {
        document.getElementById("player1");
        document.getElementById("player2");
    } else {
        document.getElementById("player2");
        document.getElementById("player1");
    }

    return turnoGiocatori; 
}

function pareggio() {
    var conteggio = 0;
    for (var i = 0; i < 42; i++) {
        if (grid[i] == "X" || grid[i] == "O") {
            conteggio++;
        }
    }
    if (conteggio == 42) {
        document.getElementById("scrittaWin").innerHTML = "pareggio";
    }
}


function vincitore(pos) {

    if (grid[pos] == "X") {
        document.getElementById("scrittaWin").innerHTML = "giocatore x hai vinto";
    } else if (grid[pos] == "O") {
        document.getElementById("scrittaWin").innerHTML = "giocatore o hai vinto";
    }
}


function esito() {
    //controlli orizzontali

    if (grid[6] == grid[12] && grid[6] == grid[18] && grid[6]==grid[24]) { 
        vincitore(6);
    } 
    else if (grid[12] == grid[18] && grid[12] == grid[24] && grid[12]==grid[30]) { 
        vincitore(12);
    } 
    else if (grid[18] == grid[24] && grid[18] == grid[30] && grid[18]==grid[36]) { 
        vincitore(18);
    } 
    else if (grid[24] == grid[30] && grid[24] == grid[36] && grid[24]==grid[42]) { 
        vincitore(24);
    } 
    else if (grid[5] == grid[11] && grid[5] == grid[17] && grid[5]==grid[23]) { 
        vincitore(5);
    } 
    else if (grid[11] == grid[17] && grid[11] == grid[23] && grid[11]==grid[29]) { 
        vincitore(11);
    } 
    else if (grid[17] == grid[23] && grid[17] == grid[29] && grid[17]==grid[35]) { 
        vincitore(17);
    } 
    else if (grid[23] == grid[29] && grid[23] == grid[35] && grid[23]==grid[41]) { 
        vincitore(23);
    } 
    else if (grid[4] == grid[10] && grid[4] == grid[16] && grid[4]==grid[22]) { 
        vincitore(4);
    } 
    else if (grid[10] == grid[16] && grid[10] == grid[22] && grid[10]==grid[28]) { 
        vincitore(10);
    } 
    else if (grid[16] == grid[22] && grid[16] == grid[28] && grid[16]==grid[34]) { 
        vincitore(16);
    } 
    else if (grid[22] == grid[28] && grid[22] == grid[34] && grid[22]==grid[40]) { 
        vincitore(22);
    } 
    else if (grid[3] == grid[9] && grid[3] == grid[15] && grid[3]==grid[21]) { 
        vincitore(3);
    } 
    else if (grid[9] == grid[15] && grid[9] == grid[21] && grid[9]==grid[27]) { 
        vincitore(9);
    } 
    else if (grid[15] == grid[21] && grid[15] == grid[27] && grid[15]==grid[33]) { 
        vincitore(15);
    } 
    else if (grid[21] == grid[27] && grid[21] == grid[33] && grid[21]==grid[39]) { 
        vincitore(21);
    } 
    else if (grid[2] == grid[8] && grid[2] == grid[14] && grid[2]==grid[20]) { 
        vincitore(2);
    } 
    else if (grid[8] == grid[14] && grid[8] == grid[20] && grid[8]==grid[26]) { 
        vincitore(8);
    } 
    else if (grid[14] == grid[20] && grid[14] == grid[26] && grid[14]==grid[32]) { 
        vincitore(14);
    } 
    else if (grid[20] == grid[26] && grid[20] == grid[32] && grid[20]==grid[38]) { 
        vincitore(20);
    } 
    else if (grid[1] == grid[7] && grid[1] == grid[13] && grid[1]==grid[19]) { 
        vincitore(1);
    } 
    else if (grid[7] == grid[13] && grid[7] == grid[19] && grid[7]==grid[25]) { 
        vincitore(7);
    } 
    else if (grid[13] == grid[19] && grid[13] == grid[25] && grid[13]==grid[31]) { 
        vincitore(13);
    } 
    else if (grid[19] == grid[25] && grid[19] == grid[31] && grid[19]==grid[37]) { 
        vincitore(19);
    }        
    
    //controlli verticali    
    
    else if (grid[6] == grid[5] && grid[6] == grid[4] && grid[6]==grid[3]) { 
        vincitore(6);
    } 
    else if (grid[5] == grid[4] && grid[5] == grid[3] && grid[5]==grid[2]) { 
        vincitore(5);
    } 
    else if (grid[4] == grid[3] && grid[4] == grid[2] && grid[4]==grid[1]) { 
        vincitore(4);
    } 
    else if (grid[12] == grid[11] && grid[12] == grid[10] && grid[12]==grid[9]) { 
        vincitore(12);
    } 
    else if (grid[11] == grid[10] && grid[11] == grid[9] && grid[11]==grid[8]) { 
        vincitore(11);
    } 
    else if (grid[10] == grid[9] && grid[10] == grid[8] && grid[10]==grid[7]) { 
        vincitore(10);
    } 
    else if (grid[18] == grid[17] && grid[18] == grid[16] && grid[18]==grid[15]) { 
        vincitore(18);
    }
    else if (grid[17] == grid[16] && grid[17] == grid[15] && grid[17]==grid[14]) { 
        vincitore(17);
    } 
    else if (grid[16] == grid[15] && grid[16] == grid[14] && grid[16]==grid[13]) { 
        vincitore(16);
    } 
    else if (grid[24] == grid[23] && grid[24] == grid[22] && grid[24]==grid[21]) { 
        vincitore(24);
    } 
    else if (grid[23] == grid[22] && grid[23] == grid[21] && grid[23]==grid[20]) { 
        vincitore(23);
    } 
    else if (grid[22] == grid[21] && grid[22] == grid[20] && grid[22]==grid[19]) { 
        vincitore(22);
    } 
    else if (grid[30] == grid[29] && grid[30] == grid[28] && grid[30]==grid[27]) { 
        vincitore(30);
    } 
    else if (grid[29] == grid[28] && grid[29] == grid[27] && grid[29]==grid[26]) { 
        vincitore(29);
    } 
    else if (grid[28] == grid[27] && grid[28] == grid[26] && grid[28]==grid[25]) { 
        vincitore(28);
    }
    else if (grid[36] == grid[35] && grid[36] == grid[34] && grid[36]==grid[33]) { 
        vincitore(36);
    } 
    else if (grid[35] == grid[34] && grid[35] == grid[33] && grid[35]==grid[32]) { 
        vincitore(35);
    } 
    else if (grid[34] == grid[33] && grid[34] == grid[32] && grid[34]==grid[31]) { 
        vincitore(34);
    } 
    else if (grid[42] == grid[41] && grid[42] == grid[40] && grid[42]==grid[39]) { 
        vincitore(42);
    } 
    else if (grid[41] == grid[40] && grid[41] == grid[39] && grid[41]==grid[38]) { 
        vincitore(41);
    } 
    else if (grid[40] == grid[39] && grid[40] == grid[38] && grid[40]==grid[37]) { 
        vincitore(40);
    }                                                                              

    //controlli obliqui

    else if (grid[6] == grid[11] && grid[6] == grid[16] && grid[6]==grid[21]) { 
        vincitore(6);
    }       
    else if (grid[11] == grid[16] && grid[11] == grid[21] && grid[11]==grid[26]) { 
        vincitore(11);
    }       
    else if (grid[16] == grid[21] && grid[16] == grid[26] && grid[16]==grid[31]) { 
        vincitore(16);
    } 
    else if (grid[5] == grid[10] && grid[5] == grid[15] && grid[5]==grid[20]) { 
        vincitore(5);
    }       
    else if (grid[10] == grid[15] && grid[10] == grid[20] && grid[10]==grid[25]) { 
        vincitore(10);
    }       
    else if (grid[4] == grid[9] && grid[4] == grid[14] && grid[4]==grid[19]) { 
        vincitore(4);
    }  
    else if (grid[12] == grid[17] && grid[12] == grid[22] && grid[12]==grid[27]) { 
        vincitore(12);
    }     
    else if (grid[17] == grid[22]&& grid[17] == grid[27] && grid[17]==grid[32]) { 
        vincitore(17);
    }
    else if (grid[22] == grid[27]&& grid[22] == grid[32] && grid[22]==grid[37]) { 
        vincitore(22);
    }
    else if (grid[18] == grid[23] && grid[18] == grid[28] && grid[18]==grid[33]) { 
        vincitore(18);
    }   
    else if (grid[23] == grid[28] && grid[23] == grid[33] && grid[23]==grid[38]) { 
        vincitore(23);
    }   
    else if (grid[24] == grid[29] && grid[24] == grid[34] && grid[24]==grid[39]) { 
        vincitore(24);
    }   

    else {
        pareggio();
    }
}

function controlloPosizione(pos) {

    if (grid[pos] == "X" || grid[pos] == "O") {
        return true;
    }
    return false;
}

function premi1Colonna(){
    
    if (controlloPosizione(1) == false) {

        if (turnoGiocatori == true) {
            document.getElementById("cella36").style.color = "#008000";
            document.getElementById("cella36").innerHTML = "X";
            grid[1] = "X";
            esito();
        } else {
            document.getElementById("cella36").style.color = " #8f00ff ";
            document.getElementById("cella36").innerHTML = "O";
            grid[1] = "O";
            esito();
        }
        
        turno();


    }
    
}

function premi2Colonna(){
    if (controlloPosizione(7) == false) {

        if (turnoGiocatori == true) {
            document.getElementById("cella37").style.color = "#008000";
            document.getElementById("cella37").innerHTML = "X";
            grid[7] = "X";
            esito();
        } else {
            document.getElementById("cella37").style.color = " #8f00ff ";
            document.getElementById("cella37").innerHTML = "O";
            grid[7] = "O";
            esito();
        }
        
        turno();


    }
   
}

function premi3Colonna(){
    if (controlloPosizione(13) == false) {

        if (turnoGiocatori == true) {
            document.getElementById("cella38").style.color = "#008000";
            document.getElementById("cella38").innerHTML = "X";
            grid[13] = "X";
            esito();
        } else {
            document.getElementById("cella38").style.color = " #8f00ff ";
            document.getElementById("cella38").innerHTML = "O";
            grid[13] = "O";
            esito();
        }
        
        turno();


    }
   
}

function premi4Colonna(){
    if (controlloPosizione(19) == false) {

        if (turnoGiocatori == true) {
            document.getElementById("cella39").style.color = "#008000";
            document.getElementById("cella39").innerHTML = "X";
            grid[19] = "X";
            esito();
        } else {
            document.getElementById("cella39").style.color = " #8f00ff ";
            document.getElementById("cella39").innerHTML = "O";
            grid[19] = "O";
            esito();
        }
        
        turno();


    }
   
   
}

function premi5Colonna(){
    if (controlloPosizione(25) == false) {

        if (turnoGiocatori == true) {
            document.getElementById("cella40").style.color = "#008000";
            document.getElementById("cella40").innerHTML = "X";
            grid[25] = "X";
            esito();
        } else {
            document.getElementById("cella40").style.color = " #8f00ff ";
            document.getElementById("cella40").innerHTML = "O";
            grid[25] = "O";
            esito();
        }
        
        turno();


    }
   
   
}

function premi6Colonna(){
    if (controlloPosizione(31) == false) {

        if (turnoGiocatori == true) {
            document.getElementById("cella41").style.color = "#008000";
            document.getElementById("cella41").innerHTML = "X";
            grid[31] = "X";
            esito();
        } else {
            document.getElementById("cella41").style.color = " #8f00ff ";
            document.getElementById("cella41").innerHTML = "O";
            grid[31] = "O";
            esito();
        }
        
        turno();


    }
    
}

function premi7Colonna(){
    if (controlloPosizione(37) == false) {

        if (turnoGiocatori == true) {
            document.getElementById("cella42").style.color = "#008000";
            document.getElementById("cella42").innerHTML = "X";
            grid[37] = "X";
            esito();
        } else {
            document.getElementById("cella42").style.color = " #8f00ff ";
            document.getElementById("cella42").innerHTML = "O";
            grid[37] = "O";
            esito();
        }
        
        turno();


    }
   
}

function reset(){

    grid=[6,12,18,24,30,36,42,
          5,11,17,23,29,35,41,
          4,10,16,22,28,34,40,
          3,9,15,21,27,33,39,
          2,8,14,20,26,32,38,
          1,7,13,19,25,31,37]; 

        document.getElementById("cella1").innerHTML="";
        document.getElementById("cella2").innerHTML="";
        document.getElementById("cella3").innerHTML="";
        document.getElementById("cella4").innerHTML="";
        document.getElementById("cella5").innerHTML="";
        document.getElementById("cella6").innerHTML="";
        document.getElementById("cella7").innerHTML="";
        document.getElementById("cella8").innerHTML="";
        document.getElementById("cella9").innerHTML="";
        document.getElementById("cella10").innerHTML="";
        document.getElementById("cella11").innerHTML="";
        document.getElementById("cella12").innerHTML="";
        document.getElementById("cella13").innerHTML="";
        document.getElementById("cella14").innerHTML="";
        document.getElementById("cella15").innerHTML="";
        document.getElementById("cella16").innerHTML="";
        document.getElementById("cella17").innerHTML="";
        document.getElementById("cella18").innerHTML="";
        document.getElementById("cella19").innerHTML="";
        document.getElementById("cella20").innerHTML="";
        document.getElementById("cella21").innerHTML="";
        document.getElementById("cella22").innerHTML="";
        document.getElementById("cella23").innerHTML="";
        document.getElementById("cella24").innerHTML="";
        document.getElementById("cella25").innerHTML="";
        document.getElementById("cella26").innerHTML="";
        document.getElementById("cella27").innerHTML="";
        document.getElementById("cella28").innerHTML="";
        document.getElementById("cella29").innerHTML="";
        document.getElementById("cella30").innerHTML="";
        document.getElementById("cella31").innerHTML="";
        document.getElementById("cella32").innerHTML="";
        document.getElementById("cella33").innerHTML="";
        document.getElementById("cella34").innerHTML="";
        document.getElementById("cella35").innerHTML="";
        document.getElementById("cella36").innerHTML="";
        document.getElementById("cella37").innerHTML="";
        document.getElementById("cella38").innerHTML="";
        document.getElementById("cella39").innerHTML="";
        document.getElementById("cella40").innerHTML="";
        document.getElementById("cella41").innerHTML="";
        document.getElementById("cella42").innerHTML="";
        document.getElementById("scrittaWin").innerHTML ="";     
}


































































































