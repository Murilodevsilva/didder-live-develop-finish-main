import * as React from "react";
import Svg, {
  Path,
  G,
  Ellipse,
  Mask,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BlueBadgeIcon(props) {
  return (
    <Svg width={22} height={22} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M7.223 8.44c.064-.196.483-.424.716-.51l.363.643.972.214c-.121 0-1.152.48-1.598.714V8.78c-.221-.159-.453-.34-.453-.34zM12.836 8.44c-.065-.196-.483-.424-.716-.51l-.363.643-1.044.214c.121 0 1.223.48 1.67.714V8.78c.22-.159.453-.34.453-.34z"
        fill="#408CFF"
      />
      <Path
        d="M8.844 8.285l.432.5-.971-.214.54-.286zM11.182 8.285l-.468.5 1.044-.214-.576-.286z"
        fill="#06F"
      />
      <Path
        d="M10 2l1.152 1.34H8.846L10 2z"
        fill="url(#prefix__paint0_linear_1728_8066)"
      />
      <Path
        d="M10 9.645l-1.152-1.34h2.306L10 9.645z"
        fill="url(#prefix__paint1_linear_1728_8066)"
      />
      <G filter="url(#prefix__filter0_f_1728_8066)">
        <Path
          d="M9.97 2.344l.133.403.406.132-.406.133-.134.403-.133-.403-.406-.133.406-.132.133-.403z"
          fill="#fff"
        />
        <Path
          d="M9.97 2.465l.097.294.006.018.018.006.295.096-.295.097-.018.006-.006.018-.098.294L9.872 3l-.006-.018-.018-.006-.295-.097.295-.096.018-.006.006-.018.097-.294z"
          stroke="#3E74FF"
          strokeWidth={0.076}
        />
      </G>
      <Path
        d="M13.334 7.734l-1.745.322 1.153-1.982.592 1.66z"
        fill="url(#prefix__paint2_linear_1728_8066)"
      />
      <Path
        d="M6.666 3.91L8.41 3.59 7.258 5.57l-.592-1.66z"
        fill="url(#prefix__paint3_linear_1728_8066)"
      />
      <Path
        d="M13.334 3.91l-.592 1.66-1.153-1.981 1.745.321z"
        fill="url(#prefix__paint4_linear_1728_8066)"
      />
      <Path
        d="M6.666 7.73l.592-1.66 1.153 1.982-1.745-.321z"
        fill="url(#prefix__paint5_linear_1728_8066)"
      />
      <Path
        d="M12.796 5.784a2.749 2.749 0 01-2.76 2.738 2.749 2.749 0 01-2.759-2.738 2.749 2.749 0 012.76-2.738 2.749 2.749 0 012.759 2.738z"
        fill="url(#prefix__paint6_linear_1728_8066)"
        stroke="url(#prefix__paint7_linear_1728_8066)"
        strokeWidth={0.382}
      />
      <G filter="url(#prefix__filter1_i_1728_8066)">
        <Ellipse
          cx={10.036}
          cy={5.786}
          rx={2.591}
          ry={2.571}
          fill="url(#prefix__paint8_linear_1728_8066)"
        />
      </G>
      <G filter="url(#prefix__filter2_ii_1728_8066)">
        <Ellipse
          cx={10.038}
          cy={5.787}
          rx={2.159}
          ry={2.143}
          fill="url(#prefix__paint9_linear_1728_8066)"
        />
      </G>
      <G filter="url(#prefix__filter3_d_1728_8066)">
        <Path
          d="M9.1 6.333a.436.436 0 01.647-.518c.364.237.196.802-.238.802a.436.436 0 01-.408-.284z"
          fill="url(#prefix__paint10_linear_1728_8066)"
        />
        <Path
          d="M10.968 6.334a.438.438 0 00-.646-.524c-.369.236-.202.807.236.807a.438.438 0 00.41-.283z"
          fill="url(#prefix__paint11_linear_1728_8066)"
        />
        <Path
          d="M9.533 5.828a.56.56 0 11.503.806v-.001a.56.56 0 01-.503-.805z"
          fill="url(#prefix__paint12_linear_1728_8066)"
        />
        <Mask
          id="prefix__a"
          maskUnits="userSpaceOnUse"
          x={9}
          y={5}
          width={2}
          height={2}
        >
          <Path
            d="M9.533 5.824a.56.56 0 11.503.806.56.56 0 01-.503-.806z"
            fill="url(#prefix__paint13_linear_1728_8066)"
          />
        </Mask>
        <G filter="url(#prefix__filter4_f_1728_8066)" mask="url(#prefix__a)">
          <Ellipse
            cx={0.939}
            cy={0.255}
            rx={0.939}
            ry={0.255}
            transform="rotate(78.218 2.217 9.044) skewX(-.17)"
            fill="#7BB0FF"
          />
        </G>
        <Ellipse
          cx={10.036}
          cy={4.664}
          rx={0.165}
          ry={0.164}
          fill="url(#prefix__paint14_linear_1728_8066)"
        />
        <Ellipse
          cx={8.733}
          cy={5.142}
          rx={0.135}
          ry={0.134}
          fill="url(#prefix__paint15_linear_1728_8066)"
        />
        <Ellipse
          cx={11.334}
          cy={5.142}
          rx={0.135}
          ry={0.134}
          fill="url(#prefix__paint16_linear_1728_8066)"
        />
        <Rect
          x={9.199}
          y={6.758}
          width={1.642}
          height={0.222}
          rx={0.111}
          fill="url(#prefix__paint17_linear_1728_8066)"
        />
      </G>
      <Path
        d="M8.884 3.93l.053.16.163.054-.163.053-.053.161-.054-.161-.162-.053.162-.053.054-.161zM8.238 3.215l.125.376.379.124-.38.124-.124.376-.125-.376-.379-.124.38-.124.124-.376z"
        fill="#fff"
      />
      <G filter="url(#prefix__filter5_d_1728_8066)">
        <Path
          d="M7.727 7.658l.575.912c1.548-.821 3.023-.214 3.455 0l.575-.912c-.164-.189-.854-.57-2.297-.587-1.442-.017-2.14.384-2.308.587z"
          fill="url(#prefix__paint18_linear_1728_8066)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_1728_8066"
          x1={9.52}
          y1={2.536}
          x2={10.479}
          y2={2.536}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.489} stopColor="#E3EBFF" />
          <Stop offset={0.489} stopColor="#D1E5EE" />
          <Stop offset={0.489} stopColor="#B3C2D9" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_1728_8066"
          x1={10.48}
          y1={9.109}
          x2={9.521}
          y2={9.109}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.489} stopColor="#E3EBFF" />
          <Stop offset={0.489} stopColor="#D1E5EE" />
          <Stop offset={0.489} stopColor="#B3C2D9" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear_1728_8066"
          x1={13.107}
          y1={7.054}
          x2={12.633}
          y2={7.881}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.489} stopColor="#E3EBFF" />
          <Stop offset={0.489} stopColor="#D1E5EE" />
          <Stop offset={0.489} stopColor="#B3C2D9" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear_1728_8066"
          x1={6.893}
          y1={4.59}
          x2={7.367}
          y2={3.763}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.489} stopColor="#E3EBFF" />
          <Stop offset={0.489} stopColor="#D1E5EE" />
          <Stop offset={0.489} stopColor="#B3C2D9" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear_1728_8066"
          x1={12.627}
          y1={3.766}
          x2={13.101}
          y2={4.593}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.489} stopColor="#E3EBFF" />
          <Stop offset={0.489} stopColor="#D1E5EE" />
          <Stop offset={0.489} stopColor="#B3C2D9" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear_1728_8066"
          x1={7.373}
          y1={7.875}
          x2={6.899}
          y2={7.048}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.489} stopColor="#E3EBFF" />
          <Stop offset={0.489} stopColor="#D1E5EE" />
          <Stop offset={0.489} stopColor="#B3C2D9" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint6_linear_1728_8066"
          x1={8.145}
          y1={3.606}
          x2={12.047}
          y2={7.991}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D5E3FF" />
          <Stop offset={0.521} stopColor="#F0F5FF" />
          <Stop offset={1} stopColor="#D0DFFE" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint7_linear_1728_8066"
          x1={10.037}
          y1={2.855}
          x2={10.037}
          y2={8.713}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint8_linear_1728_8066"
          x1={8.381}
          y1={3.822}
          x2={11.662}
          y2={7.81}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B1CCFF" />
          <Stop offset={1} stopColor="#D5E3FF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint9_linear_1728_8066"
          x1={8.609}
          y1={4.023}
          x2={10.365}
          y2={7.94}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#78A6FF" />
          <Stop offset={0.484} stopColor="#376EC1" />
          <Stop offset={1} stopColor="#1352B0" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint10_linear_1728_8066"
          x1={8.783}
          y1={5.53}
          x2={9.654}
          y2={6.168}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#90BDFF" />
          <Stop offset={1} stopColor="#408CFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint11_linear_1728_8066"
          x1={11.2}
          y1={5.345}
          x2={10.675}
          y2={6.297}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#90BDFF" />
          <Stop offset={1} stopColor="#408CFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint12_linear_1728_8066"
          x1={9.577}
          y1={5.744}
          x2={10.508}
          y2={5.744}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.497} stopColor="#90BDFF" />
          <Stop offset={0.497} stopColor="#408CFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint13_linear_1728_8066"
          x1={9.577}
          y1={5.74}
          x2={10.508}
          y2={5.74}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.417} stopColor="#B1B0D8" />
          <Stop offset={0.497} stopColor="#FFCC1D" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint14_linear_1728_8066"
          x1={10.036}
          y1={4.5}
          x2={10.036}
          y2={4.828}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B0C6FF" />
          <Stop offset={1} stopColor="#408CFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint15_linear_1728_8066"
          x1={8.733}
          y1={5.008}
          x2={8.733}
          y2={5.276}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B0C6FF" />
          <Stop offset={1} stopColor="#408CFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint16_linear_1728_8066"
          x1={11.334}
          y1={5.008}
          x2={11.334}
          y2={5.276}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B0C6FF" />
          <Stop offset={1} stopColor="#408CFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint17_linear_1728_8066"
          x1={9.218}
          y1={6.869}
          x2={10.86}
          y2={6.869}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#90BDFF" />
          <Stop offset={1} stopColor="#458FFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint18_linear_1728_8066"
          x1={7.973}
          y1={7.938}
          x2={12.12}
          y2={7.891}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8FBCFF" />
          <Stop offset={1} stopColor="#408CFF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default BlueBadgeIcon;
