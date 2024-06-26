import styled from "styled-components";

interface PictureContainerProps {
  imageUrl: string;
}

export const NewPostInputContainer = styled.div`
  width: 40%;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid grey;
`;

export const TemporaryBox = styled.div`
  width: 11%;
  height: 50px;
  float: right;
  margin: 30px 100px 0px 50px;
  line-height: 50px;
  text-align: center;
`;

export const TextEditBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const TitleInputBox = styled.div`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  border: none;
  font-size: 24px;
`;
export const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  background-color: transparent;
  border: none;
  &::placeholder {
    font-size: 20px;
    color: white;
  }
`;

export const MainTextInput = styled.div`
  width: 50%;
  height: 50px;
  margin: 0 auto;
`;

export const TagBox = styled.div`
  width: 40%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const RepresentativeTagBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const RepresentativeSubTagBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const RepresentativeTagTitle = styled.div`
  width: 20%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

export const RepresentativeTagInputBox = styled.div`
  width: 500px;
  height: 200px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TagItem = styled.div`
  width: 15%;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 7px;
  background-color: #eaeaea;
  text-align: left;
  font-size: 14px;
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;
  color: #49519e;
`;

export const TagInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #eaeaea;
  border-radius: 20px;
  outline: none;
  font-size: 20px;
  &::placeholder {
    font-size: 14px;
    color: grey;
    padding-left: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  outline: none;
  font-size: 12px;
  &::placeholder {
    font-size: 12px;
    color: grey;
  }

  &:hover {
    border: 1px solid #00a5ff;
  }
`;

export const Header = styled.div`
  width: 67vw;
  height: 80px;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  background: white;
  z-index: 1;
  margin: 0 auto;
`;

export const LeftContainer = styled.div`
  width: 180px;
  height: 40px;
  // border: 1px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 30px;
`;

export const RightContainer = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: right;
  text-align: right;
  margin-right: 30px;
`;

export const TemporaryButton = styled.div`
  width: 92px;
  height: 36px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7d7d7;
  cursor: pointer;
`;

export const PostButton = styled(TemporaryButton)`
  background-color: #4566e3;
  color: white;
`;

export const Picturecontainer = styled.div<PictureContainerProps>`
  width: 67vw;
  height: 400px;
  margin-top: 10px;
  position: relative;
  background: ${({ imageUrl }) =>
    `black url(${imageUrl}) no-repeat center center`};
  background-size: cover;
  border-radius: 4px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  width: 450px;
  position: absolute;
  text-align: left;
  bottom: 80px;
  left: 20%;
`;

export const ChangeImageBox = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  // text-align: left;
  bottom: 25px;
  right: 30px;
  cursor: pointer;
  background: white;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccountBookContainer = styled.div`
  position: fixed;
  top: 90vh;
  left: 80vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBox = styled.div`
  font-size: 28px;
  background-color: none;
  color: white;
`;

export const SubTitleBox = styled(TitleBox)`
  font-size: 14px;
  top: 90%;
  left: 8%;
`;

export const CreateTag = styled.div`
  width: 92px;
  height: 36px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7d7d7;
  margin-top: 10px;
`;

export const DeleteTagButton = styled.div`
  font-size: 12px;
  color: black;
  font-weight: bold;
  text-align: right;
  align-items: right;
`;

export const InputBox = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DeleteButton = styled.div`
  width: 65px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1677ff;
  color: white;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: rgba(22, 119, 255, 0.8);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 400px;
  max-height: 100%;
  overflow-y: auto;
`;

export const CloseButton = styled.div`
  margin-top: 10px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 200px; /* Adjust width as needed */
`;

export const Select = styled.select`
  appearance: none; /* Remove default styling */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #f5f5f5; /* Light gray background color */
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 3px; /* Rounded corners */
  padding-left: 10px; /* Padding for inner spacing */
  font-size: 16px; /* Font size */
  color: #000; /* Text color */
  width: 100%;
  box-sizing: border-box; /* Ensure padding is included in width */
  height: 30px;
  &:focus {
    border-color: #66afe9; /* Light blue border on focus */
    outline: none; /* Remove default outline */
  }
`;

export const SelectArrow = styled.div`
  content: "▼"; /* Unicode for down arrow */
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #000;
`;

export const Option = styled.option`
  padding: 10px; /* Padding for options */
  background-color: #fff; /* White background for options */
  color: #000; /* Text color for options */
`;
