import React, { createContext, useState, useContext, useMemo } from 'react'

const activeUsersMock = [
  {
    name: 'Alice Silva',
    username: 'alice_silva',
    image: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Bruno Oliveira',
    username: 'bruno_oliveira',
    image: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Carla Santos',
    username: 'carla_santos',
    image: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'Diego Souza',
    username: 'diego_souza',
    image: 'https://i.pravatar.cc/100?img=4',
  },
  {
    name: 'Eduardo Almeida',
    username: 'eduardo_almeida',
    image: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Fernanda Costa',
    username: 'fernanda_costa',
    image: 'https://i.pravatar.cc/100?img=6',
  },
  {
    name: 'Gabriela Lima',
    username: 'gabriela_lima',
    image: 'https://i.pravatar.cc/100?img=7',
  },
]

export interface OnlineUser {
  name: string
  username: string
  image: string
}

type StreamStatus =
  | 'idle'
  | 'loading'
  | 'showing'
  | 'paused'
  | 'stopped'
  | 'finished'

interface ShowLiveContextData {
  streamURL: string
  streamStatus: StreamStatus
  liveDuration: number
  onlineUsers: OnlineUser[]
  setStreamURL: (url: string) => void
  setStreamStatus: (status: StreamStatus) => void
  setLiveDuration: (duration: number) => void
  setOnlineUsers: (users: OnlineUser[]) => void
}

const ShowLiveContext = createContext<ShowLiveContextData>(
  {} as ShowLiveContextData
)

export const useShowVideoLiveContext = () => useContext(ShowLiveContext)

const ShowVideoLiveProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [streamURL, setStreamURL] = useState('')
  const [streamStatus, setStreamStatus] = useState<StreamStatus>('idle')
  const [liveDuration, setLiveDuration] = useState(0)
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>(activeUsersMock)

  const value = useMemo(
    () => ({
      streamURL,
      streamStatus,
      liveDuration,
      onlineUsers,
      setStreamURL,
      setStreamStatus,
      setLiveDuration,
      setOnlineUsers,
    }),
    [streamURL, streamStatus, liveDuration, onlineUsers]
  )

  return (
    <ShowLiveContext.Provider value={value}>
      {children}
    </ShowLiveContext.Provider>
  )
}

export default ShowVideoLiveProvider
