'use strict'
async function asyncGetData(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
}

export default asyncGetData;