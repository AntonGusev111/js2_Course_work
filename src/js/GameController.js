import themes from "./themes";
import Team from './Team';
import { generateTeam }  from './generators';
import PositionedCharacter from './PositionedCharacter';
import GameState from "./GameState";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.themes = themes.prairie;
    this.playerTeam = [];
    this.enemyTeam = [];
    this.positionArray = [];
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.startGame()
    this.listeners()
    
  }

  startGame(){
    this.gamePlay.drawUi(this.themes);
    this.generateTeams();
    this.generatePosition()
    this.gamePlay.redrawPositions(this.positionArray)
  }

  listeners(){
    this.gameplay.addCellEnterListener(this.onCellEnter(this));

  }

  generateTeams(){
    this.playerTeam = generateTeam(Team.playerHeroes(), 1, 2);
    this.enemyTeam = generateTeam(Team.enemyHeroes(), 1, 2);
  }

  

  generatePosition(){
    for (let i = 0; i < this.playerTeam.length ; i++){
      this.positionArray.push(new PositionedCharacter(this.playerTeam[i],this.generateCord('player')))
      this.positionArray.push(new PositionedCharacter(this.enemyTeam[i],this.generateCord('enemy')))
    } 
  }

  generateCord(team){
    const pCords = [0,1,8,9,16,17,24,25,32,33,40,41,48,49,56,57];
    const eCords = [6,7,14,15,22,23,30,31,38,39,46,47,54,55,62,63];
    let cord = Math.floor(Math.random() * pCords.length)
    if (this.positionArray[this.positionArray.length-1]){
      if(cord == this.positionArray[this.positionArray.length-1].position){
        cord += 1;
      }
    }
    if (team == 'player'){
      return pCords[cord]
    } else{
      return eCords[cord]
    }
  }


  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
