import styled, { keyframes } from 'styled-components';
import { MdDelete } from 'react-icons/md';

export const changeBlur = keyframes`
  0% {
    backdrop-filter: blur(20px);
  }

  100% {
    backdrop-filter: blur(0px);
  }
`;

export const BlurDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  animation-name: ${changeBlur};
  animation-duration: 1000ms;
`;

export const Section = styled.div`
  text-align: center;
  color: rgb(140, 141, 180);

  padding-top: 20px;
  padding-bottom: 50px;
`;

export const PhonebookTitle = styled.h1`
  font-size: 40px;
  color: rgb(87, 88, 134);
  margin-bottom: 20px;
`;

export const Form = styled.form`
  margin-bottom: 60px;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  border-radius: 5px;

  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(255, 255, 255, 0.1) -4px -2px 6px 0px inset,
    rgba(70, 70, 70, 0.12) 4px 2px 4px 0px inset;
  transition: all 250ms linear;

  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: rgba(255, 255, 255, 0.2) -8px -4px 12px 0px inset,
      rgba(90, 90, 90, 0.3) 8px 4px 8px 0px inset;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  width: 150px;
  height: 36px;

  font-family: inherit;
  font-size: 16px;
  color: rgb(140, 141, 180);
  background-color: rgba(255, 255, 255, 0.3);

  border-radius: 5px;
  border: none;
  padding: 8px 20px;
  box-shadow: rgba(255, 255, 255, 0.1) -4px -2px 6px 0px,
    rgba(70, 70, 70, 0.12) 4px 2px 4px 0px;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;

    color: rgb(87, 88, 134);
    box-shadow: rgba(255, 255, 255, 0.2) -4px -2px 6px 0px,
      rgba(70, 70, 70, 0.3) 4px 2px 4px 0px;
  }
  &:disabled {
    cursor: default;
    box-shadow: rgba(255, 255, 255, 0.3) -4px -2px 6px 0px,
      rgba(70, 70, 70, 0.12) 4px 2px 4px 0px;
    transition: all 0ms linear;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(140, 141, 180);
  background-color: transparent;
  border-radius: 5px;
  border: 3px solid transparent;
  padding: 4px;
  box-shadow: rgba(255, 255, 255, 0.3) -4px -2px 6px 0px,
    rgba(70, 70, 70, 0.12) 4px 2px 4px 0px,
    rgba(255, 255, 255, 0.5) -4px -2px 6px 0px inset,
    rgba(70, 70, 70, 0.12) 4px 2px 4px 0px inset;
  transition: all 200ms linear;

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;

    color: rgb(87, 88, 134);
    box-shadow: rgba(255, 255, 255, 0.3) -4px -2px 6px 0px,
      rgba(70, 70, 70, 0.3) 4px 2px 4px 0px,
      rgba(255, 255, 255, 0.7) -4px -2px 6px 0px inset,
      rgba(70, 70, 70, 0.3) 4px 2px 4px 0px inset;
  }

  &:disabled {
    cursor: default;
    box-shadow: rgba(255, 255, 255, 0.3) -4px -2px 6px 0px,
      rgba(70, 70, 70, 0.12) 4px 2px 4px 0px,
      rgba(255, 255, 255, 0.5) -4px -2px 6px 0px inset,
      rgba(70, 70, 70, 0.12) 4px 2px 4px 0px inset;
    transition: all 0ms linear;
  }
`;

export const DeleteIcon = styled(MdDelete)`
  width: 24px;
  height: 24px;
`;

export const ContactTitle = styled.h2`
  font-size: 36px;
  color: rgb(87, 88, 134);
  margin-bottom: 10px;
`;

export const ContactListWrap = styled.ul`
  backdrop-filter: blur(8px);
  border-radius: 10px;
  min-width: 240px;
  width: calc(100vw - 40px);
  max-width: 440px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column-reverse;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.4);
  box-shadow: rgba(255, 255, 255, 0.2) -4px -2px 6px 0px,
    rgba(70, 70, 70, 0.12) 4px 2px 4px 0px;
`;

export const ContactItemWrap = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 10px;

  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: rgba(255, 255, 255, 0.3) -4px -2px 6px 0px inset,
      rgba(70, 70, 70, 0.12) 4px 2px 4px 0px inset;
  }

  &:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: rgba(255, 255, 255, 0.3) -4px -2px 6px 0px,
      rgba(70, 70, 70, 0.12) 4px 2px 4px 0px;
  }
`;

export const ContactName = styled.span`
  width: 100px;
  display: block;
  margin-right: auto;
  font-size: 14px;
  font-weight: 400;
  color: rgb(87, 88, 134);
  text-align: left;
`;

export const ContactNumber = styled.span`
  width: 120px;
  margin-right: auto;
  font-size: 14px;
  font-weight: 700;
  color: rgb(87, 88, 134);
  text-align: left;
`;
