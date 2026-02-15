// function filterName(name = []) {
//   let filtername = [];

//   for (let i = 0; i < name.length; i++) {
//     if (name[i].trim().toLowerCase().startsWith("b")) {
//       filtername.push(name[i]);
//     }
//   }

//   return filtername;
// }
// let output = filterName([
//   "hello",
//   "khus",
//   "khushvant",
//   "kunal",
//   "karishma ",
//   "kappor",
//   "Badal",
//   "Babul",
// ]);


// console.log(output);

function changeText() {
  const title = document.getElementById("title");
  const line = document.getElementById("line");

  title.textContent = "Only For You 💞";

  line.innerHTML = `
    Tumi amar jiboner shobcheye shundor upohar ❤️<br /><br />
    Tomake chara amar din shunno lage 💔<br />
    Tomar hashite amar praan bhore jai 😘<br /><br />
    Bhalobashi tomake, aaj ar chirodin 💖
  `;
}


