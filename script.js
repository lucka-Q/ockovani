document.body.innerHTML += "<h2> Očkování </h2>"

const krestniJmeno = prompt ("Zadejte svoje křestní jméno")
const prijmeni = prompt ("Zadejte své příjmení")
const vek = Number(prompt ("Zadejte svůj věk"))

document.body.innerHTML = "<p>" + krestniJmeno + " "+ prijmeni + ", věk: " + vek + "</p>"