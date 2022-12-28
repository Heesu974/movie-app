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

//react�� �ڵ������� ��� class component�� r8
//state���� �ٲٰ� ���� �����͸� �ִ´�.
//�׷��ٸ�, App���� data�� ��� �ٲ� ���ΰ� ?
//button���� onClick�̶�� prop�� �⺻������ ��� �ִ�
