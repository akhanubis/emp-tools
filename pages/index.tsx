import styled from "styled-components";
import { Container, Box, Typography, Tab, Tabs } from "@material-ui/core";
import { useRouter } from "next/router";

import Header from "../features/core/Header";
import ContractState from "../features/contract-state/ContractState";
import EmpSelector from "../features/emp-selector/EmpSelector";

const StyledTabs = styled(Tabs)`
  & .MuiTabs-flexContainer {
    border-bottom: 1px solid #999;
  }
  & .Mui-selected {
    font-weight: bold;
  }
  padding-bottom: 2rem;
`;

const Blurb = styled.div`
  padding: 1rem;
  border: 1px solid #434343;
`;

export default function Index() {
  const router = useRouter();

  return (
    <Container maxWidth={"md"}>
      <Box py={4}>
        <Header />
        <EmpSelector />
        <StyledTabs value={0}>
          <Tab
            label="General Info"
            disableRipple
            onClick={() => router.push("/")}
          />
          <Tab
            label="Manage Position"
            disableRipple
            onClick={() => router.push("/manage-position")}
          />
          <Tab
            label="All Positions"
            disableRipple
            onClick={() => router.push("/all-positions")}
          />
          <Tab
            label="Wrap/Unwrap WETH"
            disableRipple
            onClick={() => router.push("/weth")}
          />
          <Tab
            label="Yield Calculator"
            disableRipple
            onClick={() => router.push("/yield-calculator")}
          />
        </StyledTabs>
        <Blurb>
          <Typography>
            The Expiring Multi Party (EMP) is{" "}
            <a
              href="https://umaproject.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UMA
            </a>
            's most current financial smart contract template. This UI is a
            community-made tool to make interfacing with the protocol easier,
            please use at your own risk. The source code can be viewed{" "}
            <a
              href="https://github.com/adrianmcli/emp-tools"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </Typography>
        </Blurb>
        <ContractState />
      </Box>
      <Box py={4} textAlign="center">
        <a
          href="https://vercel.com/?utm_source=uma%2Femp-tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/powered-by-vercel.svg" alt="Powered by Vercel" />
        </a>
      </Box>
    </Container>
  );
}
