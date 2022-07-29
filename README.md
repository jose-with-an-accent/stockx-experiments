# unofficial StockX read-only API experiments

*Updated 07/29/2022* - Notice: it's still under development so the gql queries might have to be moved inline to work.

This is a repository containing basic information on how to use the StockX API. As far as I know, it can be accesed without a cookie or specific authentication, but CloudFlare might control access to it depending on whether the main page has been visited, or many requests have been sent.

# Command-line usage
The index.js script included in this repository contains two functions - productSearch and productDetails. These are self-explanatory; ```node index.js search *term*``` brings up a JSON array of products matching the search term, as well as a bunch of info. ```node index.js product *term*``` shows information on the specific product's ID.

# Using the gQL schema
## What is graphQL?
A more developer-friendly way of making APIs (at least for frontend ones, lol). It's a language that's different to JS, where you can customize what you need. For example, if you wanted to get image URLs, you could just add 

```gql
media {
    thumbURL
}
```
anywhere near line 30 on the search page. There's a lot more info [here](https://graphql.org/).

## Four Simple Steps to Using their API!

1. Create a graphQL client - lines 17 to 25 are examples of these.
2. Add the query. Line 6 is where the search query would be at if it weren't in a separate file.
3. Call ```await gqlClient.rawRequest``` and pass the search query, as well as variables (required ones should be on the .gql files next to the *query* word). 
4. Consume the data in whatever way's needed. 

## Removed Sections
Since it seemed irrelevant to me, I removed the Hazardous and Urgency Badge sections. It can be re-added with just a few keystrokes, and in general their API is very modular, if a bit redundant.

In the future I may turn this into a nodejs package.