import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function Search(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H30V30H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_221_1310" transform="scale(.02)" />
        </Pattern>
        <Image
          id="image0_221_1310"
          width={50}
          height={50}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEAklEQVRoge2ZyW9PURTHP+2vqmgNidYQNiIhxkRITAkiiDE0ogtWEsQ8LLCwEAsx/AFsxRQLRCKxQFiIoUFMMVTNUwwxVvxQ/Vmc83p/nd5w760i/SYv5/3eu+fc873vnnPPvT9oRStaEYYcT3ZygbHAFJU9gR76/B1QDhwEjgI1nvr0jonAVSAT4zoBdGoZN8OxDBnhDPAU2I58lT5AB6BA75cCr7RdGjgGDGkBfxtFGUKiBtiEOB2GocAV4CdC6BswqzkdjIN2wGvEoZUJdbsCu1T3M9Dbr2vJsEAduYR9wjisNnb6csoGe9SJdQ42RqqNO148ssQldWKSg408TIy1cXUo11KvvcqHDn1XAz+Qqemckm2J/FIZlani2vnpaMeaSLXKQoe+i5Ev+xH45GAHsCfySGUvh777q6xwsFELWyK3VA5z6HuUyhsONmrRkkSmqTzlYKMWtkSKVI7AbkHsBozWe+dAd0E5so4sstRPAVvUxhFfTtngiTrRx8HGGLVxzodDtlPrrsqxDn0PVPnYwYYzliOj+RjYaKG/GXiuNhZ49CsxCjD1VtKiLwf4oLpn8VBnuaIjUitVk2yF74uQeAPk+3LGNkZANkUXkQyUZKdXqvI0MhB/BRYjo1tOvPUkH4mrDDC9iffzgANIQqnS6y6wX995+4rZKACeEX+nt1fbXqPhbCgFHhB9ElMJzPHgewPM1A5exmgbODM861kusCPr3XVgFTAAOYnpgKTq1UhdFrTbhltoNEAPkhPJRkAiDSyJcC4XOVpKY8h4gwuRUgyJcQn6HI8hMzuBXiiSEnmm9/mYmFhi0e8y1b2Pp7VoCmZUi0PadaduUpiHiQmbuZ4CbqqNuRb6dTAZWdiCKfMUWIMEZyGyaA4G1mOOTGeo7gH9vcqh/zVqY5+Ncg5yDHQCc+57HDhPdOo8BXRRO/f02QBLEiADlsEUsbFQACxEpkLgWBWwAfnMKSR4DyHHRF/1qkRGbCp1F83PaqMIexRhjl4jUQJsBd5mEXiJHFyHxUQUqvhDRFLI3A5GLgNcAObjp0yoxH1qDSJianUGzmAInKTuauwD+9X2agcba9XG3sZeFgGXtcELPC449VCmfdzAPv3eIiT9Bv9d3MftAC4KechBXwYpO5JihepW0MiC2A9Jqd8xe+rmRFBwppGyIy4mID7W0MReKCjgdjs6GBfFmH++0kjZkQppn0K+xHfV2dpUwwvaYKIvT0NQgikxAjIZfZZdHRQi2WktJiZqEBJNxtb7LIO+rzSyKNYncRP5MjMxMRN2VRCxtW7bQiRKsnzIQ4rJfUiyqQK+ALeRFDuXv+DUBWTkg13eHaQi/ufwX5AAsxGqP53+SSylmUj8BnM/ZRzKOXQ0AAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}

export default Search;
