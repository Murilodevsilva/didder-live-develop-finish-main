import React, { useEffect, useState } from 'react'
import { Camera, CameraType } from 'expo-camera'
import { StyleSheet, View, Text } from 'react-native'
import { CameraProvider, useCamera } from './CameraContext'

export const WithCameraBackgroundHOC = (
  WrappedComponent: React.ComponentType
) => {
  const CameraBackground: React.FC = (props) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
    const { cameraType, isCameraEnabled } = useCamera()

    useEffect(() => {
      ;(async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        setHasPermission(status === 'granted')
      })()
    }, [])

    if (hasPermission === null) {
      return <View />
    }

    if (hasPermission === false) {
      return (
        <View>
          <Text>No access to camera</Text>
        </View>
      )
    }

    if (!isCameraEnabled) {
      return (
        <View style={styles.camera}>
          <WrappedComponent {...props} />
        </View>
      )
    }

    return (
      <Camera
        style={styles.camera}
        type={cameraType}
      >
        <WrappedComponent {...props} />
      </Camera>
    )
  }

  return (props: any) => (
    <CameraProvider>
      <CameraBackground {...props} />
    </CameraProvider>
  )
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
})
