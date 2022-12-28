import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    return console.log("constructor executed");
  }
  state = {
    count: 0,
  };
  plus = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("componentDidMount executed");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate executed");
  }
  render() {
    console.log("render executed");
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

//react Class component 는 render말고도,
//life cycle method를 갖는데, 이는 기본적으로 react가 component를 생성하거나, 없애는 방법이다.
//component가 업데이트될 때, 호출되는 다른 function이 있다.

//1. mounting
//-먼저호출되는 function이 하나 있는데, constructor이다. (js에서 class를 만들 때 호출되는 function)
//component가 mount될 때, component가 screen에 표시될 때, component가 너의 website에 들어갈 때, constructor를 호출한다. 그 다음 render 실행. 그 다름 componentDidMount 함수 실행.
//componentDidMount는 hey this component is rendered at very first time.

//2. updating
//-state를 변경하면 그게 업데이트이다.

//3. unMounting
