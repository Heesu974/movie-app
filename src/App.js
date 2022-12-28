import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies1 = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );

    //���� �� data�� name�� �����ϰ� ���� ��, ������movies1.data.data.movies

    const {
      data: {
        data: { movies },
      },
    } = movies1;

    //���ǿ����� ���� movies1.data.data.movies �� �ҷ��� ��,
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
    console.log(movies);
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
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;

//setState �� default ���� ���� ���� state ��ü�� �̸� ������ �ʿ�� ������, �̷��� �ϴ� ���� ���� ����,
//��, setState�� argument �ڸ����� ���Ӱ� �߰��� �����ϴ�.

//axios �� ��ġ

//axios�� �׻� ���� ���� �ƴϴ�. ���� js���� api���� �����͸� �޴� �Լ��� ���� ������ �ణ �ð��� �ɸ� �� �ִٰ� ���ؾ� �Ѵ�. > async
//�׷� js�� ������. �װ� ����ִµ� ? ���� �� ��ٸ��� ���ϴµ�??  "axios.get �� ���������� ��ٷ��� " > await.

//api�� ���� ���� movies �����͸� state �ȿ� �ִ� ���� ��ǥ
