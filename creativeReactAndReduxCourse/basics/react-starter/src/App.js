import { useState, useEffect } from 'react';
//import components
import TweetList from './components/tweetList';
import CreateTweet from './components/createTweet';
import './styles/tweet.scss';

function App() {
  //State
  //use effect takes two arguments
  useEffect(() => {
    console.log('We run a function yeyy');
  }, []);
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
