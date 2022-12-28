import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies1 = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );

    //예를 들어서 data의 name에 접근하고 싶을 때, 원문은movies1.data.data.movies

    const {
      data: {
        data: { movies },
      },
    } = movies1;

    //강의에서는 같은 movies1.data.data.movies 를 불러올 때,
    // const {
    //   data: { data: movies },
    // } = await axios.get(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    // );
    this.setState({ movies, isLoading: false });
    // this.setState({movies from state: movies from axios. isLoading : false})
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;

//setState 의 default 값은 위와 값이 state 객체로 미리 지정할 필요는 없지만, 이렇게 하는 것이 좋은 습관,
//즉, setState의 argument 자리에서 새롭게 추가가 가능하다.

//axios 의 설치

//axios는 항상 빠른 것이 아니다. 따라서 js에게 api에서 데이터를 받는 함수가 끝날 때까지 약간 시간이 걸릴 수 있다고 말해야 한다. > async
//그럼 js는 묻겠지. 그게 어디있는데 ? 내가 뭘 기다리길 원하는데??  "axios.get 이 끝날때까지 기다려줘 " > await.

//api로 부터 얻은 movies 데이터를 state 안에 넣는 것이 목표
