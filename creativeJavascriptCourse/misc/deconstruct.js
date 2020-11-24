//Deconstruct
const items = ['banana', 'chocolate noodle', 'apple', 'cheese'];
// const apple = items[2]; This is the old way of asigning a variable to array item

// const [banana, chocolate, apple, cheese] = items;
const [banana, chocolate, ...rest] = items;
// the above operator is called the rest operator
console.log(rest);
const newItem = [...items, 'mango'];

console.log(newItem);

const user = {
  name: 'Ed',
  photos: [1, 2, 3, 4, 5, 6, 7],
  age: 25,
  analytics: {
    subscribers: 25000,
    videos: 250,
  },
};

const photos = user.photos;
console.log(photos);
const subs = user.analytics.subscribers;
console.log(subs);

const { subscribers, videos } = user.analytics;

console.log(subscribers, videos);
