// Function to generate the message
function messageGenerator () {
    const message = {
        message1: ['You are', 'You were', 'You will be', 'You have always been'],
        message2: ['as powerful as', 'as legendary as', 'as skilled as', 'as rare as'],
        message3: ['a Bulbasaur', 'an Ivysaur', 'a Venusaur', 'a Charmander', 'a Charmeleon', 'a Charizard', 'a Squirtle', 'a Wartortle', 'a Blastoise', 'a Caterpie', 'a Metapod', 'a Butterfree', 'a Weedle', 'a Kakuna', 'a Beedrill', 'a Pidgey', 'a Pidgeotto', 'a Pidgeot', 'a Rattata', 'a Raticate', 'a Spearow', 'a Fearow', 'an Ekans', 'an Arbok', 'a Pikachu', 'a Raichu', 'a Sandshrew', 'a Sandslash', 'a Nidoran♀', 'a Nidorina', 'a Nidoqueen', 'a Nidoran♂', 'a Nidorino', 'a Nidoking', 'a Clefairy', 'a Clefable', 'a Vulpix', 'a Ninetales', 'a Jigglypuff', 'a Wigglytuff', 'a Zubat', 'a Golbat', 'an Oddish', 'a Gloom', 'a Vileplume', 'a Paras', 'a Parasect', 'a Venonat', 'a Venomoth', 'a Diglett', 'a Dugtrio', 'a Meowth', 'a Persian', 'a Psyduck', 'a Golduck', 'a Mankey', 'a Primeape', 'a Growlithe', 'an Arcanine', 'a Poliwag', 'a Poliwhirl', 'a Poliwrath', 'a Abra', 'a Kadabra', 'an Alakazam', 'a Machop', 'a Machoke', 'a Machamp', 'a Bellsprout', 'a Weepinbell', 'a Victreebel', 'a Tentacool', 'a Tentacruel', 'a Geodude', 'a Graveler', 'a Golem', 'a Ponyta', 'a Rapidash', 'a Slowpoke', 'a Slowbro', 'a Magnemite', 'a Magneton', 'a Farfetch\'d', 'a Doduo', 'a Dodrio', 'a Seel', 'a Dewgong', 'a Grimer', 'a Muk', 'a Shellder', 'a Cloyster', 'a Gastly', 'a Haunter', 'a Gengar', 'a Onix', 'a Drowzee', 'a Hypno', 'a Krabby', 'a Kingler', 'a Voltorb', 'an Electrode', 'an Exeggcute', 'an Exeggutor', 'a Cubone', 'a Marowak', 'a Hitmonlee', 'a Hitmonchan', 'a Lickitung', 'a Koffing', 'a Weezing', 'a Rhyhorn', 'a Rhydon', 'a Chansey', 'a Tangela', 'a Kangaskhan', 'a Horsea', 'a Seadra', 'a Goldeen', 'a Seaking', 'a Staryu', 'a Starmie', 'a Mr. Mime', 'a Scyther', 'a Jynx', 'an Electabuzz', 'a Magmar', 'a Pinsir', 'a Tauros', 'a Magikarp', 'a Gyarados', 'a Lapras', 'a Ditto', 'an Eevee', 'a Vaporeon', 'a Jolteon', 'a Flareon', 'a Porygon', 'an Omanyte', 'an Omastar', 'a Kabuto', 'a Kabutops', 'a Aerodactyl', 'a Snorlax', 'an Articuno', 'a Zapdos', 'a Moltres', 'a Dratini', 'a Dragonair', 'a Dragonite', 'a Mewtwo', 'a Mew'],
    };

    let finalMessage = [];

    for (let key in message) {
        let randomIndex = Math.floor(Math.random() * message[key].length);
        finalMessage.push(message[key][randomIndex]);
    }

    return finalMessage.join(' ') + '.';
}


// Call function to generate the message
console.log(messageGenerator());