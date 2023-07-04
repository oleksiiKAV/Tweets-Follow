import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 460px;
  padding: 28px 0 36px;

  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BackgroundImage = styled.img`
  margin: 0 auto;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 8px;
  margin: 18px 0 62px 0;

  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px,
    rgb(174, 123, 227) 0px -2px 3px inset, rgb(251, 248, 255) 0px 3px 3px inset;
`;

export const ThumbAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px,
    rgb(174, 123, 227) 0px -2px 4px inset, rgb(251, 248, 255) 0px 4px 3px inset;
  border-radius: 50%;
  position: relative;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const ThumbInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`;

export const Button = styled.button`
  padding: 14px 28px;
  min-width: 196px;

  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  background-color: ${props => (props.value ? '#ebd8ff' : '#5CD3A8')};

  transition: background-color 500ms cubic-bezier(0.07, 0.81, 0.16, 1);

  :hover {
    background-color: ${props => (props.value ? '#ebd8ffae' : '#5cd3a7ae')};
  }
`;

// export const Tooltip = styled.div`
//   position: absolute;
//   top: calc(100% + 4px);
//   left: 50%;
//   transform: translateX(-50%);
//   padding: 6px 10px;
//   border-radius: 4px;
//   background-color: #fff;
//   color: #333;
//   font-size: 14px;
//   font-weight: bold;
//   white-space: nowrap;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
// `;
