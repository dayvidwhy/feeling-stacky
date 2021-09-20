# Exchange Query
Example of multiple calls to the [StackExchange API](https://api.stackexchange.com/) to find the top answer to a query.

## Installation
```bash
git clone https://github.com/dayvidwhy/exchange-query.git
cd exchange-query
npm install
npm run start
```

## Usage
Two types of queries are provided whether a loose or more relevant title search are queried.

The API provides separate query string parameters depending on whether the requested text should be within the title of the response, or if it can be elsewhere in the question asked.

Title searches involve setting `&title=...` while other searches set the query as `&q=...` to request questions from the StackExchange API.

The `/answers/` endpoint is then used to retrieve an answer associated with a question and displays the answer body to the user.

## Deployment
The application uses the web framework Vue and is built using webpack. A deploy command is provided that makes use of the `gh-pages` package to deploy the build `./dist` directory to the `gh-pages` branch and can then be hosted using GitHub pages.

```bash
npm run build   # package app into the ./dist folder
npm run deploy  # deploy to gh-pages branch
```

## Goals
Stack Overflow presents a large amount of information when you search for something, and I think over time the API search functionality can be extended to consider multiple answers and give the most appropriate one for the search.

## To-Do
* Improve search results.
* Use more features of the StackExchange API.
