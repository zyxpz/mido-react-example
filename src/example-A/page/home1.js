import { react as React, reactRedux } from 'mido-react';

const {
  connect
} = reactRedux;

const Home = (props) => {
  return (<div>
    {props.number}
    <button onClick={() => {props.dispatch({type: 'add'})}}>+1</button>
    <button onClick={() => {props.dispatch({type: 'reduce'})}}>-1</button>
  </div>)
}

export default connect((state) => ({ number: state.home.number }))(Home)