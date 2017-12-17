'use strict';

/*Operatory arytmetyczne*/

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);


/*Operatory przypisania*/

liczba1 = liczba1 + liczba2;
console.log(liczba1);

/*Operator porównania*/

if ("2" === 2) {
    console.log("prawda");
}
else {
    console.log("nieprawda");
}

/*Operator logiczny*/

if ( !(("2" === 2) && (8 < 4))) {
    document.write("<br />prawda")
}
