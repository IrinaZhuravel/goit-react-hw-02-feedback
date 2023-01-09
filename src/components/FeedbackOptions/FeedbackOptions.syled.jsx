import styled from "styled-components";

export const ButtonList = styled.ul`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
`;

export const ButtonListItem = styled.li`
  margin-right: 10px;  
`;

export const ButtonListBtn = styled.button`
  width: 100px;
  height: 30px;
  color: #ffffff;
  font-size: 16px;
  background-color: #797c8e;
  border-radius: 5px;
  border: none;
  transform: scale(1);
  transition: background-color 250ms linear, transform 250ms linear;
  &:hover,
  &:focus {
    background-color: #151b4b;
    transform: scale(1.1);
  }
`;

