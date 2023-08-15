import { StyleSheet } from "react-native"
import { Ghost } from "src/assets/svg/gifts/halloween/ghost"
import { Mummy } from "src/assets/svg/gifts/halloween/mummy"
import { Frankenstein } from "src/assets/svg/gifts/halloween/frankenstein"
import { Jigsaw } from "src/assets/svg/gifts/halloween/jigsaw"
import { Pumpkin } from "src/assets/svg/gifts/halloween/pumpkin"
import { Vampire } from "src/assets/svg/gifts/halloween/vampire"
import { Ghost2 } from "src/assets/svg/gifts/halloween/ghots-2"
import { Zombie } from "src/assets/svg/gifts/halloween/zombie"
import { CircleRed } from "src/assets/svg/gifts/squid-game/circle-red"
import { SquareRed } from "src/assets/svg/gifts/squid-game/square-red"
import { TriangleRed } from "src/assets/svg/gifts/squid-game/triangle-red"
import { SquareGray } from "src/assets/svg/gifts/squid-game/square-gray"
import { CircleGray } from "src/assets/svg/gifts/squid-game/circle-gray"
import { TriangleGray } from "src/assets/svg/gifts/squid-game/triangle-gray"
import { BusyIndicator } from "src/styles/basic"
import React, { memo } from "react"

const RenderIconInModal = ({ name }) => {
  switch (name) {
    case 'Ghost':
      return <Ghost style={styles.icon} />
    case 'Mummy':
      return <Mummy style={styles.icon} />
    case 'Frankenstein':
      return <Frankenstein style={styles.icon} />
    case 'Jigsaw':
      return <Jigsaw style={styles.icon} />
    case 'Pumpkin':
      return <Pumpkin style={styles.icon} />
    case 'Vampire':
      return <Vampire style={styles.icon} />
    case 'Ghost 2':
      return <Ghost2 style={styles.icon} />
    case 'Zombie':
      return <Zombie style={styles.icon} />
    case 'Circle Red':
      return <CircleRed style={styles.icon} />
    case 'Square Red':
      return <SquareRed style={styles.icon} />
    case 'Triangle Red':
      return <TriangleRed style={styles.icon} />
    case 'Square Gray':
      return <SquareGray style={styles.icon} />
    case 'Circle Gray':
      return <CircleGray style={styles.icon} />
    case 'Triangle Gray':
      return <TriangleGray style={styles.icon} />
    default:
      return <BusyIndicator />
  }
}

export default memo(RenderIconInModal)

const styles = StyleSheet.create({
  icon: {
    marginTop: -30,
    marginBottom: 20,
  },
})
