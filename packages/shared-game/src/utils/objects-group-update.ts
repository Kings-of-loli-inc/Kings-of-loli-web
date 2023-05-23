import { BaseObject } from '../game-objects';
import { BaseGameObject } from '../game-objects/base';
import { GameObjectType, GameObjects, TurnToServer } from '../interfaces';

export const updateGameObjectsGroup = <T extends GameObjects[GameObjectType]>(
  initialObjects: T,
  turn: TurnToServer,
) => {
  const objectsType = initialObjects[0].objectType;
  return (
    [
      // @ts-expect-error
      ...initialObjects.filter(
        (object: (typeof initialObjects)[0]) => !turn.removedObjects?.[objectsType]?.includes(object.id),
      ),

      ...(turn.newObjects?.[objectsType] ?? []),
    ] as T
  ).map(
    (object) =>
      // @ts-expect-error

      turn.updatedObjects[objectsType].find((updatedObject: typeof object) => updatedObject.id === object.id) ?? object,
  ) as T;
};
