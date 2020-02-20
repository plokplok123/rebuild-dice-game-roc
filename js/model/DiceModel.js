class DiceModel
{
    constructor()
    {
        this.dobbelsteen = [0,'&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;' ];
        this.score = 500;
        this.p = 0;
        this.bankTotaal;
        this.spelerTotaal;
        this.reload;
    }
    
    Score()
    {
        return this.score;
    }
    
    checkScore()
    {
        var inzet = document.getElementById("myNumber").value;
        this.score -= inzet;
        return this.score;
    }
    
    bankGooien()
    {
        console.log(this.score);
        var random = this.roll();
        var punt = random[1];
        var random2 = this.roll();;
        var punt2 = random2[1];
        var punten = punt + punt2;
        console.log(punten);
        if (punten === 2 || punten ===12)
        {
            this.bankGooien();
        }
        
        else
        {
            this.bankTotaal = punten;
            this.disable();
            return [random, random2, punt, punt2, punten];
        }
    }
    
    disable()
    {
        document.getElementById("show").disabled = true;
        document.getElementById("myNumber").disabled = true;
        document.getElementById("hoog").disabled = false;
        document.getElementById("laag").disabled = false;
        document.getElementById("hoog").checked = false;
        document.getElementById("laag").checked = false;
    }
    
    roll()
    {
        var random = Math.floor(Math.random()*6) + 1;
        return [this.dobbelsteen[random], random];
    }
    
    check()
    {
        document.getElementById("show2").disabled = false;
    }
    
    SpelerGooien()
    {
        var random = this.roll();
        var punt = random[1];
        var random2 = this.roll();
        var punt2 = random2[1];
        var punten2 = punt + punt2;
        console.log(punten2);
        this.spelerTotaal = punten2;
        var inzet = document.getElementById("myNumber").value;
        inzet *= 2;
        console.log(inzet);
        var punten = this.bankTotaal;
        var punten2 = this.spelerTotaal;
        document.getElementById("hoog").disabled = true;
        document.getElementById("laag").disabled = true;
        document.getElementById("show2").disabled = true;
        if (document.getElementById("hoog").checked)
        {
            if (punten2 > punten)
            {
                this.score += inzet;
            }
        }
        
        if (document.getElementById("laag").checked)
        {
            if (punten2 < punten)
            {
                this.score += inzet;
            }
        }
        return [random, random2, punt, punt2, this.score];
    }
    
    disable2()
    {
        var score = this.SpelerGooien();
        console.log(score[4]);
        
        document.getElementById("myNumber").max = score[4];
        document.getElementById("show").disabled = false;
        document.getElementById("myNumber").disabled = false;
        if (score[4] === 0)
        {
            document.getElementById("show").disabled = true;
            setTimeout(this.gameOverTrue,2000);
        }
        return score;
    }
    
    gameOverTrue()
    {
        window.alert("GAME OVER");
        location.reload();
    }
}