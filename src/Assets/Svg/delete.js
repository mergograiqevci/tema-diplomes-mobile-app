import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function DeleteIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H32V32H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_234_1310" transform="scale(.03125)" />
        </Pattern>
        <Image
          id="image0_234_1310"
          width={32}
          height={32}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA1AAAANQBhp5IhgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANbSURBVFiFrZfPa1RXFMc/585MlLZUDSZag2BtuzCURLEbF21ji1C6KG66LQgK0lLoQv8Bt3ZZhJKNbhSXguCiC1fiRqFKZiY/ZshoYjINmrpRm7y593Qx4/jeffdN3oQ58Bb3e88953vPj3vfFVUlj8jz6keo/QU4C+zLUGuiMo3IFR0Zb+axW8zlHcC6P0G+RLgOshbUcexH9FdUJ4DTueyq6pYfq9VDrMxYnpXPbKm7MnOOlXKLpb/H8tgORkAqlSHeY7gLlJgCMcBTaVT299xR0TxDtIApfiWNyt0u/pp1HR/fTPmK14DUah+yc/MyKj8Ce3KFML+sAzcZii7qvolXXb4JlR3RBZz8hOoVDAsDde/4DJGf2RhqApe6eCJ/jeoSi9VreXK3nY/F6g0WZ5/GMZNg2ZIyzhyXen10oLsHpF4fxcokTh7F8WQKnP7RbrPWstTm1wdLQYeB16j7LUHMP4hkYeEwqg+BNVTvMggROQkMY+0XeuTIkySvUK5m5xrMzV8dWO7n5q8yOz8bmjNBxg6wgY1UauOJca02IrXaSC8d6Nhy4eBkEDCpBVKpfwo8lnL9ZBfcYJoNpmM636E8kpn6waQ9QMOuwneBFRDxWX2ANQVg1ztIdidUWuxGpAiF91MbypAwgdAFuQmINxfSc6Tjqhm62QSk/SWkBOqSlvy8WtqR8098ZzIZhAk4ae82hMdzmQptAVzAkRLYUE8CpAlHtEmJpxeXt53j+2oFsN4EMrR93B+/TUHBW6fSZw04f6u0I2AE4idniKgTsJ43Z0D6qYGs30Qf98eWcKj77oJeKYgXXspopwiNHwEymGUSCLVNCZxXddbrAttxFAWI99eGAf08B1FWCrLwngSCuCSLyWYUoexIYkqfd4GG7oIO7grJcVxsoU0wtdT0W4SEFjzH8RJtLb9zSMNbt4Swjhb+TeA9DqJwXFRSIdOpsWWK0cd66uCDLliKzlOKznd1Th24RzH6RL8d/Se52GR2VlYbNoHJFK+pQy+98X9b6XTsHQOCb8WsH5L7WDkqt9dOBOf7ELnT/BrHBI77wfnQ61hur+4FKSPsBbmF6uNteTcyieoPIKtEbz7X0+noBAm0SbwYg9bvKN8A230nrKH8RdFc0O9Hgin4H2QNSSWD8ybyAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}

export default DeleteIcon;
