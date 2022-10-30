import styled from '@emotion/styled';

export const PhoneBookForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 300px;
  height: 24px;
  border-radius: 5px;
`;
export const Button = styled.button`
  width: 150px;
  height: 36px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 12px;
  cursor: pointer;

  :hover {
    color: white;
    background-color: blue;
  }
`;
