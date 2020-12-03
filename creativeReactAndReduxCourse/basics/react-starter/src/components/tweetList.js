import Tweet from './tweet.js';

const TweetList = ({ name, tweets, setTweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            name={name}
            tweet={tweet}
            setTweets={setTweets}
            tweets={tweets}
          />
        );
      })}
    </div>
  );
};
export default TweetList;
