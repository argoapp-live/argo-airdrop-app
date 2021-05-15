import styled from "styled-components";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = styled.header`
  background-color: #282c34;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

export const Body = styled.body`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;
  padding: 12px 24px;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;

export const Imagediv = styled.div`
display: flex;
flex-grow: 1;
`;

export const Logo = styled.img`
padding: 1rem;
height: 2.7rem;
margin-left: 3rem;
`;

export const BodyMain = styled.div`
background-image: linear-gradient(110.21deg,rgba(45, 84, 194, 0.12) 8.95%, rgba(7, 177, 199, 0.13) 114.8%);
height: 19rem;
width: 100%;
margin-top: 9rem;
text-align: center;
padding: 5rem 0rem;
`;

export const Main = styled.div`
margin: -7rem 8rem;
margin-bottom: 5rem;
border-radius: 8px;
position: relative;
box-shadow: 0px 5px 100px -23px rgb(0 0 0 / 5%);
padding: 2rem 5rem;
padding-bottom: 4rem;
font-family: 'Inter';
background-color: white;
`;

export const Title = styled.h1`
background: -webkit-linear-gradient(left, #2D54C2 8.95%, #07A5BB 94.8%);
font-family: 'Inter';
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 64px;
`;

export const SubTitle = styled.h5`
color: #334061;
font-size: 19px;
font-weight: normal;
line-height: 0.2;
font-family: 'Inter';
`;

export const Text = styled.h4`
color: #334061;
font-family: 'Inter';
font-size: 20px;
font-weight: normal;
line-height: 1.8;`;

export const List = styled.h4`
color: #334061;
font-family: 'Inter';
font-size: 20px;
font-weight: normal;
line-height: 0.8;
margin-left: 2rem;`;

export const Heading = styled.h4`
text-align:center;
`;

export const ClaimButton = styled.button`
margin-top: 2rem;
display: inline-flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
text-align: center;
font-weight: 600;
font-size: 17px;
padding: 16px 24px;
background-color: #4977F9;
color: white;
transition: all ease 250ms;
line-height: 20px;
border-radius: 6px;
outline: none !important;
border: 1px solid #4977F9;
box-shadow: 0px 4px 6px rgb(64 112 244 / 16%);
font-family: 'Inter';
cursor: pointer;
`;

export const ConnectButton = styled.button`
padding: 12px 24px;
margin: 2rem 3rem;
font-size: 15px;
display: flex;
justify-content: center;
text-align: center;
font-weight: 600;
background-color: #F4F7FF;
color: #4977F9;
box-shadow: 0px 0px 0px rgb(0 0 0 / 4%);
transition: all ease 250ms;
line-height: 20px;
border-radius: 6px;
outline: none !important;
border: 1px solid #4977F9;
font-family: 'Inter';
cursor: pointer;
`;

export const BadgeButton = styled.button`
background-image: linear-gradient(90.21deg, #07A5BB, #2D54C2 );
color: white;
border: none;
border-radius: 13px;
padding: 0.4rem;
font-weight: bold;
cursor: pointer;
`;

export const Bold = styled.span`
font-weight: normal;
color: #11C264;
font-family: 'Inter';
font-size: 20px;
`;

export const AccordionDiv = styled(Accordion)`
margin-top: 4rem;
font-family: 'Inter';
`;

export const AccordionItemDiv = styled(AccordionItem)`
margin-top: 2rem;
font-size: 20px;
color: #525F80;
font-weight: normal;
font-family: 'Inter';
`;

export const AccordionItemButtonDiv = styled(AccordionItemButton)`
background-color: white;
border: none;
outline: none !important;
font-family: 'Inter';
font-weight: 600;
font-size: 22px;
cursor: pointer;
color: #334061;
&:hover {
  border: none;
}
&:active {
  border: none;
}
`;

export const FontAwesomeIconSet = styled(FontAwesomeIcon)`
margin-right: 2rem;
`;

export const AccordionItemPanelDiv = styled(AccordionItemPanel)`
font-size: 18px;
margin: 2rem 3rem;
font-family: 'Inter';
line-height: 1.8;
text-align: justify;
text-justify: inter-word;`;

export const TopHeader = styled(Header)`
background: linear-gradient(90.21deg, #2D54C2 8.95%, #07A5BB 94.8%);
padding: 0rem 3rem;
font-family: 'Inter';
font-size: 20px;
height: 1rem;
font-weight: bolder;
text-align: center; 
`;

export const ThanksHeading = styled.h4`
font-weight: 600;
font-size: 32px;
line-height: 0;
color: #0F1B38;
`;

export const MainHeader = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 1050;
`;

export const MenuBar = styled(Header)`
background-color: white;
height: 5.5rem;
`;

export const Line = styled.hr`
margin: 3rem 0rem;
border-color: #efefef;
`;