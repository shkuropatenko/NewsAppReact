import axios from "axios";

export const api = {
  getAll: () => axios.get(
      "https://content.guardianapis.com/search?q=trending&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c",
  ),
  getAllSearch: (search) => axios.get(
    `https://content.guardianapis.com/search?q=${search}&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c`,
  )
}

