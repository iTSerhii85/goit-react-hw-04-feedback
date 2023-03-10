import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

export const App =()=> {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const onLeaveFeedback = (name) => {
    if (name === 'good') {setGood(prevState => prevState +1)}
    if (name === 'neutral') {setNeutral(prevState => prevState +1)}
    if (name === 'bad') {setBad(prevState => prevState + 1);}
  };

  const optionNames = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad || null;
  const goodPercent = Math.round(good / totalFeedback * 100);

    return (
    <Layout>
      <GlobalStyle/>
      <Section title="Please leave feedback">
        <FeedbackOptions options={optionNames} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {!totalFeedback ? (<Notification message="There is no feedback"/>) :
          (<Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={totalFeedback} 
              positivePercentage={goodPercent}
           />)}
      </Section>
    </Layout>
  )
}
