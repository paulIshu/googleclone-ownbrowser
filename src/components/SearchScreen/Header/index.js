import React from 'react'
import SearchHeader from './SearchHeader'
import SubSearchHeader from './SubSearchHeader'

const Header = ({searchTerm ,setSearch,openVoiceSearch}) => {
  return (
    <>
      <SearchHeader searchTerm ={searchTerm} setSearch={setSearch} openVoiceSearch={openVoiceSearch}/>
      <SubSearchHeader/>
    </>
  )
}

export default Header
