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

//setState 의 default 값은 위와 값이 state 객체로 미리 지정할 필요는 없지만, 이렇게 하는 것이 좋은 습관,
//즉, setState의 argument 자리에서 새롭게 추가가 가능하다.
