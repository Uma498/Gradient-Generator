import styled from 'styled-components'

export const ListItem = styled.li`
  width: 48%;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    width: 23%;
  }
`

export const DirectionButton = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  text-align: center;
  background-color: #ffffff79;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 600px;
  width: 100%;
  border: none;
  border-radius: 6px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 12px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  outline: none;
  cursor: pointer;
`
