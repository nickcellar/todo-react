import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {setFilter} from "../actions/filterActions";

export class FilterButton extends React.Component {

  render() {
    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.active}
        style={{marginLeft: '4px'}}>
        {this.props.children}
      </button>
    )
  }
}

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilter(ownProps.filter))
});

export const FilterButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton);
