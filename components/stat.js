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
          <>
            <p />
            <Box
              key={i}
              boxShadow="lg"
              bg="white"
              w="100%"
              p={4}
              borderRadius="lg"
            >
              <Stat>
                <StatNumber>{x.part_no}</StatNumber>
                <StatLabel>LotNo: {x.lotno}</StatLabel>
                <StatLabel>SerialNo.: {x.serial_no}</StatLabel>
                <StatHelpText>Shelve: {x.shelve}</StatHelpText>
              </Stat>
            </Box>
            <Divider />
            <br />
          </>
        ))}
    </>
  );
};

export default StatElement;
