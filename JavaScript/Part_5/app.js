const maxnub = prompt("Give me max number:");
const gussnum = Math.floor(Math.random() * maxnub) + 1;
let count = 0;
while (count < 3) {
  let usernum = prompt(`guess a R.G.N b/w 1 to ${maxnub}`);
  if (usernum == gussnum) {
    console.log(`you guess the correct no.`);
    break;
  } else {
    count++;
  }
}
if (count == 3) {
  console.log("Sucks to be you, hahahaah !!!");
  console.log(`Gussnum was ${gussnum}`);
}
