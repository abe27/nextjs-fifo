import {
  Box,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
const StatElement = ({ objData }) => {
  console.dir(objData)
  const recheckWhs = i => {
    let txt = "CK-1"
    if (i == "C") {
      txt = "CK-2"
    }
    return txt
  }
  return (
    <>
      {objData &&
        objData.map((x, i) => (
          <div key={i}>
            <Box boxShadow="lg" bg="white" w="100%" p={4} borderRadius="lg">
              <Stat>
                <StatNumber><span className="text-blue-900">{x.part_no}</span></StatNumber>
                <StatLabel>Whs: <span className="text-blue-900">{recheckWhs(x.tagrp)}</span></StatLabel>
                <StatLabel>On Lot: <span className="text-blue-900">{x.on_fifo_month}</span></StatLabel>
                <StatLabel>LotNo: <span className="text-blue-900">{x.lotno}</span></StatLabel>
                <StatLabel>SerialNo.: <span className="text-blue-900">{x.serial_no}</span></StatLabel>
                <StatLabel>Shelve: <span className="text-blue-900">{x.shelve}</span> Pallet: <span className="text-blue-900">{x.pallet_no}</span></StatLabel>
                <StatHelpText>Last Update: <span className="text-blue-900">{x.last_update}</span></StatHelpText>
              </Stat>
            </Box>
            <Divider />
            <br />
          </div>
        ))}
    </>
  );
};

export default StatElement;
