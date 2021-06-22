import '@testing-library/jest-dom/extend-expect';
import { render, act, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';

import charactersRepository from '../repositories/characters';

import Main from '../views/Main';

jest.mock('../repositories/characters.ts')

describe("Principal component - integrations", () => {
  act(() => {
    it('success to get characters', async () => {
      const { getByTestId, findByTestId } = render(<Main />);
      const getCharacters = mocked(charactersRepository.getCharacters)

      getCharacters.mockResolvedValueOnce({
        data: {
            characters: {
              info: {
                count: 671,
                pages: 34
              },
              results: [
                {
                  id: "1",
                  name: "Rick Sanchez",
                  status: "Alive",
                  species: "Human",
                  gender: "Male",
                  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  location: {
                    name: "Earth (Replacement Dimension)",
                    dimension: "Replacement Dimension",
                    residents: [
                      {
                        id: "1"
                      },
                      {
                        id: "2"
                      },
                      {
                        id: "3"
                      },
                      {
                        id: "4"
                      },
                      {
                        id: "5"
                      },
                      {
                        id: "9"
                      },
                      {
                        id: "11"
                      },
                      {
                        id: "13"
                      },
                      {
                        id: "16"
                      },
                      {
                        id: "31"
                      },
                      {
                        id: "32"
                      },
                      {
                        id: "50"
                      },
                      {
                        id: "58"
                      },
                      {
                        id: "59"
                      },
                      {
                        id: "64"
                      },
                      {
                        id: "66"
                      },
                      {
                        id: "76"
                      },
                      {
                        id: "88"
                      },
                      {
                        id: "103"
                      },
                      {
                        id: "107"
                      },
                      {
                        id: "109"
                      },
                      {
                        id: "113"
                      },
                      {
                        id: "115"
                      },
                      {
                        id: "124"
                      },
                      {
                        id: "128"
                      },
                      {
                        id: "137"
                      },
                      {
                        id: "138"
                      },
                      {
                        id: "141"
                      },
                      {
                        id: "147"
                      },
                      {
                        id: "149"
                      },
                      {
                        id: "151"
                      },
                      {
                        id: "154"
                      },
                      {
                        id: "166"
                      },
                      {
                        id: "167"
                      },
                      {
                        id: "170"
                      },
                      {
                        id: "171"
                      },
                      {
                        id: "172"
                      },
                      {
                        id: "180"
                      },
                      {
                        id: "181"
                      },
                      {
                        id: "182"
                      },
                      {
                        id: "185"
                      },
                      {
                        id: "189"
                      },
                      {
                        id: "190"
                      },
                      {
                        id: "210"
                      },
                      {
                        id: "217"
                      },
                      {
                        id: "218"
                      },
                      {
                        id: "219"
                      },
                      {
                        id: "227"
                      },
                      {
                        id: "230"
                      },
                      {
                        id: "233"
                      },
                      {
                        id: "234"
                      },
                      {
                        id: "236"
                      },
                      {
                        id: "237"
                      },
                      {
                        id: "240"
                      },
                      {
                        id: "241"
                      },
                      {
                        id: "243"
                      },
                      {
                        id: "244"
                      },
                      {
                        id: "245"
                      },
                      {
                        id: "248"
                      },
                      {
                        id: "251"
                      },
                      {
                        id: "255"
                      },
                      {
                        id: "259"
                      },
                      {
                        id: "262"
                      },
                      {
                        id: "265"
                      },
                      {
                        id: "272"
                      },
                      {
                        id: "276"
                      },
                      {
                        id: "280"
                      },
                      {
                        id: "292"
                      },
                      {
                        id: "293"
                      },
                      {
                        id: "324"
                      },
                      {
                        id: "326"
                      },
                      {
                        id: "327"
                      },
                      {
                        id: "332"
                      },
                      {
                        id: "335"
                      },
                      {
                        id: "341"
                      },
                      {
                        id: "346"
                      },
                      {
                        id: "347"
                      },
                      {
                        id: "352"
                      },
                      {
                        id: "353"
                      },
                      {
                        id: "354"
                      },
                      {
                        id: "357"
                      },
                      {
                        id: "360"
                      },
                      {
                        id: "361"
                      },
                      {
                        id: "363"
                      },
                      {
                        id: "365"
                      },
                      {
                        id: "374"
                      },
                      {
                        id: "377"
                      },
                      {
                        id: "390"
                      },
                      {
                        id: "391"
                      },
                      {
                        id: "401"
                      },
                      {
                        id: "402"
                      },
                      {
                        id: "405"
                      },
                      {
                        id: "423"
                      },
                      {
                        id: "435"
                      },
                      {
                        id: "437"
                      },
                      {
                        id: "438"
                      },
                      {
                        id: "439"
                      },
                      {
                        id: "440"
                      },
                      {
                        id: "452"
                      },
                      {
                        id: "453"
                      },
                      {
                        id: "467"
                      },
                      {
                        id: "468"
                      },
                      {
                        id: "469"
                      },
                      {
                        id: "471"
                      },
                      {
                        id: "492"
                      },
                      {
                        id: "493"
                      },
                      {
                        id: "497"
                      },
                      {
                        id: "509"
                      },
                      {
                        id: "510"
                      },
                      {
                        id: "511"
                      },
                      {
                        id: "512"
                      },
                      {
                        id: "513"
                      },
                      {
                        id: "514"
                      },
                      {
                        id: "516"
                      },
                      {
                        id: "517"
                      },
                      {
                        id: "523"
                      },
                      {
                        id: "524"
                      },
                      {
                        id: "526"
                      },
                      {
                        id: "534"
                      },
                      {
                        id: "535"
                      },
                      {
                        id: "536"
                      },
                      {
                        id: "537"
                      },
                      {
                        id: "538"
                      },
                      {
                        id: "539"
                      },
                      {
                        id: "540"
                      },
                      {
                        id: "541"
                      },
                      {
                        id: "561"
                      },
                      {
                        id: "562"
                      },
                      {
                        id: "564"
                      },
                      {
                        id: "570"
                      },
                      {
                        id: "575"
                      },
                      {
                        id: "584"
                      },
                      {
                        id: "585"
                      },
                      {
                        id: "586"
                      },
                      {
                        id: "588"
                      },
                      {
                        id: "590"
                      },
                      {
                        id: "591"
                      },
                      {
                        id: "592"
                      },
                      {
                        id: "667"
                      }
                    ]
                  },
                  origin: {
                    name: "Earth (C-137)",
                    dimension: "Dimension C-137",
                    residents: [
                      {
                        id: "38"
                      },
                      {
                        id: "45"
                      },
                      {
                        id: "71"
                      },
                      {
                        id: "82"
                      },
                      {
                        id: "83"
                      },
                      {
                        id: "92"
                      },
                      {
                        id: "112"
                      },
                      {
                        id: "114"
                      },
                      {
                        id: "116"
                      },
                      {
                        id: "117"
                      },
                      {
                        id: "120"
                      },
                      {
                        id: "127"
                      },
                      {
                        id: "155"
                      },
                      {
                        id: "169"
                      },
                      {
                        id: "175"
                      },
                      {
                        id: "179"
                      },
                      {
                        id: "186"
                      },
                      {
                        id: "201"
                      },
                      {
                        id: "216"
                      },
                      {
                        id: "239"
                      },
                      {
                        id: "271"
                      },
                      {
                        id: "302"
                      },
                      {
                        id: "303"
                      },
                      {
                        id: "338"
                      },
                      {
                        id: "343"
                      },
                      {
                        id: "356"
                      },
                      {
                        id: "394"
                      }
                    ]
                  },
                  episode: [
                    {
                      name: "Pilot",
                      air_date: "December 2, 2013"
                    },
                    {
                      name: "Lawnmower Dog",
                      air_date: "December 9, 2013"
                    },
                    {
                      name: "Anatomy Park",
                      air_date: "December 16, 2013"
                    },
                    {
                      name: "M. Night Shaym-Aliens!",
                      air_date: "January 13, 2014"
                    },
                    {
                      name: "Meeseeks and Destroy",
                      air_date: "January 20, 2014"
                    },
                    {
                      name: "Rick Potion #9",
                      air_date: "January 27, 2014"
                    },
                    {
                      name: "Raising Gazorpazorp",
                      air_date: "March 10, 2014"
                    },
                    {
                      name: "Rixty Minutes",
                      air_date: "March 17, 2014"
                    },
                    {
                      name: "Something Ricked This Way Comes",
                      air_date: "March 24, 2014"
                    },
                    {
                      name: "Close Rick-counters of the Rick Kind",
                      air_date: "April 7, 2014"
                    },
                    {
                      name: "Ricksy Business",
                      air_date: "April 14, 2014"
                    },
                    {
                      name: "A Rickle in Time",
                      air_date: "July 26, 2015"
                    },
                    {
                      name: "Mortynight Run",
                      air_date: "August 2, 2015"
                    },
                    {
                      name: "Auto Erotic Assimilation",
                      air_date: "August 9, 2015"
                    },
                    {
                      name: "Total Rickall",
                      air_date: "August 16, 2015"
                    },
                    {
                      name: "Get Schwifty",
                      air_date: "August 23, 2015"
                    },
                    {
                      name: "The Ricks Must Be Crazy",
                      air_date: "August 30, 2015"
                    },
                    {
                      name: "Big Trouble in Little Sanchez",
                      air_date: "September 13, 2015"
                    },
                    {
                      name: "Interdimensional Cable 2: Tempting Fate",
                      air_date: "September 20, 2015"
                    },
                    {
                      name: "Look Who's Purging Now",
                      air_date: "September 27, 2015"
                    },
                    {
                      name: "The Wedding Squanchers",
                      air_date: "October 4, 2015"
                    },
                    {
                      name: "The Rickshank Rickdemption",
                      air_date: "April 1, 2017"
                    },
                    {
                      name: "Rickmancing the Stone",
                      air_date: "July 30, 2017"
                    },
                    {
                      name: "Pickle Rick",
                      air_date: "August 6, 2017"
                    },
                    {
                      name: "Vindicators 3: The Return of Worldender",
                      air_date: "August 13, 2017"
                    },
                    {
                      name: "The Whirly Dirly Conspiracy",
                      air_date: "August 20, 2017"
                    },
                    {
                      name: "Rest and Ricklaxation",
                      air_date: "August 27, 2017"
                    },
                    {
                      name: "The Ricklantis Mixup",
                      air_date: "September 10, 2017"
                    },
                    {
                      name: "Morty's Mind Blowers",
                      air_date: "September 17, 2017"
                    },
                    {
                      name: "The ABC's of Beth",
                      air_date: "September 24, 2017"
                    },
                    {
                      name: "The Rickchurian Mortydate",
                      air_date: "October 1, 2017"
                    },
                    {
                      name: "Edge of Tomorty: Rick, Die, Rickpeat",
                      air_date: "November 10, 2019"
                    },
                    {
                      name: "The Old Man and the Seat",
                      air_date: "November 17, 2019"
                    },
                    {
                      name: "One Crew Over the Crewcoo's Morty",
                      air_date: "November 24, 2019"
                    },
                    {
                      name: "Claw and Hoarder: Special Ricktim's Morty",
                      air_date: "December 8, 2019"
                    },
                    {
                      name: "Rattlestar Ricklactica",
                      air_date: "December 15, 2019"
                    },
                    {
                      name: "Never Ricking Morty",
                      air_date: "May 3, 2020"
                    },
                    {
                      name: "Promortyus",
                      air_date: "May 10, 2020"
                    },
                    {
                      name: "The Vat of Acid Episode",
                      air_date: "May 17, 2020"
                    },
                    {
                      name: "Childrick of Mort",
                      air_date: "May 24, 2020"
                    },
                    {
                      name: "Star Mort: Rickturn of the Jerri",
                      air_date: "May 31, 2020"
                    }
                  ]
                }
            ]}
      }}as any)
      
      expect(await screen.findByTestId('character-component')).toBeInTheDocument()
    })
  })
});
