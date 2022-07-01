import React,{Component} from "react";
import {deleteMovie, getMovies} from "../services/fakeMovieService";
import '../mycss.css';
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import ListGroup from "./common/listGroup";
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from 'lodash';

export class Movies extends Component {
    state = {
        movies:[],
        genres:[],
        currentPage:1,
        pageSize:4,
        sortColumn:{path:'title',order:'asc'}
    };
    componentDidMount() {
        const genres = [{_id:'',name:'All Genres'},...getGenres()]
        this.setState({movies: getMovies(),genres})
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id != movie._id);
        this.setState({movies})
    }
    showDeleteMessage = () => {
        if(this.state.movies.length === 0) {
            return 'there is no movie in the database';
        } else {
            return (this.state.movies.length);
        }
    }
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }
    handlePageChange = (page) => {
        this.setState({currentPage:page});
    }
    handleGenreSelect = (genre) => {
        this.setState({selectedGenre:genre,currentPage:1});
    }
    handleSort = (sortColumn) => { // needs an argument . which gets it from TableHeader Component.
        this.setState({sortColumn});
    }
    getPagedData = () => {
        const {pageSize,currentPage,movies,selectedGenre,sortColumn} = this.state;
        const filtered = selectedGenre && selectedGenre._id ? (movies.filter(m => m.genre._id === selectedGenre._id)) : movies;
        const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order])
        const moviesNumber = paginate(sorted,currentPage,pageSize);
        return {totalCount:filtered.length,moviesNumber,sorted}
    }

    render() {
        const {length:count} = this.state.movies;
        const {pageSize,currentPage,movies,selectedGenre,sortColumn} = this.state;
        const {moviesNumber,totalCount,sorted} = this.getPagedData();
        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup items={this.state.genres}
                    onItemSelect={this.handleGenreSelect}
                    selectedItem={this.state.selectedGenre}
                    />
                </div>
                <div className="col">
                    <MoviesTable
                        movies={moviesNumber}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                        sortColumn={sortColumn}
                    />
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>

            </div>
        )
    }
}