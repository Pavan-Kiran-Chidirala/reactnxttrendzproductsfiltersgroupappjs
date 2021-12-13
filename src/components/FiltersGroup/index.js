import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    searchDataBase,
    categoryOptions,
    ratingsList,
    filterClick,
    ratingClick,
    clearFilters,
    changeInput,
    category,
    rating,
    titleSearch,
  } = props
  const searchBase = e => {
    if (e.key === 'Enter') {
      searchDataBase()
    }
  }
  const searchInput = e => {
    changeInput(e.target.value)
  }
  return (
    <div className="filters-group-container">
      <div className="searchbar-holder">
        <input
          type="search"
          className="search-bar"
          placeholder="Search"
          onChange={searchInput}
          onKeyDown={searchBase}
          value={titleSearch}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="category">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(eachData => (
          <li key={eachData.categoryId} className="category-item">
            <button
              type="button"
              className={`category-btn ${
                eachData.categoryId === category ? 'add-color' : ''
              }`}
              onClick={() => filterClick(eachData.categoryId)}
            >
              <p>{eachData.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1 className="category">Rating</h1>
      <ul className="category-list">
        {ratingsList.map(eachData => (
          <li key={eachData.ratingId} className="category-item">
            <button
              type="button"
              className={`rating-holder ${
                eachData.ratingId === rating ? 'add-color' : ''
              }`}
              onClick={() => ratingClick(eachData.ratingId)}
            >
              <img
                src={eachData.imageUrl}
                className="rating-image"
                alt={`rating ${eachData.ratingId}`}
              />
              <span className="up">&up</span>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
