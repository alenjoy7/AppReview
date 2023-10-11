import PropTypes from "prop-types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FormControl } from "../ui/form";

const SingleSelectMenu = ({
  handleOnChange,
  placeholder = "select the item",
  items = [],
}) => {
  return (
    <Select onValueChange={handleOnChange}>
      <FormControl>
        <SelectTrigger className="data-[placeholder]:text-muted-foreground">
          <SelectValue placeholder={placeholder}/>
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {items?.map(({ value, label }) => (
          <SelectItem key={label} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

SingleSelectMenu.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SingleSelectMenu;
