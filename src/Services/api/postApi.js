import axios from "axios";

export const query = {
  q: "trending",
  "show-tags": "all",
  "show-fields": "all",
  "order-by": "relevance",
  "api-key": "0cc1c5bc-7fe4-47bc-80cc-f17c13be193c",
  "page-size": 20,
};

const apiRoute = "https://content.guardianapis.com/search";

export const loadPosts = (search = query.q) =>
  axios.get(
    `${apiRoute}?show-fields=${query["show-fields"]}&page-size=${query["page-size"]}&show-tags=${query["show-tags"]}&q=${search}&api-key=${query["api-key"]}`
  );