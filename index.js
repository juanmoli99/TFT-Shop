var currentLevel = 1;
var percentageLevel = [];
const divImg = document.getElementsByClassName("imgChampion");
class Champion {
    constructor(img) {
        this.imagen = img;
    }
}
const Ahri = new Champion("Champions/Ahri.png");
const AkaliKDA = new Champion("Champions/Akali KDA.png");
const AkaliTD = new Champion("Champions/Akali TD.png");
const Ammumu = new Champion("Champions/Ammumu.png");
const Annie = new Champion("Champions/Annie.png");
const Aphelios = new Champion("Champions/Aphelios.png");
const Bardo = new Champion("Champions/Bardo.png");
const Blitzcrank = new Champion("Champions/Blitzcrank.png");
const Caitlyn = new Champion("Champions/Caitlyn.png");
const Corki = new Champion("Champions/Corki.png");
const Ekko = new Champion("Champions/Ekko.png");
const Evelynn = new Champion("Champions/Evelynn.png");
const Ezreal = new Champion("Champions/Ezreal.png");
const Garen = new Champion("Champions/Garen.png");
const Gnar = new Champion("Champions/Gnar.png");
const Gragas = new Champion("Champions/Gragas.png");
const Illaoi = new Champion("Champions/Illaoi.png");
const Jax = new Champion("Champions/Jax.png");
const Jhin = new Champion("Champions/Jhin.png");
const Jinx = new Champion("Champions/Jinx.png");
const Kaisa = new Champion("Champions/Kaisa.png");
const Karthus = new Champion("Champions/Karthus.png");
const Katarina = new Champion("Champions/Katarina.png");
const Kayle = new Champion("Champions/Kayle.png");
const Kayn = new Champion("Champions/Kayn.png");
const Kennen = new Champion("Champions/Kennen.png");
const Ksante = new Champion("Champions/Ksante.png");
const Lillia = new Champion("Champions/Lillia.png");
const Lucian = new Champion("Champions/Lucian.png");
const Lulu = new Champion("Champions/Lulu.png");
const Lux = new Champion("Champions/Lux.png");
const MissFortune = new Champion("Champions/Miss Fortune.png");
const Mordekaiser = new Champion("Champions/Mordekaiser.png");
const Nami = new Champion("Champions/Nami.png");
const Neeko = new Champion("Champions/Neeko.png");
const Olaf = new Champion("Champions/Olaf.png");
const Pantheon = new Champion("Champions/Pantheon.png");
const Poppy = new Champion("Champions/Poppy.png");
const Qiyana = new Champion("Champions/Qiyana.png");
const Riven = new Champion("Champions/Riven.png");
const Samira = new Champion("Champions/Samira.png");
const Senna = new Champion("Champions/Senna.png");
const Seraphine = new Champion("Champions/Seraphine.png");
const Sett = new Champion("Champions/Sett.png");
const Sona = new Champion("Champions/Sona.png");
const Taric = new Champion("Champions/Taric.png");
const ThamKench = new Champion("Champions/Tham Kench.png");
const Thresh = new Champion("Champions/Thresh.png");
const Twich = new Champion("Champions/Twich.png");
const TwistedFate = new Champion("Champions/Twisted Fate.png");
const Urgot = new Champion("Champions/Urgot.png");
const Vex = new Champion("Champions/Vex.png");
const Vi = new Champion("Champions/Vi.png");
const Viego = new Champion("Champions/Viego.png");
const Yasuo = new Champion("Champions/Yasuo.png");
const Yone = new Champion("Champions/Yone.png");
const Yorick = new Champion("Champions/Yorick.png");
const Zac = new Champion("Champions/Zac.png");
const Zed = new Champion("Champions/Zed.png");
const Ziggs = new Champion("Champions/Ziggs.png");

const champsCoste1 = [Annie, Corki, Evelynn, Jinx, Kennen, Ksante, Lillia, Nami, Olaf, Taric, ThamKench, Vi, Yasuo];
const champsCoste2 = [Aphelios, Bardo, Garen, Gnar, Gragas, Jax, Kaisa, Katarina, Kayle, Pantheon, Senna, Seraphine, Twich, ];
const champsCoste3 = [Ammumu, Ekko, Lulu, Lux, MissFortune, Mordekaiser, Neeko, Riven, Samira, Sett, Urgot, Vex, Yone];
const champsCoste4 = [Ahri, AkaliKDA, AkaliTD, Blitzcrank, Caitlyn, Ezreal, Karthus, Poppy, Thresh, TwistedFate, Viego, Zac, Zed];
const champsCoste5 = [Illaoi, Jhin, Kayn, Lucian, Qiyana, Sona, Yorick, Ziggs];

function levelUp() {
    if (currentLevel < 11) {
        currentLevel++;
    } else {
        alert("¡Haz alcanzado el maximo nivel!")
    }
    updateLevelText();
}

function GenerateNumber() {
    var number = Math.round(Math.random() * 100);
    return number;
}

function Roll() {
    selectTier(UpdatePercentage());
}
Roll();
function selectTier(array) {
    let coste1 = array[0];
    let coste2 = coste1 + array[1];
    let coste3 = coste2 + array[2];
    let coste4 = coste3 + array[3];
    let coste5 = coste4 + array[4];
    
    for (let i = 0; i < divImg.length; i++) {
        let randomNumber = GenerateNumber();
        if (randomNumber < coste1) {
            randomChamp(champsCoste1, i)
            
        } else if (randomNumber > coste1 && randomNumber < coste2) {
            randomChamp(champsCoste2, i)
        } else if(randomNumber > coste2 && randomNumber < coste3) {
            randomChamp(champsCoste3, i);
        } else if(randomNumber > coste3 && randomNumber < coste4) {
            randomChamp(champsCoste4, i);
        } else if (randomNumber > coste4 && randomNumber < coste5){
            randomChamp(champsCoste5, i);
        }
    }
    
}
function randomChamp(array, index) {
    if (array.length > 0) {
        var number = Math.floor(Math.random() * array.length);
        divImg[index].src = array[number].imagen;
    } else {
        console.error("Error: El array proporcionado está vacío.");
    }
}
const levelText = document.getElementById("level")
function updateLevelText() {
    levelText.textContent = `Nivel: ${currentLevel}`;
}
updateLevelText();
 
function UpdatePercentage()
 {
    switch(currentLevel) {
        case 1: 
        percentageLevel = [100, 0, 0, 0, 0];
        break;
        case 2:
        percentageLevel = [100, 0, 0, 0, 0];
        break;
        case 3:
        percentageLevel = [75, 25, 0, 0, 0]
        break;
        case 4:
        percentageLevel = [55, 30, 15, 0, 0];
        break;
        case 5:
        percentageLevel = [45, 30, 20, 2, 0];
        break;
        case 6:
        percentageLevel = [30, 40, 25, 5, 0];
        break;
        case 7:
        percentageLevel = [19, 35, 35, 10, 1];
        break;
        case 8:
        percentageLevel = [18, 25, 36, 18, 3];
        break;
        case 9:
        percentageLevel = [10, 20, 25, 35, 10];
        break;
        case 10:
        percentageLevel = [5, 10, 20, 40, 25];
        break;
        case 11:
        percentageLevel = [1, 2, 12, 50, 35];
    }
    return percentageLevel;
 }
 
 function cambiarImagen(nuevaSrc, elemento) {
    
    elemento.src = nuevaSrc;
}

function restaurarImagen(srcOriginal, elemento) {
    elemento.src = srcOriginal;
}