app.factory('suggestions', [function () {

  let demoSuggestions = {
    posts: [
      {
        id: 0, 
        title: "Rewrite the front end in React",
        upvotes: 18,
        comments: [],
      },
      {
        id: 1,
        title: "Add a Node.js/MongoDB back end",
        upvotes: 23,
        comments: [],
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
