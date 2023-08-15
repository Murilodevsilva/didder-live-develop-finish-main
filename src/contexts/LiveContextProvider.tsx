import React, { useState, useMemo, useContext } from 'react'

type LiveContextProviderProps = {
  children: React.ReactNode
}

import { createContext } from 'react'

export type LiveType = 'video' | 'audio' | 'video-with-guests'
export type Tag = { id: number | string; name: string }
export type NumberOfPersons = 3 | 4 | 6 | 8 | 9 | 16 | undefined

type LiveContextType = {
  liveType: LiveType
  isPublic: boolean
  scheduledTime: Date | null
  filter: string | null
  tags: Tag[]
  numberOfPeople: NumberOfPersons
  color: string | null
  setLiveType: (liveType: LiveType) => void
  setIsPublic: (isPublic: boolean) => void
  setScheduledTime: (scheduledTime: Date) => void
  setFilter: (filter: string) => void
  handleAddTag: (tag: Tag) => void
  setNumberOfPeople: (numberOfPeople: NumberOfPersons) => void
  setColor: (color: string) => void
  toggleFilerList: () => void
  filterListVisible: boolean
}

const initialState: LiveContextType = {
  liveType: 'video',
  isPublic: false,
  scheduledTime: null,
  filter: null,
  tags: [],
  numberOfPeople: 4,
  color: '#9400ff',
  setLiveType: () => {},
  setIsPublic: () => {},
  setScheduledTime: () => {},
  setFilter: () => {},
  setNumberOfPeople: () => {},
  setColor: () => {},
  handleAddTag: (tag) => {},
  toggleFilerList: () => {},
  filterListVisible: false,
}

const LiveContext = createContext<LiveContextType>(initialState)

export const useLiveContext = () => useContext<LiveContextType>(LiveContext)

const LiveContextProvider = ({ children }: LiveContextProviderProps) => {
  const [liveType, setLiveType] = useState<LiveType>('video')
  const [isPublic, setIsPublic] = useState<boolean>(false)
  const [scheduledTime, setScheduledTime] = useState<Date | null>(null)
  const [filter, setFilter] = useState<string | null>(null)
  const [tags, setTags] = useState<Tag[]>([])
  const [numberOfPeople, setNumberOfPeople] = useState<NumberOfPersons>(undefined)
  const [color, setColor] = useState<string | null>(initialState.color)
  const [filterListVisible, setFilterListVisible] = useState<boolean>(false)

  const toggleFilerList = () => {
    setFilterListVisible((prevState) => !prevState)
  }

  const handleAddTag = (tag: Tag) => {
    setTags((prevState: Tag[]) => {
      const hasTag = prevState.some((t: Tag) => t === tag)
      if (hasTag) {
        return prevState.filter((t: Tag) => t !== tag)
      } else {
        return [...prevState, tag]
      }
    })
  }

  const value = useMemo(
    () => ({
      liveType,
      isPublic,
      scheduledTime,
      filter,
      tags,
      numberOfPeople,
      color,
      filterListVisible,
      setLiveType,
      setIsPublic,
      setScheduledTime,
      setFilter,
      handleAddTag,
      setNumberOfPeople,
      setColor,
      toggleFilerList,
    }),
    [
      liveType,
      isPublic,
      scheduledTime,
      filter,
      tags,
      numberOfPeople,
      color,
      filterListVisible,
    ]
  )

  return <LiveContext.Provider value={value}>{children}</LiveContext.Provider>
}

export default LiveContextProvider
