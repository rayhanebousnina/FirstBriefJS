/* EX1 */
function inverser(a,b){
    let c = 0;
    c = a;
    a = b;
    b = c;
   return "La première valeur est " + a + " et la deuxième valeur est " +b;
}
console.log(inverser(4,3));

/* EX2 */
function affichage(nom,age,homme){
    
    return "Le nom est " + nom + " et l'age est " + age + " et homme égale à " + homme;
}
console.log(affichage("toto",30,true));


/* EX3 */
function puissanceDeDeux(a){
    return a*a;
}
console.log(puissanceDeDeux(5));

/* EX4 */
function somme(a,b){
    return a+b;
}
console.log(somme(4,3));

/* EX5 */
function minuteToSeconde(min){
    let sec = min*60;
    return sec;
}
console.log(minuteToSeconde(4));

/* EX6 */
function increment(x){
    x++;
    return x;
}
console.log(increment(4));

/* EX7 */
function getSurface(base,hauteur){
    return base*hauteur/2;
}
console.log(getSurface(4,2));

/* EX8 */
function strReverse(str){
    let strReverse = str.split("").reverse().join("");
    return strReverse;
}
console.log(strReverse("Hello"));

/* EX9 */
function getMax(a,b,c){
   return Math.max(a,b,c);
}
console.log(getMax(2,7,5));

/* EX10 */
function getFirst(){
    let fruits = ['Kiwi','Apple', 'Banana'];
    let first = fruits[0];
    return first;
}
console.log(getFirst());

/* EX11 */
function url() {
    return "L'URL de cette page est: " + window.location.href;
}
console.log(url());


/* EX12 */
function resteDiv(a,b){
    return a%b;
}
console.log(resteDiv(1,3));

/* EX13 */
function check(a,b){
    if ( a+b < 100 ) {
        return true;
    } else {
        return false;
    }
}
console.log(check(100,5));

/* EX14 */
function heureSeconde(a){
    return a*60*60;
}
console.log(heureSeconde(1));

/* EX15 */
function checkNbr(a){
    if ((a<0) || (a==0)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNbr(-1));

/* EX16 */
function isEqual(a,b){
    if (a===b) {
        return true;
    } else {
        return false;
    }
}
console.log(isEqual(1,5));

/* EX17 */
function isDivisible(a){
    if (a%5 == 0) {
        return true;
    } else {
        return false;
    }

}
console.log(isDivisible(9));

/* EX18 */
function hmTos(a,b){
   return (a*60*60)+(b*60);
}
console.log(hmTos(1,10));

/* EX19 */
function reverseTab(){
    let array = ['one', 'two', 'three'];
    let reversedArray = array.reverse();
    return reversedArray;
}
console.log(reverseTab());

/* EX20 */
function getLastElem(){
    let array = ['one', 'two', 'three'];
    return array[array.length-1];
}
console.log(getLastElem());

/* EX21 */
function checkEq(a,b){
    if (a===b) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEq(1,'1'));

/* EX22 */
function isEmpty(str){
    if (str === "") {
        return true;
    } else {
        return false;
    }
}
console.log(isEmpty(""));
