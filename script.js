console.log("script loaded.");

let currentPerson = {
    name: "Mother of Dragons",
    alias: "Storm Born",
    title: "Kahleesi",
    gender: "unsullied",
    books: "all"
};

function randomNumber(limit) {
    return Math.floor(Math.random() * limit);
}



const getCharacter = () => {
    return fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')
        .then(response => {
            const responseConst = response.json();
            // console.log(responseConst);
            return responseConst;
        })
        .then(responseConst => {
            const result = responseConst[`${(randomNumber(responseConst.length))}`];
            
            const character = {
                name: result.name,
                alias: result.aliases,
                title: result.titles,
                gender: result.gender,
                books: result.povBooks
            };
            console.log(character.alias);
            return character;
        });
};

getCharacter();
