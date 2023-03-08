import PropTypes from 'prop-types';
import React from "react"
import { Paragraph, Span } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {

    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <Paragraph>Positive feedback:
              {positivePercentage === 50 && <Span style={{backgroundColor: '#ffa500'}}>{positivePercentage} %</Span>}
              {positivePercentage < 50 && <Span style={{backgroundColor: '#ff0000'}}>{positivePercentage} %</Span>}
              {positivePercentage > 50 && <Span style={{backgroundColor: '#3cb371'}}>{positivePercentage} %</Span>}
            </Paragraph>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}