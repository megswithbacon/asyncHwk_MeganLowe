
// funt that returns a Promise and a random number between 1 and 10
const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const rand = Math.round(Math.random() * 10);
        resolve(rand);
      } catch (err) {
        reject(new Error(err));
      }
    }, 500);
  });
};

// function that instantiates getRandomNumber() and prints value to console after Promise is resolved
async function randResult() {
  await getRandomNumber()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// invoke async function to test Promise and get a Random Number
randResult();




// fetches city data from url, converts to JSON, console log Lattitude and Longtitude of city
async function cityFinder(city) {
  const date = await fetch(`https://geocode.xyz/${city}?json=1`)
    .then((response) => response.json())
    .then((data) =>
      console.log(`${city} : Longtitude: ${data.longt} Lattitude: ${data.latt}`)
    )
    .catch((onErr) => new Error(onErr));
}

// invoke async function and test with different city names
cityFinder("Seattle");
cityFinder("Dallas");
cityFinder("Shreveport");
