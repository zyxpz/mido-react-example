import Mido, { react as React } from 'mido-react'

import Home from '../page/home1';

const mido = Mido();

mido.model({
  namespace: 'home',
  state: {
    number: 1
  },
  reducers: {
    add(state, action) {
      return {
        number: state.number + 1
      }
    },
    reduce(state, action) {
      return {
        number: state.number - 1
      }
    },
  },
  subscriptions: {

  }
});

mido.router(() => <Home/>)

mido.run(document.getElementById('app'))