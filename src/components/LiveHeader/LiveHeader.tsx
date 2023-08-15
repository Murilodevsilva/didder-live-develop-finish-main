// LiveHeader.tsx
import React from 'react'
import styled from 'styled-components/native'
import LiveOwnerAvatar from '../LiveOwnerAvatar/LiveOwnerAvatar'
import LiveWatchers from '../LiveWatchers/LiveWatchers'
import { OnlineUser, useShowVideoLiveContext } from 'src/contexts/ShowVideoLiveContext'
import { View } from 'react-native'

interface LiveHeaderProps {
  topComponent?: React.ReactNode
  bottomComponent?: React.ReactNode
}

const LiveHeader: React.FC<LiveHeaderProps> = ({
  topComponent,
  bottomComponent
}) => {
  const { onlineUsers } = useShowVideoLiveContext()

  return (
    <Container>
      <TopRow>
        <LiveOwnerAvatar
          followersCount={1000}
          onAddUser={() => {}}
          username="@chula"
          verified
          avatarURL="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        />
        <View style={{position:'absolute',top:55,left:155}}>
        <LiveWatchers onlineUsers={onlineUsers} />
        </View>
      </TopRow>
      <BottomRow>{bottomComponent}</BottomRow>
    </Container>
  )
}

const Container = styled.View`
  background-color: transparent;
  padding: 16px;
  position: absolute;
  top:0;
  left:0;
    `

const TopRow = styled.View`
  flex-direction: row;
  align-items:center;
`

const BottomRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default LiveHeader
