import { useState } from 'react';
//import components
import TweetList from './components/tweetList';
import CreateTweet from './components/createTweet';

function App() {
  //State
  const [name, setName] = useState('dev ed');
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const message = 'hello';
  return (
    <div className="app">
      <CreateTweet
        setTextInput={setTextInput}
        textInput={textInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
