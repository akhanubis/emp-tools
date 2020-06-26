import styled from "styled-components";
import { Typography, Box } from "@material-ui/core";
import Collateral from "../../containers/Collateral";

const Label = styled.span`
  color: #999999;
`;

const Status = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CollateralInfo = () => {
  const {
    name,
    symbol,
    decimals,
    balance,
    address,
  } = Collateral.useContainer();
  return (
    <Box pt={3}>
      {symbol ? (
        <Typography variant="h5">Collateral ({symbol})</Typography>
      ) : (
        <Typography variant="h5">Collateral</Typography>
      )}

      <Status>
        <Label>Address: </Label>
        {address || "N/A"}
      </Status>

      <Status>
        <Label>Name: </Label>
        {name || "N/A"}
      </Status>

      <Status>
        <Label>Decimals: </Label>
        {decimals || "N/A"}
      </Status>

      <Status>
        <Label>Wallet balance: </Label>
        {balance || "N/A"}
      </Status>
    </Box>
  );
};

export default CollateralInfo;
