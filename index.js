import { gql, GraphQLClient, request } from 'graphql-request'
import fetchCookie from 'fetch-cookie';
import nodeFetch from 'node-fetch';

const endpoint = 'https://stockx.com/api/p/e';

const searchQuery = gql``;

const productDetailsQuery = gql``;

const options = {
    currency: "USD",
    country: "US"
}


  const gqlClient = new GraphQLClient(endpoint, {
    headers: {
        "Accept": "application/json", 
        // "Alt-Used": "stockx.com", 
        // "Host": "stockx.com", 
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0", 
        "apollographql-client-name": "Iron", 
        "apollographql-client-version": "12"} // change this later to match a more realistic client version!
  })


  async function main() {
    switch(process.argv[2]) {
        case "search":
            await productSearch(process.argv[3]);
            break;
        case "product":
            productDetails(process.argv[3]);

    }
  }
  async function productSearch(searchTerm) {
    const data = await gqlClient.rawRequest(searchQuery, {query: searchTerm, page: {index: 1, limit: 10}, sort: {id: "featured", order: "DESC"}});
    console.log(JSON.stringify(data.data.browse.results, undefined, 2));
  }

  async function productDetails(id) {
    const data = await gqlClient.rawRequest(productDetailsQuery, {id: id, currencyCode: options.currency, countryCode: options.country});
    console.log(JSON.stringify(data.data.market.bidAskData.lowestAsk));

  }


main();