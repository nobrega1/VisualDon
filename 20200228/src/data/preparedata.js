const data = require('./noms.json')

const result =   data
  .filter(d => d.ortbez18 === 'Biel/Bienne')//filtreras selon le codpostal 2500
  .filter(d => d.sexcode === 'w')// filtreras selon le genre 
  .map(d => ({ nom: d.nachname, nombre: d.anzahl , codepostal : d.plz }))// prend tous les noms et numero

console.log(
  JSON.stringify(result, null, 2)//La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON. 
  //JSON.stringify( valeur[, remplaçant [, espace]])
)
