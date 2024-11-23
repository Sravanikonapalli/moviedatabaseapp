// import {Switch, Route, BrowserRouter} from 'react-router-dom'

// import HomePage from './components/HomePage'

// import Navbar from './components/Navbar'

// import TopRatedPagePage from './components/TopRatedPagePage'
// import UpcomingPagePage from './components/UpcomingPagePage'
// import MovieDetailsPage from './components/MovieDetailsPage'

// import './App.css'

// // write your code here
// const App = () => (
//   <BrowserRouter>
//     <Navbar />
//     <Switch>
//       <Route exact path="/" component={HomePage} />
//       <Route path="/top-rated" component={TopRatedPagePage} />
//       <Route path="/upcomingPage" component={UpcomingPagePage} />
//       <Route path="/movie/:id" component={MovieDetailsPage} />
//     </Switch>
//   </BrowserRouter>
// )

// export default App

import {useState} from 'react'
import {Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage'
import TopRatedPage from './components/TopRatedPage'
import UpcomingPage from './components/UpcomingPage'
import SearchQueryPage from './components/SearchQueryPage'

import MovieContext from './context/MovieContext'

import './App.css'

const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da'

// write your code here
const App = () => {
  const [searchResponse, setSearchResponse] = useState({})
  const [apiStatus, setApiStatus] = useState('INITIAL')
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearchInput = text => setSearchInput(text)

  const getUpdatedData = responseData => ({
    totalPages: responseData.total_pages,
    totalResults: responseData.total_results,
    results: responseData.results.map(eachMovie => ({
      id: eachMovie.id,
      posterPath: `https://image.tmdb.org/t/p/w500${eachMovie.poster_path}`,
      voteAverage: eachMovie.vote_average,
      title: eachMovie.title,
    })),
  })

  const onTriggerSearchQuery = async (page = 1) => {
    setApiStatus('IN_PROGRESS')
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInput}&page=${page}`

    const response = await fetch(apiUrl)
    const data = await response.json()
    setSearchResponse(getUpdatedData(data))
    setApiStatus('SUCCESS')
  }

  return (
    <MovieContext.Provider
      value={{
        searchResponse,
        apiStatus,
        onTriggerSearchQuery,
        searchInput,
        onChangeSearchInput,
      }}
    >
      <div className="App d-flex flex-column">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/top-rated" component={TopRatedPage} />
          <Route exact path="/upcoming" component={UpcomingPage} />
          <Route exact path="/search" component={SearchQueryPage} />
        </Switch>
      </div>
    </MovieContext.Provider>
  )
}

export default App
