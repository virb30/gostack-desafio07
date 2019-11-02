import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  margin: 15px;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductActions = styled.View`
  background: #eee;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductAmount = styled.Text.attrs({
  readonly: true,
})`
  background: #fff;
  border-radius: 4px;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  min-width: 52px;
`;

export const ProductActionButton = styled.TouchableOpacity``;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;

export const TotalAmount = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const Order = styled.TouchableOpacity`
  border-radius: 4px;
  background: ${colors.primary};
  padding: 12px;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
