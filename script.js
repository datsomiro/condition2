/*let age=18 ;*/
/*if (age >== 18) {

    alert('Access granted');

}

else {

    alert('Access denied');

}
if (age >= 18) {

    alert('Enjoy!');

}*/

/*age>=18 ?alert('access granted'):alert('access denied');

const angle1=Number(prompt('1st angle'));
const angle2 = Number(prompt('2nd angle'));
const angle3 = Number(prompt('3rd angle'));
const sum=angle1+angle2+angle3;

if (sum===180){
    document.write('A nice triangle')
}
else{
    document.write('That s not a triangle')
}
*/
/*
const month = Number (prompt ('Enter the number of the month : '));
let days=31;

if (month===2){
    days=28
} else if (month===4){
        days=30
} else if (month === 6) {
    days = 30
} else if (month === 9) {
    days = 30
} else if (month === 11) {
    days = 30
}

document.write('Month ' + month + ' has ' + days + ' days');
*/

const username = Number (prompt ('Enter your Username here :'));
const password = (prompt ('Create your password here ; '))
const password2 = (prompt('Re-write your password here ; '))
if (password === password2 && password.length < 8) {
    document.write('Your password is not secure.You need a least 8 characteres long')
} if (password.length > 8 &&password !== password2){
    document.write('your passwords don t match')
}else {
    document.write('Welcome')
}

