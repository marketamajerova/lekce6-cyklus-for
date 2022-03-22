// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

//TADY NAPIS CYKLUS
let a = 0;

while (a <= 10){
    console.log(a);
    a = a + 1;
}

console.log('-------------------');


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS
let b = 0;

while (b <= 10){
    console.log(a);
    b = b + 1;
}
console.log('---');

let c = 0;

while (c < 10){
    console.log(a);
    b = b + 1;
}

console.log('-------------------');


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS
for (i=10; i >= 0; i = i - 1){
    console.log(i);
}

console.log('-------------------');