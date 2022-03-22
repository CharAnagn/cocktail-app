import { CodedWith, StyledFooter } from "../../styles/layout/Footer.styled";

export const Footer = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <StyledFooter>
        <CodedWith>Coded with React and Styled Components 💻</CodedWith>
        <div>
          &copy; February 2022 -{months[new Date().getMonth()]}{" "}
          {new Date().getFullYear()}
        </div>
      </StyledFooter>
    </>
  );
};
