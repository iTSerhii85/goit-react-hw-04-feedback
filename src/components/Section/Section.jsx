import PropTypes from 'prop-types';
import React from "react";

export const Section = ({ title, children }) => {
    return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
    )
};

Section.propTypes = {
  title: PropTypes.string.isRequired
}