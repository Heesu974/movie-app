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

//setState 의 default 값은 위와 값이 state 객체로 미리 지정할 필요는 없지만, 이렇게 하는 것이 좋은 습관,
//즉, setState의 argument 자리에서 새롭게 추가가 가능하다.

//axios 의 설치

//axios는 항상 빠른 것이 아니다. 따라서 js에게 api에서 데이터를 받는 함수가 끝날 때까지 약간 시간이 걸릴 수 있다고 말해야 한다. > async
//그럼 js는 묻겠지. 그게 어디있는데 ? 내가 뭘 기다리길 원하는데??  "axios.get 이 끝날때까지 기다려줘 " > await.
