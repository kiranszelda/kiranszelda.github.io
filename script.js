let motivation="GO TO THE GYM YOU LAZY F***";
let motivation_select = 0;

function change_motivation(){
    motivation_select = Math.floor(Math.random() * 10);

    if(motivation_select == 0){ motivation = "GO TO THE GYM YOU LAZY F***" }
    if(motivation_select == 1){ motivation = "Run as far as you can, then when you think you're done run that distance again" }
    if(motivation_select == 2){ motivation = "If you feel dizzy when working out, it means you aren't doing it hard enough. Work harder." }
    if(motivation_select == 3){ motivation = "Deadlift more than you can lift, there's a reason \"dead\" is in the name" }
    if(motivation_select == 4){ motivation = "Wear fun clothes before you die working out, this puts the \"fun\" in funeral" }
    if(motivation_select == 5){ motivation = "Steroids are harmless and will help you in your workout" }
    if(motivation_select == 6){ motivation = "If you're running and you find a dangerous area, run in there. More velocity means more fast; means bullets in your back means faster" }
    if(motivation_select == 7){ motivation = "If you're reading this it means you aren't working out, remember no breaks. ever." }
    if(motivation_select == 8){ motivation = "Beer has a lot of calories, drink vodka instead" }
    if(motivation_select == 9){ motivation = "If you ever feel like quitting, do it. You clearly aren't motivated so you deserve to fail" }

    document.getElementById("motivation_html").innerHTML = motivation;
}

document.getElementById("motivation_html").innerHTML = motivation;