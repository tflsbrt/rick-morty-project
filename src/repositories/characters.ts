import api from "../services/api";

import { ICharacters } from "../interfaces/interfaces";

const query = (search: string, page:number) => {
  return JSON.stringify({
    query: `
      query($search: String, $page: Int) {
        characters(page: $page, filter: { name: $search}) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            status
            species
            gender
            image
            location {
              name
              dimension
              residents {
                id
              }
            }
            origin {
              name
              dimension
              residents {
                id
              }
            }
            episode {
              name
              air_date
            }
          } 
        }
      }
      `,
    variables: {search: search, page: page},
  });
};

const getCharacters = async (search: string, page:number) => {
  try {
    const response = await api.post<ICharacters>("graphql", query(search, page), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export default {
  getCharacters
};
