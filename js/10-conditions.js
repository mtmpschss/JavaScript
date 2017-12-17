'use strict';

/*Warunek IF*/

var wzrostMateusza = 190;
var wzrostOlgi = 190;

if (wzrostOlgi < wzrostMateusza) {
    console.log("olga jest niższa");
}

/*
Warunek if else*/

if (wzrostOlgi > wzrostMateusza) {
    console.log("Olga jest wyższa");
} else {
    console.log("olga jest niższa");
}

/*Warunek if else if*/

if (wzrostOlgi < wzrostMateusza) {
    console.log("Olga jest niższa");
} else if (wzrostOlgi == wzrostMateusza) {
    console.log("Olga i Mateusz są równi");
} else if (wzrostOlgi > wzrostMateusza) {
    console.log("Olga jest wyższa");
}

/*Warunek switch*/
var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log("kolor zielony")
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log("inny kolor")
}