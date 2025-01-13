import { useState } from 'react'

const INITIAL_FRUITS = ['Apple', 'Banana', 'Orange']

function SearchTab() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(INITIAL_FRUITS)

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
    setResults(
      value ? INITIAL_FRUITS.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      ) : INITIAL_FRUITS
    )
  }

  return (
    <div className="search-tab">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search fruits..."
      />
      {results.length && (
        <div className="results">
          {results.map((result, index) => (
            <div key={index} className="result-item">
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchTab 