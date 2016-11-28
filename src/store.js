import { createStore, combineReducers } from 'redux';
import Immutable from 'seamless-immutable';

const initialStateTopics = {
  topics: [],
  isLoading: true,
}

const initialStateTopic = {
  topicContent: [],
  userData: [],
  isLoading: true,
}

const topicListReducer = (state = Immutable(initialStateTopics), action) => {
  switch (action.type) {
    case 'LOAD_TOPICS':
      return state.merge({topics: action.topics, isLoading: action.isLoading})
    default:
      return state;
  }
}

const topicContentReducer = (state = Immutable(initialStateTopic), action) => {
  switch (action.type) {
    case 'LOAD_TOPIC':
      return state.merge({topicContent: action.topicContent, userData: action.userData, isLoading: action.isLoading})
    default:
      return state;
  }
}

const store = createStore(combineReducers({topicList: topicListReducer, topic: topicContentReducer}), window.devToolsExtension && window.devToolsExtension());

export default store;