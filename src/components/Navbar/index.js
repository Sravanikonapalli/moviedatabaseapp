import {Link, withRouter} from 'react-router-dom'

import SearchMoviesContext from '../../context/MovieContext'

import './index.css'

const Navbar = props => {
  const SearchQuery = () => (
    <SearchMoviesContext.Consumer>
      {value => {
        const {onTriggerSearchQuery, onChangeSearchInput, searchInput} = value

        const changeInput = event => onChangeSearchInput(event.target.value)

        const searchHandler = event => {
          event.preventDefault()
          const {history} = props
          onTriggerSearchQuery()
          history.push(`/search`)
        }

        return (
          <div className="search-bar">
            <input
              type="text"
              value={searchInput}
              onChange={changeInput}
              placeholder="Search"
              className="search"
            />
            <button
              type="button"
              onChange={searchHandler}
              className="search-btn"
            >
              Search
            </button>
          </div>
        )
      }}
    </SearchMoviesContext.Consumer>
  )

  return (
    <nav className="navabr">
      <div className="logo">
        <h1 className="page-logo">movieDB</h1>
      </div>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/top-rated" className="nav-link">
              Top Rated
            </Link>
          </li>
          <li>
            <Link to="/upcoming" className="nav-link">
              Upcoming
            </Link>
          </li>
        </ul>
        {SearchQuery()}
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
