// 1 Prüfe, ob "Äpfel" und "Orangen" gleich sind.
const Äpfel = 20;
const Orangen = 30;
const ergebnis1 = Äpfel === Orangen;
console.log({ ergebnis1 });


// 2Prüfe, ob "Äpfel" und "Orangen" nicht gleich sind.
const ergebnis2 = Äpfel !== Orangen;
console.log({ergebnis2});


// 3 Prüfe, ob "Äpfel" und "Orangen" nicht gleich sind.
const ergebnis3 =Äpfel > Orangen
console.log({ergebnis3});


// 4 Prüfe, ob Äpfel kleiner oder gleich Orangen ist.
const ergebnis4 =Äpfel <= Orangen;
console.log({ergebnis4});


// 5 Prüfe, ob Orangen größer ist als Äpfel.
const ergebnis5 =Orangen > Äpfel;
console.log({ergebnis5});


// 6 Erkläre eine weitere Variable Mangos und gib ihr den Wert 5. Multipliziere mangoes mit apples und prüfe, ob das Ergebnis größer ist als mangoes addiert mit oranges.
const mangos = 5;
const Äpfelmalmangos = Äpfel * mangos;
const mangosplusOrangen = mangos + Orangen;
const ergebnis6 =Äpfelmalmangos > mangosplusOrangen;
console.log({ergebnis6});


// 7 Subtrahiere Mangos von Äpfeln und prüfe, ob das Ergebnis kleiner ist als Orangen dividiert durch Mangos.
const mangosminusÄpfel = mangos - Äpfel;
const mangosminusÄpfeldurchmangos = mangosminusÄpfel / mangos;
const ergebnis7 = mangosminusÄpfel < mangosminusÄpfeldurchmangos;

console.log({ergebnis7});


// 8  Prüfe, ob Mangos, Äpfel und Orangen gleich sind.
const ergebnis8 = mangos === Äpfel === Orangen;
console.log({ergebnis8});


// 9 Prüfe, ob der Rest von "Äpfeln" geteilt durch "Mangos" und der Rest von "Orangen" geteilt durch "Mangos" gleich sind.
const Äpfeldurchmangos = Äpfel / mangos;
const Orangendurchmangos = Orangen / mangos;
const ergebnis9 = Äpfeldurchmangos === Orangendurchmangos;

console.log({ergebnis9});


// 10 Prüfe, ob Mangos addiert mit Äpfeln größer ist als Orangen minus Mangos. Wenn nicht, finde einen Operator, der das Ergebnis "wahr" liefert.

const mangosplusÄpfel = mangos + Äpfel;
const Orangenminusmangos = Orangen - mangos;
const ergebnis10a = mangosplusÄpfel > Orangenminusmangos;
console.log({ergebnis10a});
const ergebnis10b = mangosplusÄpfel >= Orangenminusmangos;
console.log({ergebnis10b });
