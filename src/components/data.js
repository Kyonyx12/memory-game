/*  GETTING IMAGES */
let images = [];

/* RANDOM IMAGES */
let randomImg = [];

/* ALL POSSIBILITIES TO WIN  */
const all = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9]
];
const init = () => {
  /* CLEANING */
  images = [];
  randomImg = [];
  /*  GETTING IMAGES */
  for (let i = 1; i <= 10; i++) {
    if (i < 10) {
      images.push(
        `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${i}.png`
      );
    } else {
      images.push(
        `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${i}.png`
      );
    }
  }

  /* RANDOM IMAGES */
  const randomPushImg = () => {
    let randomNumber = Math.floor(Math.random() * images.length);
    if (randomImg.includes(randomNumber)) return;
    else {
      randomImg.push(randomNumber);
    }
  };

  const randomize = () => {
    while (randomImg.length < 10) {
      randomPushImg();
    }
  };

  randomize();
};
init();
export { images, randomImg, all, init };
