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



function getCharacter() {
  return fetch('https://www.anapioficeandfire.com/api/characters?page=1-50&pageSize=50')
    .then(response => {
      const responseConst = response.json();
      //   console.log(responseConst);
      return responseConst;
    })
    .then(responseConst => {
      const result = responseConst[`${(randomNumber(responseConst.length))}`];

      const character = {
        name: result.name,
        alias: result.aliases,
        title: result.titles,
        gender: result.gender,
        url: result.url,
      };
        console.log(character);
      return character;
    })
    .then(character => {
      $('button').click(function () {
        let charName = $('#name').html(character.name);
        let charAlias = $('#alias').html(character.alias + ', ');
        let charTitle = $('#title').html(character.title + ', ');
        let charGender = $('#gender').html(character.gender);
        let charUrl = $('#url').attr('href', `${character.url}`);
          console.log(character);
      });
    });
}

// getCharacter();
