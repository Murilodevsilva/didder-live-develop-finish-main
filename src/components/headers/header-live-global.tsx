import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import '../../locales/i18n'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import { FC, useEffect, useRef, useState } from 'react'
import { IconLiveTropey } from '../../assets/svg/icon-live-tropey'
import { IconLiveNotification } from 'src/assets/svg/icon-live-notifications'
import { IconLiveSearch } from 'src/assets/svg/icon-live-seach'
import { IconLiveFilter } from 'src/assets/svg/icon-live-filter'
import { IconLiveLanguageBrazil } from 'src/assets/svg/icon-live-language-brazil'
import SearchInput from '../search-input'
import { IconCuba } from '../../assets/svg/flags/flag-cuba'
import { IconIsland } from 'src/assets/svg/flags/flag-island'
import { IconChina } from 'src/assets/svg/flags/flag-china'
import { IconAngola } from 'src/assets/svg/flags/flag-angola'
import { IconCanada } from 'src/assets/svg/flags/flag-canada'
import { IconAdorra } from '../../assets/svg/flags/flag-andorra'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IconUsa } from 'src/assets/svg/flags/flag-usa'
import { IconJapan } from 'src/assets/svg/flags/flag-japan'
import { IconIsreal } from 'src/assets/svg/flags/flag-israel'
import { IconArgentina } from 'src/assets/svg/flags/flag-argentina'
import { IconMexico } from 'src/assets/svg/flags/flag-mexico'
import { IconBarbados } from 'src/assets/svg/flags/flag-barbados'
import { IconItaly } from 'src/assets/svg/flags/flag-italy-'
import { IconNigeria } from 'src/assets/svg/flags/flag-nigeria'
import { IconParaguay } from 'src/assets/svg/flags/flag-paraguay'
import { IconJamaica } from 'src/assets/svg/flags/flag-jamaica'
import { IconMongolia } from 'src/assets/svg/flags/flag-mongolia'
import { IconBelguim } from 'src/assets/svg/flags/flag-belguim'

type Props = {
  title: string
  titleTabOne: string
  titleTabTwo: string
  titleTabThree: string
  back?: boolean
  style?: any
  activeTab: number
  setActiveTab: (tab: number) => void
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const Container = styled.Text``
export const BackgroundHeader = styled.SafeAreaView`
  width: 100%;
  height: 90px;
`

export const HeaderLiveGlobal: FC<Props> = ({
  back,
  style,
  activeTab,
  setActiveTab,
  titleTabOne,
  titleTabTwo,
  titleTabThree,
  modalVisible = false,
  setModalVisible,
}) => {
  const { t, i18n } = useTranslation()
  const navigation = useNavigation()
  let backProp: boolean

  if (back === undefined || back === true) {
    backProp = true
  } else {
    backProp = false
  }

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [hidingHeader, sethidingHeader] = useState(false)
  const [cache, setCache] = useState([])
  const cacheRef = useRef(cache)

  const languageName = {
    brazil: <IconLiveLanguageBrazil />,
    adorra: <IconAdorra />,
    angola: <IconAngola />,
    china: <IconChina />,
    insland: <IconIsland />,
    canada: <IconCanada />,
    cuba: <IconCuba />,
    usa: <IconUsa />,
    japan: <IconJapan />,
    israel: <IconIsreal />,
    argentina: <IconArgentina />,
    mexico: <IconMexico />,
    barbados: <IconBarbados />,
    italy: <IconItaly />,
    nigeria: <IconNigeria />,
    paraguay: <IconParaguay />,
    jamaica: <IconJamaica />,
    mongolia: <IconMongolia />,
    belgium: <IconBelguim />,
  }
  const iconList = cache.map(({ name }) => languageName[name])

  useEffect(() => {
    getCache()
  }, [cacheRef.current])

  useEffect(() => {
    cacheRef.current = cache
  }, [cache])

  const getCache = async () => {
    try {
      const value = await AsyncStorage.getItem('langagueOptions')
      if (value !== null) {
        const data = JSON.parse(value)
        setCache(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <BackgroundHeader style={{ ...style }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.background}
        colors={['#4568DC', '#3B4781']}
      >
        {isSearchOpen === false ? (
          <>
            <View style={styles.searchView}>
              <TouchableOpacity
                onPress={() => setActiveTab(1)}
                style={{
                  backgroundColor:
                    activeTab === 1 ? 'transparent' : 'transparent',
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    color:
                      activeTab === 1 ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  {titleTabOne}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab(2)}
                style={{
                  backgroundColor:
                    activeTab === 1 ? 'transparent' : 'transparent',
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    color:
                      activeTab === 2 ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  {titleTabTwo}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab(3)}
                style={{
                  backgroundColor:
                    activeTab === 3 ? 'transparent' : 'transparent',
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    color:
                      activeTab === 3 ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  {titleTabThree}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.iconView}>
              <View style={styles.viewOptions}>
                <TouchableOpacity
                  style={styles.buttonOptions}
                  onPress={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <IconLiveSearch />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonOptions]}>
                  <IconLiveTropey />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsOptionsN}>
                  <IconLiveNotification />
                </TouchableOpacity>
              </View>
              <View style={styles.viewFilterOpen}>
                <View>
                  {cache && (
                    <View style={styles.viewFilterOpenRow}>
                      <TouchableOpacity style={styles.viewLanguage}>
                        {iconList.map((icon, index) => (
                          <View style={{ marginRight: 20 }} key={index}>
                            {icon}
                          </View>
                        ))}
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={styles.viewLanguage}
                >
                  <IconLiveFilter />
                </TouchableOpacity>
                <Text style={{ color: 'white', marginLeft: 6 }}>
                  {cache.length}
                </Text>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.iconViewRow}>
            <SearchInput
              placeholder="Pesquisar us uário, etc..."
              iconRight={true}
              setIsSearchOpen={handleSearchOpen}
              onSubmitEditing={() => setIsSearchOpen(!isSearchOpen)}
            />
          </View>
        )}

        {hidingHeader === true ? <></> : null}
      </LinearGradient>
    </BackgroundHeader>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 138,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 13,
  },
  searchView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  iconView: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  iconViewRow: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonOptions: {
    width: 20,
    height: 20,
    marginRight: 24,
  },
  buttonsOptionsN: {
    width: 20,
    height: 20,
  },
  viewFilterOpen: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 40,
    right: 6,
    position: 'absolute',
  },
  viewFilterOpenRow: {
    flexDirection: 'row',
    left: 20,
  },
  viewLanguage: {
    marginLeft: 20,
    flexDirection: 'row',
  },
})
