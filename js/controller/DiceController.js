class DiceController
{
    constructor()
    {
        this.myModel = new DiceModel();
        this.myView = new DiceView();
        
        document.getElementById("show2").disabled = true;
        document.getElementById("hoog").disabled = true;
        document.getElementById("laag").disabled = true;
        
        document.querySelector(".bank")
        .addEventListener("click", (e) => this.reageerOpClickBankGooien());
        document.querySelector(".speler")
        .addEventListener("click", (e) => this.reageerOpClickSpelerGooien());
        document.querySelector(".check")
        .addEventListener("click", (e) => this.reageerOpClickHogerLager());
        document.querySelector(".check2")
        .addEventListener("click", (e) => this.reageerOpClickHogerLager());
        this.turn = false;
        this.LaadSpel();
    }
    
    LaadSpel()
    {
        var score = this.myModel.Score();
        console.log(score);
        document.getElementById("myNumber").max = score;
        this.myView.score(score);
    }
    
    reageerOpClickBankGooien()
    {
        var Bank  = this.myModel.bankGooien();
        var score = this.myModel.checkScore();
        this.myView.rollDobbelsteen(Bank);
        this.myView.score(score);
    }
    
    reageerOpClickHogerLager()
    {
        this.myModel.check();
    }
    
    reageerOpClickSpelerGooien()
    {
        var Speler = this.myModel.disable2();
        this.myView.rollDobbelsteen2(Speler);
        document.getElementById("myNumber").value = 10;
    }
}