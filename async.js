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

fetch("https://cnodejs.org/api/v1/topics").then(x => x.json().then(json => json.data.map(s => console.log(s.title))))

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