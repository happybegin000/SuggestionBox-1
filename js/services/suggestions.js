app.factory('suggestions', [function () {

  let demoSuggestions = {
    posts: [
      {
        id: 0, 
        title: "Rewrite the front end in React",
        upvotes: 18,
        comments: [{body: "Hell yeah.", upvotes: 2}],
      },
      {
        id: 1,
        title: "Add a Node.js/MongoDB back end",
        upvotes: 23,
        comments: [{body: "Or Firebase?", upvotes: 3}],
      },
      {
        id: 2,
        title: "Deploy on Heroku",
        upvotes: 5,
        comments: [],
      }
    ]
  };
  
  return demoSuggestions;
}]);
