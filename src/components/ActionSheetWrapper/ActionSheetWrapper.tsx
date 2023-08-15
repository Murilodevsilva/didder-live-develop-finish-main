import React, { forwardRef, useImperativeHandle, Ref } from 'react';
import ActionSheet, { ActionSheetProps, ActionSheetRef } from 'react-native-actions-sheet';
import styled from 'styled-components/native';

const Content =  styled.View`
  padding: 17px;
`;


interface ActionSheetWrapperProps extends ActionSheetProps {
  children: React.ReactNode;
  dark?: boolean;
}

export interface ActionSheetWrapperRef {
  show: () => void;
  hide: () => void;
}

const ActionSheetWrapper = forwardRef<ActionSheetWrapperRef, ActionSheetWrapperProps>(
  (props, ref) => {
    const actionSheetRef = React.createRef<ActionSheetRef>();

    useImperativeHandle(ref, () => ({
      show: () => {
        actionSheetRef.current?.show();
      },
      hide: () => {
        actionSheetRef.current?.hide();
      },
    }));

    return (
      <ActionSheet containerStyle={{ backgroundColor: props.dark ? 'black' : 'white'}} ref={actionSheetRef} {...props}>
        <Content>
          {props.children}
        </Content>
      </ActionSheet>
    );
  }
);

export default ActionSheetWrapper;
