/* eslint-disable react/no-children-prop */
import {
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

const SearchElement = ({ txtAction, handleChange, handleShelve }) => {
  return (
    <Stack spacing={4}>
      <InputGroup size="md">
        <Input
          placeholder="ระบุหมายเลย Part"
          onChange={(e) => handleChange(e)}
        />
        <InputRightElement children={<SearchIcon color="green.500" />} />
      </InputGroup>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {txtAction}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleShelve("S-XXX")}>S-XXX</MenuItem>
          <MenuItem onClick={() => handleShelve("S-CK1")}>S-CK1</MenuItem>
          <MenuItem onClick={() => handleShelve("SNON")}>SNON</MenuItem>
          <MenuItem onClick={() => handleShelve("S-REPALLET")}>
            S-REPALLET
          </MenuItem>
          <MenuItem onClick={() => handleShelve("S-HOLD")}>S-HOLD</MenuItem>
          <MenuItem onClick={() => handleShelve("S-P57")}>S-P57</MenuItem>
          <MenuItem onClick={() => handleShelve("S-P58")}>S-P58</MenuItem>
          <MenuItem onClick={() => handleShelve("S-P59")}>S-P59</MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default SearchElement;
