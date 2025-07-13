import styled, { css, keyframes } from "styled-components";
import { themeColors } from "../../theme";

export const ToggleWrapper = styled.div`
  background-color: ${themeColors.background};
  position: relative;
  padding: 16px 4px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  left: -99em;
`;

export const ToggleLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 100%;
  height: 40px;
  background-color: ${({ $checked }) => ($checked ? "#749DD6" : "#83D8FF")};
  border-radius: 84px;
  transition: background-color 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

export const ToggleItem = styled.span`
  display: inline-block;
  position: absolute;
  z-index: 1;
  top: 3px;
  left: ${({ $checked }) => ($checked ? "calc(100% - 36px)" : "3px")};
  width: 33px;
  height: 33px;
  background: ${({ $checked }) => ($checked ? "#FFE5B5" : "#FFCF96")};
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 700ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: ${({ $checked }) =>
    $checked ? "rotate(360deg)" : "rotate(-45deg)"};

  /* craters */
  span {
    position: absolute;
    background-color: #e4d6c1ff;
    opacity: ${({ $checked }) => ($checked ? 1 : 0.5)};
    transition: opacity 2000ms ease-in-out;
    border-radius: 100%;
  }

  .crater--1 {
    top: 13px;
    left: 8px;
    width: 3px;
    height: 3px;
  }
  .crater--2 {
    top: 20px;
    left: 15px;
    width: 4px;
    height: 4px;
  }
  .crater--3 {
    top: 7px;
    left: 18px;
    width: 6px;
    height: 6px;
  }
`;

const shine = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
`;

const clouds = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(1px, 1px, 0);
  }
`;

const sharedStar = css`
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

export const Star1 = styled.span`
  ${sharedStar};
  top: 7px;
  left: 25px;
  z-index: 0;
  width: ${({ $checked }) => ($checked ? "2px" : "30px")};
  height: ${({ $checked }) => ($checked ? "2px" : "3px")};
  animation: ${({ $checked }) =>
    $checked
      ? css`
          ${shine} 8.7s infinite ease
        `
      : css`
          ${clouds} 8.7s infinite ease
        `};
  transition-delay: ${({ $checked }) => ($checked ? "100ms" : "270ms")};
`;

export const Star2 = styled.span`
  ${sharedStar};
  top: 14px;
  left: 21px;
  z-index: 1;
  width: ${({ $checked }) => ($checked ? "4px" : "30px")};
  height: ${({ $checked }) => ($checked ? "4px" : "3px")};
  animation: ${({ $checked }) =>
    $checked
      ? css`
          ${shine} 1.4s infinite cubic
        `
      : css`
          ${clouds} 12.5s infinite ease
        `};
  transition-delay: ${({ $checked }) => ($checked ? "100ms" : "150ms")};
`;

export const Star3 = styled.span`
  ${sharedStar};
  top: 22px;
  left: 29px;
  z-index: 0;
  width: ${({ $checked }) => ($checked ? "2px" : "30px")};
  height: ${({ $checked }) => ($checked ? "2px" : "3px")};
  transform: translate3d(${({ $checked }) => ($checked ? "-7px" : "0")}, 0, 0);
  animation: ${({ $checked }) =>
    $checked
      ? css`
          ${shine} 7s infinite ease
        `
      : css`
          ${clouds} 9.2s infinite ease
        `};
  transition-delay: ${({ $checked }) => ($checked ? "200ms" : "400ms")};
`;

export const Star4 = styled.span`
  ${sharedStar};
  top: 10px;
  left: 10px;
  z-index: 0;
  width: 2px;
  height: 2px;
  opacity: ${({ $checked }) => ($checked ? 1 : 0)};
  transform: translate3d(${({ $checked }) => ($checked ? "0" : "3px")}, 0, 0);
  transition-delay: ${({ $checked }) => ($checked ? "200ms" : "0ms")};
  animation: ${shine} 7s infinite ease;
`;

export const Star5 = styled.span`
  ${sharedStar};
  top: 27px;
  left: 12px;
  z-index: 0;
  width: 3px;
  height: 3px;
  opacity: ${({ $checked }) => ($checked ? 1 : 0)};
  transform: translate3d(${({ $checked }) => ($checked ? "0" : "3px")}, 0, 0);
  transition-delay: "3000ms";
  animation: ${shine} 10.7s infinite ease-in-out;
`;

export const Star6 = styled.span`
  ${sharedStar};
  top: 30px;
  left: 20px;
  z-index: 0;
  width: 2px;
  height: 2px;
  opacity: ${({ $checked }) => ($checked ? 1 : 0)};
  transform: translate3d(${({ $checked }) => ($checked ? "0" : "3px")}, 0, 0);
  transition-delay: "1000ms";
  animation: ${shine} 10s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
