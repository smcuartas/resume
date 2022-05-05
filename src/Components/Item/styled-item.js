import styled from 'styled-components'

export const ItemCard = styled.span`
  background: #7d7d7d;
  color: white;
  font-size: 20px;
  padding: 4px 8px;
  display: inline-block;
  margin: 0 8px 8px 0;
  border: 10px solid #7d7d7d;
  border-image-slice: 1;
  border-width: 2px;
  transition-duration: 0.3s;
  cursor: default;

  &:hover {
    border-image-source: linear-gradient(90deg, #fac0d1, #d3f2fd, #d9ddff);
    color: #7d7d7d;
    background: transparent;
  }
`
