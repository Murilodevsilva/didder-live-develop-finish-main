import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Container, SideMenuItemIconStyled, SideMenuItemStyled, SideMenuItemTitleStyled } from './sidemenu.styled'
import { EmojiAddIcon } from 'src/assets/svg/EmojiAddIcon'
import UserGroupAddIcon from 'src/assets/svg/UserGroupAddIcon'
import CalendarMonthIcon from 'src/assets/svg/CalendarMonthIcon'
import { useLiveContext } from 'src/contexts/LiveContextProvider'
import { Close } from 'src/assets/svg'

interface SiteMenuItemProps {
  icon: React.ReactNode
  title: string
  onPress?: () => void
}

const SideMenuItem: React.FC<SiteMenuItemProps> = ({ icon, title, onPress }) => {
  return (
    <SideMenuItemStyled onPress={onPress}>
      <SideMenuItemIconStyled>{icon}</SideMenuItemIconStyled>
      <SideMenuItemTitleStyled>{title}</SideMenuItemTitleStyled>
    </SideMenuItemStyled>
  )
}

const SideMenu = () => {
  const { filterListVisible, toggleFilerList } = useLiveContext()
  console.log("🚀 ~ file: Sidemenu.tsx:26 ~ SideMenu ~ filterListVisible:", filterListVisible)

  return (
    <Container>
      <SideMenuItem
        title="Público"
        icon={<UserGroupAddIcon width={20} height={20} />}
      />
      <SideMenuItem
        title="Horário"
        icon={<CalendarMonthIcon width={20} height={20} />}
      />
      <SideMenuItem
        onPress={toggleFilerList}
        title={filterListVisible ? 'Fechar filtros' : 'Filtros'}
        icon={filterListVisible ? <Close /> : <EmojiAddIcon width={20} height={20} />}
      />
    </Container>
  )
}

export default SideMenu
