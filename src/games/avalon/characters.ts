import {TeamDivider} from "./avalon.types";

export enum teams {
  GOOD = 'GOOD',
  EVIL = 'EVIL'
}

export enum charNames {
  merlin = 'merlin',
  percival = 'percival',
  minion = 'minion',
  servantOfMerlin = 'servantOfMerlin',
  morgana = 'morgana',
  mordred = 'mordred',
  assassin = 'assassin',
  oberon = 'oberon',
  minionOfMordred = 'minionOfMordred',
}

export const characters = {
  [teams.GOOD]: {
    [charNames.merlin]: {
      name: 'Merlin',
      team: teams.GOOD,
    },
    [charNames.percival]: {
      name: 'Percival',
      team: teams.GOOD,
    },
    [charNames.minion]: {
      name: 'Loyal servant of Merlin',
      team: teams.GOOD,
    },
  },
  [teams.EVIL]: {
    [charNames.morgana]: {
      name: 'Morgana',
      team: teams.EVIL
    },
    [charNames.mordred]: {
      name: 'Mordred',
      team: teams.EVIL
    },
    [charNames.assassin]: {
      name: 'Assassin',
      team: teams.EVIL
    },
    [charNames.oberon]: {
      name: 'Oberon',
      team: teams.EVIL
    },
    [charNames.minion]: {
      name: 'Minion of Mordred',
      team: teams.EVIL
    }
  }
};

export const teamDivider: TeamDivider = {
  5: {
    [teams.GOOD]: 3,
    [teams.EVIL]: 2,
  },
  6: {
    [teams.GOOD]: 4,
    [teams.EVIL]: 2
  },
  7: {
    [teams.GOOD]: 4,
    [teams.EVIL]: 3,
  },
  8: {
    [teams.GOOD]: 5,
    [teams.EVIL]: 3,
  },
  9: {
    [teams.GOOD]: 6,
    [teams.EVIL]: 3,
  },
  10: {
    [teams.GOOD]: 6,
    [teams.EVIL]: 4,
  }
};
