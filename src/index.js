function generatePoem(event) {
  event.preventDefault();

   new Typewriter("#poem", {
    strings: "Sente August inus sprichit waz die sele minnit, deme wirdit si glich. minnet si irdische dinc so wirdit si irdisch. minnit si Got, so mochte man fragin, wirdit si dam Got spreche ich daz,daz ludite ungelouplich den di zu krankin sin habin und ez nicht fornemen mer sente Augustinus sprichit ich inspreche ez nicht Iner ich wise uch an di schrift di da sprichit ich habe gesprochin daz ir Gode sit",
    autoStart: true,
    delay: 1,
    cursor: "",
  }); 
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);