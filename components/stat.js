import {
  Box,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
const StatElement = ({ objData }) => {
  return (
    <>
      {objData &&
        objData.map((x, i) => (
          <div key={i}>
            <Box boxShadow="lg" bg="white" w="100%" p={4} borderRadius="lg">
              <Stat>
                <StatNumber><span className="text-blue-900">{x.part_no}</span></StatNumber>
                <StatLabel>On Lot: <span className="text-blue-900">{x.on_fifo_month}</span></StatLabel>
                <StatLabel>LotNo: <span className="text-blue-900">{x.lotno}</span> SerialNo.: <span className="text-blue-900">{x.serial_no}</span></StatLabel>
                <StatHelpText>Shelve: <span className="text-blue-900">{x.shelve}</span> Pallet: <span className="text-blue-900">{x.pallet_no}</span></StatHelpText>
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
