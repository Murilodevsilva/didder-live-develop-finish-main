import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';

export const ModalContent = styled.View`
  width: 100%;
  background-color: #030303;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 240px;
  bottom: 0
  position: absolute;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
`;

export const Background = styled(LinearGradient)`
  width: 77px;
  height: 77px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  top: -40px;
  left: 30px;
`;

export const ProfileImage = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 40px;
`;

export const ProfileContainer = styled.View`
  margin-bottom: 30px;
  margin-left: 30px;
  flex-direction: column;
  margin-top: -20px;
`;

export const Username = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
  margin-left: 17px;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #9e9e9e;
  text-align: left;
  margin-horizontal: 10px;
  margin-top: 10px;
`;

export const WarningButton = styled.TouchableOpacity`
  background-color: #212121;
  width: 28px;
  height: 28px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  position: absolute;
  right: 0;
`;

export const FollowButton = styled.TouchableOpacity`
  background-color: #673ab3;
  width: 70px;
  height: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const FollowButtonText = styled.Text`
  font-size: 12px;
  color: #FFF;
  font-weight: bold;
  text-align:center;
`;
export const ButtonText = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
  text-align:center;
  padding-top:24px;
  padding-bottom:16px;
`;

export const Footer = styled.View`
  justify-content: space-around;
  
`;

export const FooterButton = styled.View`
  align-items: center;
`;

export const FooterButtonText = styled.Text`
  font-size: 14px;
  color: white;
  border-top-width: 0.5px;
  border-color: #e0e0e0;
  padding: 16px;
  text-align:center;
  font-weight:400;
`;
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Touchable = styled.TouchableOpacity``;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
export const Wrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  margin-top:58px;
  width:134px;
  height:32px;
 
`;

export const Avatar = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  margin-right: 2px;
  margin-left:5px;
  `;

  export const Info = styled.View`
  padding: 3px;
  width:134px;
  height:32px;
`;

export const TopRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BottomRow = styled.View`
  flex-direction: row;
  align-items: center;
  bottom:-5px;
  left:4px;
`;

export const FollowersCount = styled.Text`
  color: white;
  margin-left: 4px;
  font-size:7px;
`;







