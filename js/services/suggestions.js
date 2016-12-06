app.factory('suggestions', [function () {

  let demoSuggestions = {
    posts: [
      {
        title: "Rewrite the front end in React",
        upvotes: 18,
        comments: [],
      },
      {
        title: "Add a Node.js/MongoDB back end",
        upvotes: 23,
        comments: [],
      },
      {
        title: "Deploy on Heroku",
        upvotes: 5,
        comments: [],
      }
    ]
  };
  
  return demoSuggestions;
}]);
