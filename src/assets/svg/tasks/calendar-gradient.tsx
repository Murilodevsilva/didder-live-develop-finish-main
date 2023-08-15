import * as React from 'react'
import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

export const CalendarGradient = (props) => (
  <Svg
    {...props}
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G filter="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2.922c-.694.082-1.204.241-1.626.548a3.333 3.333 0 0 0-.737.737C2 5.084 2 6.334 2 8.833c0 2.5 0 3.75.637 4.626.205.283.454.532.737.738.876.636 2.126.636 4.626.636.56 0 1.056 0 1.5-.007v-.046c0-.569 0-.914.047-1.213a3.833 3.833 0 0 1 3.187-3.187c.298-.047.644-.047 1.212-.047h.047c.007-.444.007-.94.007-1.5 0-2.5 0-3.75-.637-4.626a3.335 3.335 0 0 0-.737-.737c-.422-.307-.932-.466-1.626-.548V3.5a1 1 0 1 1-2 0v-.665c-.31-.002-.642-.002-1-.002s-.69 0-1 .002V3.5a1 1 0 0 1-2 0v-.578Z"
        fill="url(#b)"
      />
      <Path
        d="M13.956 11.333c-.606 0-.86.003-1.066.035a2.833 2.833 0 0 0-2.355 2.355c-.033.206-.035.46-.035 1.067.96-.063 1.608-.217 2.126-.593.283-.206.532-.455.737-.738.377-.518.53-1.166.593-2.126Z"
        fill="url(#c)"
      />
      <Path d="M6.5 1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z" fill="url(#d)" />
      <Path d="M10.5 1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z" fill="url(#e)" />
      <Path
        d="M7 2.335V1.5a1 1 0 1 0-2 0v.918l-.059.007c-.739.088-1.343.264-1.86.64a3.833 3.833 0 0 0-.849.848c-.39.538-.565 1.168-.65 1.945-.082.761-.082 1.72-.082 2.945v.06c0 1.225 0 2.185.082 2.946.085.777.26 1.407.65 1.944.237.326.523.612.848.848.538.39 1.167.566 1.944.65.762.082 1.721.082 2.946.082h.032c.558 0 1.058 0 1.506-.007l.492-.008v.006l.533-.035c.987-.065 1.752-.227 2.387-.688a3.83 3.83 0 0 0 .848-.848c.46-.634.623-1.4.687-2.387l.035-.533h-.005l.008-.492c.007-.448.007-.947.007-1.504v-.033c0-1.225 0-2.185-.082-2.946-.085-.777-.26-1.407-.65-1.945a3.831 3.831 0 0 0-.848-.848c-.518-.376-1.122-.552-1.861-.64L11 2.418V1.5a1 1 0 1 0-2 0v.835c-.31-.002-.643-.002-.999-.002H8c-.356 0-.689 0-.999.002Zm6.946 8.498h.039-.029a40.303 40.303 0 0 0-.01 0ZM10 14.78a37.211 37.211 0 0 1 0 .01v.028-.038Z"
        stroke="url(#f)"
        strokeLinecap="round"
      />
    </G>
    <Path
      d="M4.667 6.833a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z"
      fill="url(#g)"
    />
    <Path
      d="M5.333 8.833a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Z"
      fill="url(#h)"
    />
    <Path
      d="M8 6.833A.667.667 0 1 0 8 5.5a.667.667 0 0 0 0 1.333Z"
      fill="url(#i)"
    />
    <Path
      d="M8.667 8.833a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z"
      fill="url(#j)"
    />
    <Path
      d="M8 12.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"
      fill="url(#k)"
    />
    <Path
      d="M12 6.167a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Z"
      fill="url(#l)"
    />
    <Path
      d="M11.333 9.5a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z"
      fill="url(#m)"
    />
    <Path
      d="M5.333 11.5A.667.667 0 1 1 4 11.5a.667.667 0 0 1 1.333 0Z"
      fill="url(#n)"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={2}
        y1={11.409}
        x2={16.769}
        y2={11.105}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={2}
        y1={11.409}
        x2={16.769}
        y2={11.105}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={2}
        y1={11.409}
        x2={16.769}
        y2={11.105}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={2}
        y1={11.409}
        x2={16.769}
        y2={11.105}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={2}
        y1={1}
        x2={15.7}
        y2={12.872}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={8.067}
        y1={13.587}
        x2={17.15}
        y2={2.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={8.067}
        y1={13.587}
        x2={17.15}
        y2={2.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={8.067}
        y1={13.587}
        x2={17.15}
        y2={2.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={8.067}
        y1={13.587}
        x2={17.15}
        y2={2.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={8.067}
        y1={13.587}
        x2={17.15}
        y2={2.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={8.067}
        y1={13.587}
        x2={17.15}
        y2={2.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={8.067}
        y1={13.587}
        x2={17.15}
        y2={2.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={8.067}
        y1={13.587}
        x2={17.15}
        y2={2.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)
