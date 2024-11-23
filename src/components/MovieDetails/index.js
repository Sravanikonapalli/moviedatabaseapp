import {Link} from 'react-router-dom'
import './index.css'

const MovieDetails = ({movieDetails}) => {
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="movie-card-container">
      <img
        className="movie-card-image"
        role="img"
        alt={title}
        src={posterPath}
      />
      <div>
        <h1 className="movie-title">{title}</h1>
        <p className="movie-rating">Rating: {voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`} className="btn">
        <button className="view-details-btn" type="button" role="button">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieDetails

// const MovieDetails = ({movieDetails}) => (
//   <li className="movie-item">
//     <img
//       src={movieDetails.posterPath}
//       alt={movieDetails.title}
//       className="movie-poster"
//     />
//     <h2>{movieDetails.title}</h2>
//     <p>{`Rating: ${movieDetails.voteAverage}`}</p>
//     <button type="button">View Details</button>
//   </li>
// )

// export default MovieDetails
