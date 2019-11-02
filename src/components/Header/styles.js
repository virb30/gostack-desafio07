import styled from 'styled-components/native';

import colors from '../../styles/colors';

import logo from '../../assets/Logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
`;

export const ItemCounter = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  background: ${colors.primary};
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
`;
