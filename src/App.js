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
// ��ó�� state�� ���� �������� ���ʽÿ�. ���� state�� ���� �����Ϸ��� �ϸ�, react�� render function�� refresh ���� �ʱ� �����̴�.
//��, react�� �Ź��� state�� ������ �� render function �� ȣ���ؼ� �ٲ��ֱ� ���Ѵ�.
//setState�� ������� ������, �� state�� �Բ� render function�� ȣ����� ���� �̴ϴ�.
