import { Sprite } from '@pixi/react';
import { FC, memo } from 'react';

import { HudHealthBar } from '../../../components/hud/health-bar/health-bar';
import { useSizes } from '../utils/sprite-sizes';

export type SidePanelProperties = {
  side: 'Right' | 'Left';
};
export const SidePanel: FC<SidePanelProperties> = memo(({ side }) => {
  const { topPanel, windowSize, ...sizes } = useSizes();
  const sidePanel = sizes[`sidePanel${side}`];
  return (
    <Sprite
      y={topPanel.desiredSize.height / 1.9}
      x={side === 'Left' ? 0 : windowSize.width}
      image={`resources/img/map/hud/side-panel.png`}
      scale={sidePanel.scale}
      {...sidePanel.desiredSize}
    >
      <Sprite anchor={[0, -0.35]} image={`resources/img/map/hud/healthbar-empty-hd.png`}>
        {HudHealthBar({ hp: 100 })}
        <Sprite anchor={[0, -0.35]} image={`resources/img/map/hud/healthbar-empty-flask-hd.png`} />
      </Sprite>
    </Sprite>
  );
});
