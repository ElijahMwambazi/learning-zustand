import styled, {
  createGlobalStyle,
} from "styled-components";

// // COLORS
const ColorPrimary = "#55c57a";
const ColorPrimaryLight = "#7ed56f";
const ColorPrimaryDark = "#28b485";

const ColorWhite = "#fff";
const ColorBlack = "#000";

const ColorGreyOne = "#777";
const ColorGreyTwo = "#333";
const ColorGreyThree = "#9999991e";

const ColorRed = "#cd3434cc;";
const ColorRedDark = "#9b0909cc";

// FONT
const FontSizeDefault = "1.6rem";
const FontSizeLarge = "1.7rem";

// BORDER RADIUS
const BorderRadiusDefault = "0.5rem";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;    
  }

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  ::selection {
    color: ${ColorWhite};
  }
  
  .App {
    font-size: ${FontSizeDefault};
    color: ${ColorGreyTwo};
    max-width: 102rem;
    height: 100vh;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;
  }

  .form-input {
    padding: 0.75rem;
    margin-right: 2rem;
    outline: none;
    width: 20rem;
    border: 1px solid ${ColorPrimaryDark};
    border-radius: ${BorderRadiusDefault};
  }

  .form-submit-btn {
    background-color: ${ColorPrimary};
    padding: 0.75rem;
    color: #fff;
    border: 1px solid ${ColorPrimaryDark};
    border-radius: ${BorderRadiusDefault};
    font-size: ${FontSizeLarge};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: ${ColorPrimaryDark}
    }
  }

  .course-item-col-2 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .delete-btn {
    padding: 0.5rem;
    color: white;
    background-color: ${ColorRed};
    border-radius: ${BorderRadiusDefault};
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${ColorRedDark};
    }
  }
`;

export const ListItems = styled.ul`
  width: 100%;
  padding: 0rem 15rem;
`;

export const Listitem = styled.li<{
  completed: boolean;
}>`
  font-weight: bold;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  box-shadow: 0px 0px 10px ${ColorGreyThree};
  border-radius: ${BorderRadiusDefault};
  border: 2px solid ${ColorPrimary};
  margin: 1rem 0rem;
  padding: 1rem;

  background-color: ${(props) =>
    props.completed ? ColorPrimary : ColorWhite};
`;

export const ListItemCheckBox = styled.input`
  &:checked ~ span span {
    color: ${ColorWhite};
    text-decoration: line-through;
  }
`;
