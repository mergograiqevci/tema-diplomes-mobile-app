import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function Play(props) {
  return (
    <Svg
      width={38}
      height={37}
      viewBox="0 0 38 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H38V37H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_28_1225"
            transform="matrix(.03125 0 0 .0321 0 -.014)"
          />
        </Pattern>
        <Image
          id="image0_28_1225"
          width={32}
          height={32}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQ+SURBVFiFtZZbbFRVFIa/tc8507n1gilECDEgVKm3ioLGByP2QQkYExIl8GLiA6+YmHBLhTRqYvUBE33TGNEgIDQkGhNiFINcAiYkIoQiXhChULAFCp1pp3PO3suH6TSUwsxQhv9pnX32Xt+ffdZZewsVavZmrfPj+cWq0ipKC8IMoEGUAKvOi8j4w/zh5ezWeDb76YE1kwcqySvlJszZlntAPLNGYRmQrCRpbMjZ5CW3Mxaatr2r439OyMD07ZpIS/gO8AbgVwIek1gh2e9svN99GAwm1u9pl1zFBpo7c03qzE6ER24XfKNqMkq61/5iQl2yry3VU9bAQ535uU75Hph8p/CiYoOO2h57zni6aN+q9NFbGmjuzDWpmgPVhBcV77ekLrnzLpKnDr6VPFccN8VgxucaV2d23A04QK7BI0yYacbXb57ZqIlxBuLp8F2EllJJagOYN8XgmVKzbq3sFA+FJ01+cG1xTKDwq+GZ45So9ll1wlcLfOpj0J2DjmOW3f+62zaRvmipybissTTta0v1GADxzJpScICX7zPUxwrx9DhsnOfx0XM+02vLtpIxGppkAFLqsR5AZm/WOr8m7KFMk9kw12P5rPF73xfB9tOOL7os1/KVmWg4E+GFmkUGpxo/nl9cDl5KjT6smGX4pDVg4UyDX0F95JMCkMKlFhlVaZ0ovKhAoCUNbS0e7z3r8+jk0p8lKhhAjbb6IwdLVdTow4uNwuynffZfVLacsPRkdNw8GxSAojzmI8ysDr6gQGBOHOqnCU2TfDpPWn684W9x3mh4vwHqqmmgqKkB1PuwrNnjnvjYLVYjaGGofoItpXIpUKpbGODa3QD3hHA1gq9PWPpzY+tAnCKFoas+yj8IjdUChwp/D1OyCE00Gp7yEY4A86sB74vg0BXlyy7Lsd7x4KK8aPTdb76gPymy4k7AoUJXFjaNVHxU5ogIBgsGRGW3bzT2nZUwC6QmAi+24k1dloEKW3EwpABZfzixyxxfKhkVtpVbNBCOfc4r/NCrLN8d8fGRyuFeXvHyisCWPe2SMQAG9z4Qllr47RlH/wjkbA7ePGxZ+XNE98Ctv/XNlLjiAPKo1wHXXcmaO4c/UJVVpRbXBvDgJMOvfQ57+1cBTAgNZ0IE6TiwNrkOrrsRDQ3ENqAcKpVgIITD/00MDpDus4hwsC6ZaB81VQxOvy45j2CJCmcnlr60Ev2WYNCdd6G8umulDI8zAHB8qVwAfQmku5rwYNCRuOy6Hbrw+hvxOAMAJ1+pORqp/wTK3mrAYxml7oI9FBOdf3Bt+tiN7296GP21VHqjdPACom8D2YmARSF52dnaHttRl0gu2LM6feGm88oleni73utMuEGV16iwWcWyamv67Y6aIdO2f138VEmjlSQcMZJ25BeryPPA48BMoEFUY2LFeZEOmJDfY1m7NXUp8dmedslUkvd/nuayinCgqWIAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
}

export default Play;
