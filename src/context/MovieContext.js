import {createContext} from 'react'

const SearchMoviesContext = createContext({
  searchResponse: {},
  onTriggerSearchQuery: () => {},
})

export default SearchMoviesContext
