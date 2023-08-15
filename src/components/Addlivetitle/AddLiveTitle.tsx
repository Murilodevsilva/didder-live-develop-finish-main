import React, { useRef, useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import {
  AddColorContainer,
  AddTagsContainer,
  AddTagsText,
  BodyContainer,
  ChangeCoverButton,
  ChangeCoverContainer,
  ChangeCoverImage,
  ChangeCoverText,
  Container,
  IconChevron,
  IconTags,
  InputTitleContainer,
  InputTitleStyled,
  LinerGradientWrapper,
  OptionsContainer,
  Spacer,
} from './addlivetitle.styled'
import * as ImagePicker from 'expo-image-picker'
import ActionSheetWrapper, {
  ActionSheetWrapperRef,
} from 'src/components/ActionSheetWrapper/ActionSheetWrapper'
import TagsActionsSheetContent from '../TagsActionSheetContent/TagsActionsSheetContent'
import TagsList from 'src/components/TagsList/TagsList'
import { useLiveContext } from 'src/contexts/LiveContextProvider'
import ColorPickerComponent from 'src/components/ColorPickerComponent/ColorPickerComponent'

const ThumbImage = require('../../../../assets/images/thumb/logo-thumb.png')

const ChangeCover = ({ onPress, image }) => {
  return (
    <ChangeCoverContainer onPress={onPress}>
      <ChangeCoverButton>
        <ChangeCoverImage source={image} />
        <ChangeCoverText>Alterar capa</ChangeCoverText>
      </ChangeCoverButton>
    </ChangeCoverContainer>
  )
}

const TitleInput = ({ openModal }) => {
  const { tags, liveType, setColor, color } = useLiveContext()
  return (
    <InputTitleContainer>
      <InputTitleStyled
        placeholderTextColor="#fff"
        placeholder="Adicionar título a live"
      />
      <Spacer />
      <OptionsContainer>
        {liveType === 'audio' && (
          <ColorPickerComponent onColorChange={setColor}>
            <AddColorContainer>
              <View
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: color,
                  borderRadius: 20,
                  marginRight: 3,
                }}
              />
              <AddTagsText>Cor</AddTagsText>
              <IconChevron />
            </AddColorContainer>
          </ColorPickerComponent>
        )}
        <AddTagsContainer onPress={openModal}>
          <IconTags />
          <AddTagsText>Tags</AddTagsText>
          <IconChevron />
        </AddTagsContainer>
      </OptionsContainer>

      <TagsList tags={tags} />
    </InputTitleContainer>
  )
}

const AddLiveTitle = () => {
  const tagsActionSheetRef = useRef<ActionSheetWrapperRef>()
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const handleOpenTags = () => {
    tagsActionSheetRef.current.show()
  }

  const closeOpenTags = () => {
    tagsActionSheetRef.current.hide()
  }

  return (
    <>
      <Container>
        <LinerGradientWrapper>
          <ChangeCover
            onPress={pickImage}
            image={(image && { uri: image }) || ThumbImage}
          />
          <BodyContainer>
            <TitleInput openModal={handleOpenTags} />
          </BodyContainer>
        </LinerGradientWrapper>
      </Container>
      <ActionSheetWrapper ref={tagsActionSheetRef}>
        <TagsActionsSheetContent onClose={closeOpenTags} />
      </ActionSheetWrapper>
    </>
  )
}

export default AddLiveTitle
