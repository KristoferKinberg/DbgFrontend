import {teams} from "./characters";

export interface TeamDivider {
  [key: number]: {
    [teams.GOOD]: number;
    [teams.EVIL]: number;
  };
}

export interface Character {
  name: string;
  team: teams;
}

export interface Characters {
  [teams.GOOD]: {}
}
