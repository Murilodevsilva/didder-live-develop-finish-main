import React, { useState, useEffect, ComponentType } from 'react';
import { InteractionManager, Text } from 'react-native';

// HOC para o status "ready"
function withReadyStatus<P extends object>(Component: ComponentType<P>) {
  return function WithReadyStatus(props: P) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
      InteractionManager.runAfterInteractions(() => {
        setReady(true);
      });
    }, []);

    return <Component {...props} ready={ready} />;
  };
}

export default withReadyStatus;
