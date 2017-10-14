import styled from "styled-components";

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  position: absolute;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width:50%;
  overflow-y:auto;
  margin:20px;
`;

export const Topcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 21px;
  padding: 10px;
`;

export const Buttoncontainer = styled.div`padding: 10px;`;

