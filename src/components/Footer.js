import React from 'react'
import {FilterButtonContainer} from "./FilterButton";
import {Filter} from "../actions/filterActions";

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterButtonContainer filter={Filter.SHOW_ALL}>
      All
    </FilterButtonContainer>
    <FilterButtonContainer filter={Filter.SHOW_ACTIVE}>
      Active
    </FilterButtonContainer>
    <FilterButtonContainer filter={Filter.SHOW_COMPLETED}>
      Completed
    </FilterButtonContainer>
  </div>
);

export default Footer
