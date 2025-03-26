import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './AddMovie.css';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, director, genre, releaseYear, synopsis, posterUrl };
    console.log('New Movie Added:', newMovie);
    // Add logic to save the movie
  };

  return (
    <div className="add-movie-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        &#8592; Go Back
      </button>
      <div className="add-movie-card">
        <h2>Add a New Movie</h2>
        <form onSubmit={handleSubmit} className="add-movie-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter movie title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="director">Director</label>
            <input
              id="director"
              type="text"
              placeholder="Enter director's name"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              id="genre"
              type="text"
              placeholder="Enter movie genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="releaseYear">Release Year</label>
            <input
              id="releaseYear"
              type="number"
              placeholder="Enter release year"
              value={releaseYear}
              onChange={(e) => setReleaseYear(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis">Synopsis</label>
            <textarea
              id="synopsis"
              placeholder="Enter movie synopsis"
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="posterUrl">Poster URL</label>
            <input
              id="posterUrl"
              type="text"
              placeholder="Enter poster URL"
              value={posterUrl}
              onChange={(e) => setPosterUrl(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
