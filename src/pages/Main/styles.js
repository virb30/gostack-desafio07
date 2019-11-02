import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 15px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 14px 0;
`;
export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  border-radius: 4px;
  margin-top: auto;
  align-items: center;
`;
export const AddButtonText = styled.Text`
  flex: 1;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  flex-direction: row;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  align-items: center;
`;
export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0 4px 0 10px;
`;
