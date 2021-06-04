import React from 'react';
import './MovieCard.css';

const MovieCards = () => {
    return(
        <>
            <div id="movie-card-list">
                <div className="movie-card">
                    <div className="color-overlay">
                    <img src={process.env.PUBLIC_URL + "/movie.svg"} alt="movie"/>
                        <div className="movie-content">
                            <div className="movie-header">
                                <h1 className="movie-title">Blade Runner</h1>
                                <h4 className="movie-info">(1982) Sci-Fi, Thriller</h4>
                            </div>
                            <p className="movie-desc">A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.</p>
                            <a className="btn btn-outline" href="./#">Watch Trailer</a>

                        </div>
                    </div>
            </div>
            </div>
        </>
    );
};

export default MovieCards;