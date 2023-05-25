import { v4 as id } from 'uuid';
import { type Game, Team, CardType, BuildingType, GameObjectType } from '../interfaces';
import { Card } from '../game-objects/cards';
import { Building } from '../game-objects/buildings';

export const createBaseGame = (playersIds: [string, string]): Game => {
  return {
    id: id(),
    isFinished: false,
    turns: [],
    turnsCount: 0,
    winnedUserId: undefined,
    gameObjects: {
      card: [
        new Card({
          cardType: CardType.UNIT,
          damage: 2,
          energy: 2,
          hp: 2,
          possibleMoves: 2,
          price: 2,
          team: Team.BLUE,
          source: 'resources/img/cards/peasant-card.png',
          unitSource: 'resources/img/map/units/Worker_blue.png',
        }),
        new Card({
          cardType: CardType.UNIT,
          damage: 2,
          energy: 2,
          hp: 2,
          possibleMoves: 2,
          price: 2,
          team: Team.BLUE,
          source: 'resources/img/cards/peasant-card.png',
          unitSource: 'resources/img/map/units/Worker_blue.png',
        }),
        new Card({
          cardType: CardType.UNIT,
          damage: 2,
          energy: 2,
          hp: 2,
          possibleMoves: 2,
          price: 2,
          team: Team.BLUE,
          source: 'resources/img/cards/peasant-card.png',
          unitSource: 'resources/img/map/units/Worker_blue.png',
        }),
        new Card({
          cardType: CardType.UNIT,
          damage: 2,
          energy: 2,
          hp: 2,
          possibleMoves: 2,
          price: 2,
          team: Team.GREEN,
          source: 'resources/img/cards/peasant-card.png',
          unitSource: 'resources/img/map/units/Worker_green.png',
        }),
        new Card({
          cardType: CardType.UNIT,
          damage: 2,
          energy: 2,
          hp: 2,
          possibleMoves: 2,
          price: 2,
          team: Team.GREEN,
          source: 'resources/img/cards/peasant-card.png',
          unitSource: 'resources/img/map/units/Worker_green.png',
        }),
        new Card({
          cardType: CardType.UNIT,
          damage: 2,
          energy: 2,
          hp: 2,
          possibleMoves: 2,
          price: 2,
          team: Team.GREEN,
          source: 'resources/img/cards/peasant-card.png',
          unitSource: 'resources/img/map/units/Worker_green.png',
        }),
      ],
      unit: [],
      building: [
        new Building({
          coords: [
            { x: 0, y: 1 },
            { x: 0, y: 2 },
          ],
          hp: 6,
          source: 'resources/img/map/units/mill-hd.png',
          team: Team.BLUE,
          buildingType: BuildingType.CASTLE,
        }),
        new Building({
          coords: [
            { x: 12, y: 1 },
            { x: 12, y: 2 },
          ],
          hp: 6,
          source: 'resources/img/map/units/mill-hd.png',
          team: Team.GREEN,
          buildingType: BuildingType.CASTLE,
        }),
      ],
    },
    players: [
      {
        coins: 7,
        energy: 8,
        team: Team.BLUE,
        userId: playersIds[0],
      },
      {
        coins: 7,
        energy: 8,
        team: Team.GREEN,
        userId: playersIds[1],
      },
    ],
  };
};

export const createEmptyGame = (): Game => {
  return {
    id: 'empty',
    isFinished: false,
    turns: [],
    turnsCount: 0,
    winnedUserId: undefined,
    gameObjects: {
      card: [],
      unit: [],
      building: [],
    },
    players: [
      {
        coins: 0,
        energy: 0,
        team: Team.BLUE,
        userId: 'template1',
      },
      {
        coins: 0,
        energy: 0,
        team: Team.GREEN,
        userId: 'template2',
      },
    ],
  };
};
