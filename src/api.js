// class APIClient {
//   constructor(key) {
//     this.key = key;
//   }

//   getTopics() {
//     this.fetch(`https://cnodejs.org/api/v1/topics`)
//   }

//   fetch(url) {
//     const data = await fetch(url,
//       headers: {
//         "API_KEY": this.key
//       }
//     );
//     const json = await data.json();

//     if (json.error) {
//       throw new Error(json.error);
//     }

//     return json.data;
//   }
// }

async function get(url) {
  const data = await fetch(url);
  const json = await data.json();

  if (json.error) {
    throw new Error(json.error);
  }

  return json.data;
}

// API_KEY=...

export async function getTopics(tag = '', page = '') {
  if (tag || page) {
    return get(`https://cnodejs.org/api/v1/topics?tab=${tag}&page=${page}`)
  } else {
    return get(`https://cnodejs.org/api/v1/topics`)
  }
}

export async function getTopic(id) {
  return get(`https://cnodejs.org/api/v1/topic/${id}`)
}

export async function getUserData(name) {
  return get(`https://cnodejs.org/api/v1/user/${name}`)
}