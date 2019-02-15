import React, { Component } from 'react';
import cards from './cards.json';
import CharacterCard from './components/CharacterCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  youLose = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`You Lost :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    // eslin-disable-next-line
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.youLose();
        }
      }
    });
  }


  render() {
    return (

      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>South Park Clicky Game!! </Title>
        {this.state.cards.map(cards => (
          <CharacterCard
            clickCount={this.clickCount}
            id={cards.id}
            key={cards.id}
            name={cards.name}
            image={cards.image}
          />
        ))}
      </Wrapper>

    );
  }
}

export default App;
