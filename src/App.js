import React, { Component } from "react";
import FriendCard from "./components/FriendCard/";
import Counter from "./components/Counter";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

function shuffle(arr) {
  var i,j,temp;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;    
};

shuffle(friends)

class App extends Component {
  state = {
    friends: friends,
    count: 0,
    picked: []
  };

  handleIncrement = (id) => {
    console.log(`Clicked ${id}` );

    if(this.state.picked.includes(id)){
      this.setState({count: 0, picked: []});
      shuffle(friends);
    }
    else{
      this.state.picked.push(id);
      this.setState({ count: this.state.count + 1 });
      shuffle(friends);
    }
  };

  render() {
    return (
     
      <Wrapper>
        <Title>Clicky Game</Title>
        <Counter count={this.state.count} />
        
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleIncrement={this.handleIncrement}
          />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
