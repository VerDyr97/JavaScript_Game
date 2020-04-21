var mec = false;
var bojoval = false;
var zivot = true;

function myFunction0() {
    if (zivot == true) {
        document.getElementById("text0").innerHTML = 'Šel jsi špatně, byl jsi chycen a umučen. Hra pro tebe končí.' +
            '<br> Chcete zresetovat hru? <br> <button type="button" onclick="reset()">Reset</button><br>';
        document.getElementById("text1").innerHTML = '';
        document.getElementById("text2").innerHTML = '';
        zivot = false;
    } else {}
}

function myFunction1() {
    if (zivot == true) {
        document.getElementById("text0").innerHTML = 'Sakra chlápek se šatlavy tě chytil a uvěznil, hra pro tebe končí.' +
            '<br> Chcete zresetovat hru? <br> <button type="button" onclick="reset()">Reset</button><br>';
        document.getElementById("text1").innerHTML = '';
        document.getElementById("text2").innerHTML = '';
        zivot = false;
    } else {}
}

function myFunction2() {
    if (zivot == true && bojoval == false) {
        document.getElementById("text0").innerHTML = "Jsi v chodbě. Nachází se tu truhla, chystáš se ji otevřít a..." +
            '<br> Otevřel jsi truhlu a našel jsi meč! Jsi připraven k boji! <br> <button type="button" onclick="myFunction3()">Jít do sálu</button><br>';
        mec = true;
    } else {}
}

function myFunction3() {
    if (zivot == true) {
        if (mec == 0) {
            document.getElementById("text0").innerHTML = "Jsi v sálu a proti tobě stojí rytíř, jsi neozbrojen, mrkni radši do jiné místnosti!";
        } else {
            document.getElementById("text1").innerHTML = 'Jsi v sálu a proti tobě stojí rytíř' +
                ', máš v ruce meč a chystáš se na rytíře! Chceš vědět jak to dopadne? <br>' +
                '<button type="button" onclick="boj()">Bojovat</button><br>';
        }
    } else {}
}

function reset() {
    document.getElementById("text0").innerHTML = "";
    document.getElementById("text1").innerHTML = "";
    document.getElementById("text2").innerHTML = "";
    mec = false;
    bojoval = false;
    zivot = true;
}

function boj() {
    if (bojoval == false) {
        var rn = Math.floor(Math.random() * 10);
        if (rn == 5 || rn == 6) {
            document.getElementById("text1").innerHTML = 'Bohužel jsi dnes neměl štěstí a rytíř ti setnul hlavu';
            zivot = false;
            bojoval = true;
        } else {
            document.getElementById("text1").innerHTML = 'Když už to vypadalo ve prospěch rytíře, tak jsi sebral poslední kousky sil' +
                'a důvtipnou figurou ho probodáváš. Nic ti už nestojí v cestě za získáním diamantu! <br>' +
                'Chceš hru znova zahrát? <br> <button type="button" onclick="reset()">Reset</button><br>';
            bojoval = true;
        }
    } else {
        if (zivot == false) {
            document.getElementById("text2").innerHTML = 'Jsi mrtvy a muzes jedine resetovat hru';
        } else {
            document.getElementById("text2").innerHTML = 'Vyhral jsi, ted neni duvod znova bojovat. :) <br>' +
                ',můžeš si ale hru resetovat.';
        }

    }
}