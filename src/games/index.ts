import Avalon from "./avalon";
import {games} from "./games.types";

const GameComponents = {
  [games.AVALON]: Avalon,
  [games.TEXAS_HOLD_EM]: () => null,
}

export default GameComponents;
