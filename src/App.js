import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const movies = await axios.get("https://api.coinpaprika.com/v1/tickers");
  };
  componentDidMount() {
    this.getMovies();
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

//axios �� ��ġ

//axios�� �׻� ���� ���� �ƴϴ�. ���� js���� api���� �����͸� �޴� �Լ��� ���� ������ �ణ �ð��� �ɸ� �� �ִٰ� ���ؾ� �Ѵ�. > async
//�׷� js�� ������. �װ� ����ִµ� ? ���� �� ��ٸ��� ���ϴµ�??  "axios.get �� ���������� ��ٷ��� " > await.
