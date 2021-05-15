import React from "react";
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";

import { Body, Imagediv, Logo, BodyMain, Main, Title, SubTitle, Text, List, Heading, ClaimButton, ConnectButton, BadgeButton, Bold, AccordionDiv, AccordionItemButtonDiv, AccordionItemDiv, FontAwesomeIconSet, AccordionItemPanelDiv, TopHeader, ThanksHeading, MainHeader, MenuBar, Line } from "./components/styles";
import logo from "./argoLogo.png";
import useWeb3Modal from "./hooks/useWeb3Modal";
import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";
import { AccordionItemHeading } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

async function readOnChainData() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider();
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
  console.log({ tokenBalance: tokenBalance.toString() });
}
const items = [
  {
    heading: 'Why Decentralized Hosting important for Web3?',
    content: 'The internet has been around for some time now. However, much of its fluid nature is now controlled and censored by governments and corporates. But nowadays the internet is in the middle of a revolution: centralized proprietary services are being replaced with decentralized solutions and monolithic services replaced with peer-to-peer algorithmic systems. Here comes the Decentralized Hosting solution, which can revolutionize how traditional web hosting services work. With peer-to-peer content delivery networks, hosting a web application now can be easily done without a centralized system. With the advent of Web3.0 technologies, it is now more than ever important to decentralize frontend applications without a centralized entity controlling their hosted site and takedown at any moment. '
  },
  {
    heading: 'What is ArGo’s Solution?',
    content: 'ArGo provides a User Interface for any deployment on Arweave Protocol and simplifies the experience of developers to work on Arweave Protocol and focus on only building applications. ArGo provides persistent logs monitoring for deployments and helps in organizing their deployments on Arweave with GitHub-based organizations and repositories like structure. ArGo also provides DNS configuration for any deployment with an intuitive User Experience. With ArGo, users no longer have to depend on subscription plans of cloud provider giants, enjoy fast deployment via pre-rendered front-end web pages supported by multiple Jamstacks, and scale seamlessly without any monthly recurring fees. This space is 100% auditable and verifiable because all the deployment will be logged in the blockchain with tags to distinguish them.'
  },
  // {
  //   heading: 'Who can use ArGo?',
  //   content: ' We believe almost any serverless application in the Web3 ecosystem can benefit from ArGo. Some of the highest-impact immediate opportunities are:'
  // }
  {
    heading: 'How do I use ArGo?',
    content: 'ArGo is a web app that is hosted on https://argoapp.live/. On the app, you can just sign up with GitHub and start deploying your app directly from the GitHub repository. Apart from the web app, we are also working on CLI for ArGo so that user can directly deploy their web app from their local system.'
  },
  {
    heading: 'How can I use ArGo right now?',
    content: 'ArGo is currently in the Beta stage and live on https://argoapp.live/. Anyone can use it by signing up with GitHub and start deploying your app directly from the GitHub repository.				   '
  },
  {
    heading: 'What next for ArGo?',
    content: 'We are working hard to add new features and improve the user experience of our users. We are building our v2 which will improve the efficiency and stability of the entire ecosystem.'
  },
  {
    heading: 'How can I keep up with ArGo?',
    content: 'Join our Telegram & Discord groups, Follow us on Twitter.'
  }
]
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

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);

  return (
    <div>
      <MainHeader>
      <TopHeader><Heading>You will be soon able to stake it in unifarm.</Heading></TopHeader>
      <MenuBar>
        <Imagediv>
            <Logo src={logo} /> </Imagediv>
        <BadgeButton>Connect To Matic</BadgeButton>
        <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
        </MenuBar>
        </MainHeader>
      <Body style={{ backgroundColor: '#FEFEFE' }}>
        <BodyMain>
         <Title>Gratitude Drop!</Title>
          <SubTitle>WE WOULD NEVER BE HERE WITHOUT YOU! THANKS FOR THE SUPPORT!!!</SubTitle>
        </BodyMain>
        <Main>
          <ThanksHeading>Thank You!</ThanksHeading>
          <Text>Thanks for the ton of support, feedback, encouragement and helping us out in every step! As a small token of our gratitude, we are dropping <Bold>Argo</Bold> to anyone who:</Text>
          <List>- Donated to us on Gitcoin grants round 6 or 7</List>
          <List>- Donated to us on Gitcoin grants round 6 or 7</List>
          <List>- Donated to us on Gitcoin grants round 6 or 7</List>
          <List>- Donated to us on Gitcoin grants round 6 or 7</List>
          <div style={{ textAlign: 'center' }}>   <ClaimButton>Claim Tokens</ClaimButton> </div>
          <Line />
         <AccordionDiv allowZeroExpanded>
    {items.map((item) => (
        <AccordionItemDiv key={item.uuid}>
            <AccordionItemHeading>
                <AccordionItemButtonDiv>
                 <FontAwesomeIconSet icon={faArrowCircleDown} />
   {item.heading}
                </AccordionItemButtonDiv>
            </AccordionItemHeading>
            <AccordionItemPanelDiv>
              {item.content}
            </AccordionItemPanelDiv>
        </AccordionItemDiv>
    ))}
</AccordionDiv>
        </Main>
      </Body>
    </div>
  );
}

export default App;
