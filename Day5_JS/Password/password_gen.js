const passwordBox = document.getElementById("password");
const lenght = 6;

const lowercase = "qwertyuiopasdfghjklzxcvbnm";
const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";

const number = "1234567890";
const symbol = "!@#$%^&*()_+~{}|:<>?[]\;',./";

const x = lowercase + uppercase + number + symbol;

function createpassword(){
         let p ="";
        p += uppercase[Math.floor(Math.random() * uppercase.length)];
        p += lowercase[Math.floor(Math.random() * lowercase.length)];
        p += number[Math.floor(Math.random() * number.length)];
        p += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > p.length){

        p += x[Math.floor(Math.random() * symbol.length)];

    }
    alert(p);
    passwordBox.value = p;


}
