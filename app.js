let superHeroesData = [
  { name: "Superman", place_of_origin: "Krypton", classification: "Hero", img_url: "http://vignette3.wikia.nocookie.net/dcanimated/images/3/39/SupermanJLU.png/revision/latest/scale-to-width-down/230?cb=20130305134005"},
  { name: "Batman", place_of_origin: "Gotham City", classification: "Hero", img_url: "http://vignette1.wikia.nocookie.net/dcanimated/images/d/d1/Batman.png/revision/latest/scale-to-width-down/230?cb=20150125193428"},
  { name: "Wonder Woman", place_of_origin: "Themescyria", classification: "Hero", img_url: "http://vignette3.wikia.nocookie.net/dcanimated/images/f/f5/Wonder_Woman.png/revision/latest/scale-to-width-down/230?cb=20090407084402"},
  { name: "Robin", place_of_origin: "Gotham City", classification: "Sidekick", img_url: "http://vignette4.wikia.nocookie.net/dcanimated/images/8/85/RobinTNBA.png/revision/latest/scale-to-width-down/230?cb=20150111155448"},
  { name: "Wonder Girl", place_of_origin: "Themyscira", classification: "Sidekick", img_url: "http://vignette1.wikia.nocookie.net/youngjustice/images/a/a6/Wonder_Girl.png/revision/latest/scale-to-width-down/300?cb=20121015205858"},
  { name: "Superboy", place_of_origin: "Project Cadmus", classification: "Sidekick", img_url: "http://vignette3.wikia.nocookie.net/youngjustice/images/4/47/Superboy.png/revision/latest/scale-to-width-down/300?cb=20130204001847"},

]

angular
  .module("superheroApp", [])
  .controller("heroCtrl", [superheroController])

function superheroController(){
  this.superheroes = superHeroesData
  this.newSuperhero = {}
  this.addSuperhero = function(){
    let superHero = { name: this.newSuperhero.name, place_of_origin: this.newSuperhero.place_of_origin, classification: this.newSuperhero.classification, img_url: this.newSuperhero.img_url}
    this.superheroes.push(superHero)
  }
}
