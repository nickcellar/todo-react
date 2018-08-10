import React from 'react'
import FilterLinkContainer from '../containers/FilterLinkContainer'
import {VisibilityFilters} from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLinkContainer filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLinkContainer>
    <FilterLinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLinkContainer>
    <FilterLinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLinkContainer>
  </div>
);

export default Footer
