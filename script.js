let motivation="GO TO THE GYM YOU LAZY F***";
let motivation_select = 0;

function change_motivation(){
    motivation_select = Math.floor(Math.random() * 10);

    if(motivation_select == 0){ motivation = "GO TO THE GYM YOU LAZY F***" }
    if(motivation_select == 1){ motivation = "1" }
    if(motivation_select == 2){ motivation = "2" }
    if(motivation_select == 3){ motivation = "3" }
    if(motivation_select == 4){ motivation = "4" }
    if(motivation_select == 5){ motivation = "5" }
    if(motivation_select == 6){ motivation = "6" }
    if(motivation_select == 7){ motivation = "7" }
    if(motivation_select == 8){ motivation = "8" }
    if(motivation_select == 9){ motivation = "9" }

    document.getElementById("motivation_html").innerHTML = motivation;
}

document.getElementById("motivation_html").innerHTML = motivation;