class DiceView
{
    constructor()
    {
       
    }
    
    score(score)
    {
       var score = (score);
       document.getElementById("showScore").innerHTML = score;
    }
    
    rollDobbelsteen(Bank)
    {
        var dobbelstenen = (Bank);
        document.getElementById("dobbelsteen1").innerHTML = dobbelstenen[0][0];
        document.getElementById("dobbelsteen2").innerHTML = dobbelstenen[1][0];
        document.getElementById("dobbelsteen3").style.visibility = "hidden";
        document.getElementById("dobbelsteen4").style.visibility = "hidden";
    }
    
    rollDobbelsteen2(Speler)
    {
        var arrayScore = (Speler);
        document.getElementById("showScore").innerHTML = arrayScore[4];
        document.getElementById("dobbelsteen3").style.visibility = "visible";
        document.getElementById("dobbelsteen4").style.visibility = "visible";
        document.getElementById("dobbelsteen3").innerHTML = arrayScore[0][0];
        document.getElementById("dobbelsteen4").innerHTML = arrayScore[1][0];
    }
}