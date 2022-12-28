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

//react Class component �� render����,
//life cycle method�� ���µ�, �̴� �⺻������ react�� component�� �����ϰų�, ���ִ� ����̴�.
//component�� ������Ʈ�� ��, ȣ��Ǵ� �ٸ� function�� �ִ�.

//1. mounting
//-����ȣ��Ǵ� function�� �ϳ� �ִµ�, constructor�̴�. (js���� class�� ���� �� ȣ��Ǵ� function)
//component�� mount�� ��, component�� screen�� ǥ�õ� ��, component�� ���� website�� �� ��, constructor�� ȣ���Ѵ�. �� ���� render ����. �� �ٸ� componentDidMount �Լ� ����.
//componentDidMount�� hey this component is rendered at very first time.

//2. updating
//-state�� �����ϸ� �װ� ������Ʈ�̴�.

//3. unMounting
