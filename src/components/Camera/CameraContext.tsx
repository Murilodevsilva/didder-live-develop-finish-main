import { CameraType } from 'expo-camera';
import React, { createContext, useContext, useState } from 'react';

type CameraTypeType = 'back' | 'front'

type CameraState = {
  cameraType: CameraType;
  isCameraEnabled: boolean;
  toggleCameraType: () => void;
  toggleCameraEnabled: () => void;
};

const CameraContext = createContext<CameraState | undefined>(undefined);

export const useCamera = () => {
  const context = useContext(CameraContext);

  if (!context) {
    throw new Error('useCamera must be used within a CameraProvider');
  }

  return context;
};

export const CameraProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.front);
  const [isCameraEnabled, setIsCameraEnabled] = useState<CameraState['isCameraEnabled']>(true);

  const toggleCameraType = () => {
    setCameraType((prevType) => prevType === CameraType.front ? CameraType.back : CameraType.front );
  };

  const toggleCameraEnabled = () => {
    setIsCameraEnabled((prevState) => !prevState);
  };

  return (
    <CameraContext.Provider value={{ cameraType, isCameraEnabled, toggleCameraType, toggleCameraEnabled }}>
      {children}
    </CameraContext.Provider>
  );
};
