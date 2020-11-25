import {characters, charNames, teamDivider, teams} from './characters';

const TeamsGenerator = (players: string[], selectedGood: any[] = [], selectedEvil: any[] = []) => {
  const teamDivide = teamDivider[players.length];
  const goodT = characters[teams.GOOD];
  const badT = characters[teams.EVIL];

  const lackingGood: number = teamDivide[teams.GOOD] - (1 + selectedGood.length);
  const lackingEvil: number = teamDivide[teams.EVIL] - (1 + selectedEvil.length);

  console.log(lackingGood, lackingEvil)

  const getFillOuts = (shortage: number, team: teams) => 'a'
    .repeat(shortage)
    .split('')
    .map(() => characters[team][charNames.minion]);

  return [
    goodT[charNames.merlin],
    badT[charNames.assassin],
    ...selectedGood,
    ...selectedEvil,
    ...getFillOuts(lackingGood, teams.GOOD),
    ...getFillOuts(lackingEvil, teams.EVIL),
  ];
};

export default TeamsGenerator;
