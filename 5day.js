/*


1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)


6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)


*/
// 1

console.log('----------------1-------------------');
const a = 4 ;
const b = 4 
if (a>b) {
    console.log('A yra daugiau uz B');

}else if (a == b ){
    console.log('a  = b');
}else{
    console.log('A yra maziau uz B');
}

console.log('----------------2-------------------');


for (let i=1;i<=10;i++){
    console.log(i)
}

console.log('----------------3-------------------');

for (i=0;i<= 10;i+=2) {
    console.log(i)
}
console.log('----------------4-------------------');

for(i=1;i<=5;i++){
    console.log(Math.floor(Math.random() * 10)+1)
}
console.log('----------------5-------------------');

troll=0
while (troll !=5 ){
    troll=Math.floor(Math.random() * 10+1);
    console.log(troll);
}

console.log('----------------6-------------------');
const masyvas =[10, 20, 18, 14, 16, 10, 20, 18, 14, 16, 10, 20, 18, 14, 16, 10, 21, 18, 14, 16,];



function bigNum(list) {
    
    if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas';
    }
    if (list.length === 0) {
        return 'ERROR: sarasas negali buti tuscias';
    }

    let biggestNumber = -Infinity; 

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }
       
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    if (biggestNumber === -Infinity) {
        return 'ERROR: sarase nera nei vieno normalaus skaiciaus';
    }

    return biggestNumber;
}

console.log(bigNum(masyvas))

console.log('----------------7------------------');


function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxy"; 
  
    for (var i = 0; i < 100; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  
  console.log(makeid());



  console.log('----------------10------------------');

//   10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
//   "(XXX) XXX-XXXX". (10 taškų)
 let gautasnr = [8,4,6,5,8,4,5,2,1,5];
let grazusnr='';

function mobilke(){
    return `(${gautasnr[0]}${gautasnr[1]}${gautasnr[2]}) ${gautasnr[3]}${gautasnr[4]}${gautasnr[5]}-${gautasnr[6]}${gautasnr[7]}${gautasnr[8]}${gautasnr[9]}`
  }
  console.log(mobilke(gautasnr))