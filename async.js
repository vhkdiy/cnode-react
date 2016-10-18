function getStarsNumber(url) {
  fetch(url)
    .then((data) => {
      return data.text();
    })
    .then((text) => {
      return JSON.parse(text);;
    })
    .then((json) => {
      console.log('promises', json.stargazers_count);
    })
    .catch((error) => {
      console.error(error);
    });
}

getStarsNumber('http://api.github.com/repos/lodash/lodash');

async function asyncGetStarsNumber(url) {
  try {
    const data = await fetch(url);
    const text = await data.text();
    const json = await JSON.parse(text);
    console.log('async/await', json.stargazers_count);
  } catch (error) {
    console.log(error);
  }
}

asyncGetStarsNumber('http://api.github.com/repos/lodash/lodash');