/* eslint-disable no-unused-vars */
import { SearchProps } from '@/types/types'
import React from 'react'
import "./Search.css"

const Search = ({ setSearch, setPageNumber }: SearchProps) => {
  const searchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }
  return (
    <>
      <form>
        <input
          onChange={e => {
            setPageNumber(1)
            setSearch(e.target.value)
          }}
          placeholder="Search. . ."
          type="text"
          name="search"
          autoComplete="off"
        />
        <button
          onClick={searchBtn}
          className='search-btn'
        >
          Search
        </button>
      </form>
    </>
  )
}

export default Search
