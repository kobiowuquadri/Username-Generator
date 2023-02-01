let firstName = prompt('what is your first name?: ');
let lastName = prompt('what is your last name ? ');

let fname = firstName.slice(0, 1);
let lname = lastName.slice(-5, -1);
lower = (fname + lname).toLocaleLowerCase();
rand = Math.floor(Math.random() * 100 + 10); 
username = lower + rand;
alert(username)
