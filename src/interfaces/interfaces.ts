export interface ICharacters {
  data: {
    characters: {
      info?: IInfo;
      results?: ICharacter[];
    };
  };
}

export interface IInfo {
  count?: number;
  pages?: number;
}

export interface IResident {
  id?: number;
}

export interface IEpisode {
  name?: string;
  air_date?: string;
}

export interface ILocation {
  name?: string;
  type?: string;
  dimension?: string;
  residents?: IResident[];
}

export interface ICharacter {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: ILocation;
  location?: ILocation;
  image?: string;
  episode?: IEpisode[];
  created?: string;
}
