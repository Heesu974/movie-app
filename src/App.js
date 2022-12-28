import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  plus = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
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

//minus = () => {
//  this.state.count : - 1;
//}
// 이처럼 state를 직접 변경하지 마십시오. 내가 state를 직접 변경하려고 하면, react는 render function을 refresh 하지 않기 때문이다.
//즉, react는 매범ㄴ state를 변경할 때 render function 을 호출해서 바꿔주길 원한다.
//setState를 사용하지 않으면, 새 state와 함께 render function이 호출되지 않을 겁니다.
