import React from 'react'
import {VisibilityFilters} from '../actions'
import {FilterButtonContainer} from "./FilterButton";

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterButtonContainer filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterButtonContainer>
    <FilterButtonContainer filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterButtonContainer>
    <FilterButtonContainer filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterButtonContainer>
  </div>
);

export default Footer
