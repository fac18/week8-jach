const table = document.querySelector("table")

const addRows = (user) => {
let row = document.createElement('tr');
let userName = document.createElement('td')
let behaviour = document.createElement('td')
let present = document.createElement('td');

userName.textContent = user.name
if(user.behaviour){
behaviour.textContent = "YOU HAVE BEEN GOOD"
} else {
behaviour.textContent = "YOU HAVE BEEN BAD"
}
 present.textContent = " still deciding"

row.appendChild(userName);
 row.appendChild(behaviour);
 row.appendChild(present)

}


module.exports = addRows;