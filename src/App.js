import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  plus = () => {
    console.log("Plus");
  };
  minus = () => {
    console.log("Minus");
  };
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

//react는 자동적으로 모든 class component의 r8
//state에는 바꾸고 싶은 데이터를 넣는다.
//그렇다면, App에서 data를 어떻게 바꿀 것인가 ?
//button에는 onClick이라는 prop이 기본적으로 들어 있다
