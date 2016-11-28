function requestPosts(subreddit) {
  return { type: 'REQUEST_POSTS', subreddit }
}

function receivePosts(subreddit, json) {
  return { type: 'RECEIVE_POSTS', id }
}

export function fetchPosts(dispatch, text) {
  dispatch(requestPosts(subreddit))

  fetch(`https://cnodejs.org/api/v1/topics`)
    .then(result => result.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
    .catch(error => dispatchError())
}