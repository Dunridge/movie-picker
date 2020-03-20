import React from 'react';
import './App.css';
// import { movieData } from './components/movieData';
import MovieItem from './components/movieItem';
import 'bootstrap/dist/css/bootstrap.css';
//let title = 'Hello, World!';

//UI = function(state, props)
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [], //movieData
            moviesWillWatch: []
        };
        console.log("constructor")
    }

    componentDidMount() {
        console.log("Did mount")
        fetch("http://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&sort_by=popularity.asc").then((response) => {  //&sort_by=popularity.desc
            console.log('then');
            return response.json();
        }).then((data) => {
            console.log('data: ', data);
            this.setState({ movies: data.results })
        });
        console.log('after fetch');
    }

    //callback
    handleDelete = movie => {
        const newMoviesList = this.state.movies.filter(item => {
            return item.id !== movie.id;
        });

        console.log(newMoviesList);

        this.setState({ movies: newMoviesList });
        // console.log(movie.id)
    };

    removeMovie = movie => {
        const newMoviesList = this.state.movies.filter(item => {
            return item.id !== movie.id;
        });

        console.log(newMoviesList);

        this.setState({ movies: newMoviesList });
    };

    addMovieToWillWatch = movie => {
        console.log(movie); 
        // console.log("addMovieToWillWatchFunc called")
        const movieList = [...this.state.moviesWillWatch, movie];
        this.setState({moviesWillWatch: movieList})

    }

    removeMovieFromWillWatch = movie => {
        const newMoviesWillWatch = this.state.moviesWillWatch.filter(item => {
            return item.id !== movie.id;
        });

        this.setState({ 
            moviesWillWatch: newMoviesWillWatch 
        });
    };

    render() {
        // console.log(this);
        console.log("render")
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.movies.map(movie => {
                                return (
                                    <div className="col-6 mb-4" key={movie.id}>
                                        <MovieItem
                                            movie={movie}
                                            // movies={this.state.movies}
                                            removeMovie={this.removeMovie}
                                            addMovieToWillWatch={this.addMovieToWillWatch}
                                            removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will watch {this.state.moviesWillWatch.length}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
