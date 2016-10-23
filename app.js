let superheroes = [
  { name: "Superman", place_of_origin: "Krypton", classification: "Hero", img_url: "http://vignette3.wikia.nocookie.net/dcanimated/images/3/39/SupermanJLU.png/revision/latest/scale-to-width-down/230?cb=20130305134005"},
  { name: "Batman", place_of_origin: "Gotham City", classification: "Hero", img_url: "http://vignette1.wikia.nocookie.net/dcanimated/images/d/d1/Batman.png/revision/latest/scale-to-width-down/230?cb=20150125193428"},
  { name: "Wonder Woman", place_of_origin: "Themescyria", classification: "Hero", img_url: "http://vignette3.wikia.nocookie.net/dcanimated/images/f/f5/Wonder_Woman.png/revision/latest/scale-to-width-down/230?cb=20090407084402"},
]

angular
  .module("superheroApp", [])
  .controller("heroCtrl", [superheroController])

function superheroController(){
  this.superheroes = superheroes
  this.newSuperhero = {}
  this.addSuperhero = function (){
    this.superheroes.push(this.newSuperhero)
    this.newSuperhero = {}
  }
}
