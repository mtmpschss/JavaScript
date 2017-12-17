'use strict'

/*Pętla for*/

for (var i=10; i>0; i--) {
    console.log(i)
}



/*Pętla forEach*/

var tablica = ["Krystian", "Monika", "Danuta"];

tablica.forEach (function(element, index) {
                 console.log("Element z Indexem: " + index + " ma wartość " + element);
                 });

/*Pętla while*/

var it=0;
while (it < tablica.length) {
    console.log(tablica[it]);
    it++
}

/*Pętla do while*/

var iter=2;
do {
    iter++;
    console.log(iter);
} while (iter<5)
    
    
    /*Przerywanie pętli*/
    var a = 0;
    while (a < 10) {
        console.log(++a)};
        if (a == 5) {
            brak;
        }

        /*    przeskakiwanie iteracji - continue*/
        for (var b = 0; b < 5; b++) {
            if (b == 2)
                continue;
            } else {
                console.log(b)};
            
        }
    