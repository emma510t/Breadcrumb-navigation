const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const nav = document.querySelector("ul");

function returnBread(array) {
  array.forEach((element) => {
    if (element.name === bc[bc.length - 1].name) {
      console.log("last child works");
      nav.innerHTML += `<li>${element.name}</li>`;
    } else {
      nav.innerHTML += `<li><a href="${element.link}">${element.name}</a></li> <li>/</li>`;
    }
  });
}

document.querySelector("button").addEventListener("click", showBread);

function showBread() {
  returnBread(bc);
  document.querySelector("button").removeEventListener("click", showBread);
}
