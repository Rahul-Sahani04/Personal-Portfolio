import React from 'react';
import styled, { keyframes } from 'styled-components';

const skyRotation = keyframes`
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(calc(45deg + 360deg));
  }
`;

const tailAnimation = keyframes`
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
`;

const shiningAnimation = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
`;

const shootingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(300px);
  }
`;

const Night = styled.div`
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  transform: rotateZ(45deg);
  animation: ${skyRotation} 200000ms linear infinite;
  top: -15dvh;
`;

const ShootingStar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 3px;
  width: 100px;
  background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
  animation: ${tailAnimation} ${({ shootingtime }) => shootingtime} ease-in-out infinite,
             ${shootingAnimation} ${({ shootingtime }) => shootingtime} ease-in-out infinite;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: ${shiningAnimation} ${({ shootingtime }) => shootingtime} ease-in-out infinite;
  }

  &::after {
    transform: translateX(50%) rotateZ(-45deg);
  }

  &:nth-child(${({ i }) => i}) {
    animation-delay: ${({ delay }) => delay};
    top: calc(50% - ${({ randomtop }) => randomtop}px);
    left: calc(50% - ${({ randomleft }) => randomleft}px);
    &::before,
    &::after {
      animation-delay: ${({ delay }) => delay};
    }
  }
`;

const ShootingStars = () => {
    const shootingtime = '3000ms';

    const generateRandomNumber = (min, max) => Math.random() * (max - min) + min;

    const shootingStars = Array.from({ length: 20 }).map((_, i) => {
        const delay = generateRandomNumber(0, 9999) + 'ms';
        const randomtop = generateRandomNumber(-200, 200);
        const randomleft = generateRandomNumber(0, 300);
        return (
            <ShootingStar key={i} i={i + 1} delay={delay} randomtop={randomtop} randomleft={randomleft} shootingtime={shootingtime} />
        );
    });

    const isPhone = window.innerWidth <= 600;

    // Render ShootingStars component only if it's not a phone
    return !isPhone ? (
      <Night>
        {shootingStars}
      </Night>
    ) : null;
  };

export default ShootingStars;
