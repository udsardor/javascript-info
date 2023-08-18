let Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors";

function randomSymbol(randomNumber) {
  if (randomNumber > 0 && randomNumber < 0.3) {
    return Rock;
  } else if (randomNumber > 0.3 && randomNumber < 0.6) {
    return Paper;
  } else if (randomNumber > 0.6 && randomNumber < 1) {
    return Scissors;
  }
}

function result(stUser, ndUser) {
  if (stUser == ndUser) {
    console.log(
      `Durrang Birinchi user ${stUser} va ikkinchi user ${ndUser} birxil symbol tanladi`
    );
  } else if (stUser == Scissors && ndUser == Paper) {
    console.log(
      `Birinchi user ${stUser} tanladi va yutdi, ikkinchi user esa ${ndUser}`
    );
  } else if (stUser == Rock && ndUser == Scissors) {
    console.log(
      `Birinchi user ${stUser} tanladi va yutdi, ikkinchi user esa ${ndUser}`
    );
  } else if (stUser == Paper && ndUser == Rock) {
    console.log(
      `Birinchi user ${stUser} tanladi va yutdi, ikkinchi user esa ${ndUser}`
    );
  } else {
    console.log(
      `Ikkinchi user ${ndUser} tanladi va yutdi, birinchi user esa ${stUser}`
    );
  }
}

result(randomSymbol(Math.random()), randomSymbol(Math.random()));