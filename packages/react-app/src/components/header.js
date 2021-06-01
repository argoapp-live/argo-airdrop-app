import React from "react";
import {
  Imagediv as ImageDiv,
  Logo,
  FloatingDiv,
  FloatingInnerDiv,
  FloatingInnerLink,
  FloatingSpan,
  FloatingImg,
  ConnectButton,
  BadgeButton,
  TopHeader,
  MainHeader,
  MenuBar,
  MenuItem
} from "../styles";
import logo from "../argoLogo.png";
import "react-accessible-accordion/dist/fancy-example.css";
import { useLocation } from "react-router-dom";

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  return (
    <ConnectButton
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </ConnectButton>
  );
}

function Header({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  const location = useLocation();

  return (
    <MainHeader>
      <TopHeader>
        <FloatingDiv>
          <FloatingInnerDiv>
            <FloatingSpan>
              <FloatingImg
                className="emoji"
                draggable="false"
                src="https://s.w.org/images/core/emoji/13.0.1/svg/2728.svg"
                alt="✨"
              />{" "}
              NEW
            </FloatingSpan>
            You will be soon able to stake it on Unifarm and earn upto 250% APY.
          </FloatingInnerDiv>
          <FloatingInnerLink>Learn More {"->"}</FloatingInnerLink>
        </FloatingDiv>
      </TopHeader>
      <MenuBar>
        <ImageDiv>
          <Logo
            src={logo}
            onClick={(e) =>
              window.open("https://argoapp.live/", "_blank", "noopener")
            }
          />
        </ImageDiv>
        <MenuItem selected={location.pathname.indexOf("token-airdrop") !== -1} to="/token-airdrop">Airdrop</MenuItem>
        <MenuItem selected={location.pathname.indexOf("nft-drop") !== -1} to="/nft-drop">NFT Drop</MenuItem>
        <BadgeButton>Claim On Matic</BadgeButton>
        <WalletButton
          provider={provider}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
        />
      </MenuBar>
    </MainHeader>
  );
}

export default Header;
