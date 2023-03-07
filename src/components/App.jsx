import React from "react"
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] +1
    }));
    // if (name === 'good') {
    //   this.setState((prevState) => ({
    //     good: prevState.good + 1
    //   }));
    // }
    // if (name === 'neutral') {
    //   this.setState((prevState) => ({
    //     neutral: prevState.neutral +1
    //   }));
    // }
    // if (name === 'bad') {
    //   this.setState((prevState) => ({
    //     bad: prevState.bad + 1,
    //   }));
    // }
  };

  render(){
    const { good, neutral, bad } = this.state;
    const optionNames = Object.keys(this.state);

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100);

    return (
    <Layout>
      <GlobalStyle/>
      <Section title="Please leave feedback">
        <FeedbackOptions options={optionNames} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? 
        (<Statistics 
          good={this.state.good} 
          neutral={this.state.neutral} 
          bad={this.state.bad} 
          total={countTotalFeedback} 
          positivePercentage={countPositiveFeedbackPercentage}/>) : (<Notification message="There is no feedback"/>)}
      </Section>
    </Layout>
  )
 }
}
