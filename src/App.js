import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? <h1>Loading ... </h1> : <h1>We are ready</h1>}</div>
    );
  }
}
export default App;

//setState �� default ���� ���� ���� state ��ü�� �̸� ������ �ʿ�� ������, �̷��� �ϴ� ���� ���� ����,
//��, setState�� argument �ڸ����� ���Ӱ� �߰��� �����ϴ�.
