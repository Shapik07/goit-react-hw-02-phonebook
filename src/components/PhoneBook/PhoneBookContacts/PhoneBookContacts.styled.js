import styled from '@emotion/styled';

export const ContactList = styled.ul`
  padding: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const ContactItemInfo = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  width: 70px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    color: white;
    background-color: red;
  }
`;
