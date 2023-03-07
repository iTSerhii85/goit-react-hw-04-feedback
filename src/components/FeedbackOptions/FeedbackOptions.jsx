import React from "react";
import PropTypes from 'prop-types';
import { Button, ButtonBlock } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <ButtonBlock>
        {options.map(name => {
            return (
            <Button
             type="button"
             onClick={() => onLeaveFeedback(name)}
             key={name}>
                {name}
            </Button>)})} 
    </ButtonBlock>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
