

// let pokemon1 = {name :"Bulbasaur", height:7, types: ['grass','posion'] }
// let pokemon2 = {name :"Charmander", height:6, types: 'fire' }
// let pokemon3 = {name :"Squirtle", height:5, types: 'water' }


//array of pokemon
let pokemonList = [
    {name :"Bulbasaur", height:7, types: ['grass','posion']},
    {name :"Charmander", height:6, types: 'fire' },
    {name :"Squirtle", height:5, types: 'water' }
];

// for (let i=0; i<pokemonList.length; i++){
//     if (pokemonList[i].height>6){
//         console.log(pokemonList[i].name + " (height:7)- Wow, that's big!");
//     }else if (pokemonList[i].height<6){
//         console.log(pokemonList[i].name + " (height:5)");
//     }else {
//         console.log(pokemonList[i].name + " (height:6)");}
//     }


// exercise 1.5 forEach()
pokemonList.forEach(function(user){
    console.log(user.name + ' height is ' + user.height );
});

