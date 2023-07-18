import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Feedback from './Feedback/Feedback';
import { Section } from './Section/Section';
import Notification from './Notification/Notification';
import { Container } from './Container.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleRating = ratingItem => {
    this.setState(prevState => ({
      [ratingItem]: prevState[ratingItem] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Container>
          <Section title='Please leave feedback'>
            <Feedback
              ratings={keys}
              onLeaveFeedback={this.handleRating} 
            ></Feedback>
          </Section>
          <Section title='Statistics'>
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              ></Statistics>
            ) : (
              <Notification message='There is no feedback'></Notification>
            )}
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
