# SuggestionBox
A little Angular app that lets you create, upvote, and comment on suggestions.

## Basics

### As a user:

* I want to be able to create a suggestion.
* I want to be able to upvote a suggestion.
* I want the most upvoted suggestions to rise to the top.
* I want to comment on a suggestion.

## Todos

* Remove mock data, serve persistent data from web API instead.
* Associate suggestions and comments with specific users.
* Prevent users from upvoting their own suggestions and comments.
* Limit users to a single upvote on other users' suggestions and comments.

## How to Run

### On MacOS
1. `git clone https://github.com/stevetoro/SuggestionBox.git`
2. `cd SuggestionBox`
3. `python -m SimpleHTTPServer 8000`
4. Visit `localhost:8000` in your web browser.
