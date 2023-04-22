const origin = "https://deep-index.moralis.io";
const apiKey =
  "mWFhJoU2pDeHsQ43FHoBLJfFbAd3jCKIALeBSwTj5v8LwWAWzBCwhX3PlUPrtigX";

// http://docs.moralis.io/reference/nft-api

export const searchNFTs = async (searchText) => {
  const url = new URL(`${origin}/api/v2/nft/search`); //URL from brower
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("q", searchText);
  url.searchParams.append("filter", "name");
  url.searchParams.append("limit", "12");

  // const obj = new Promise() // Promise is a class
  // obj.then(func1)
  // obj.catch(func2)
  // obj.finally(func3)

  // promise {status: 'pending' | 'resolved' | 'rejected'}

  // function fetch () send request and return promise

  // Status -> resolved -> func1 -> func3
  // Status -> rejected -> func2 -> func3

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
