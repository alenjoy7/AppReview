import PropTypes from "prop-types";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { ChevronDown } from "lucide-react";

const MultiSelectMenu = ({
  defaultValue = [],
  placeholder = "select the items",
  items = [],
  form,
}) => {
  return (
    <Popover>
      <FormControl>
        <PopoverTrigger className="flex h-10 justify-between w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50">
          {defaultValue.length > 0 ? (
            <div className="overflow-x-scroll ">{defaultValue.join(",")}</div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </PopoverTrigger>
      </FormControl>
      <PopoverContent className="px-1 w-64">
        {items.map((item) => (
          <FormField
            key={item.id}
            control={form.control}
            name="question2"
            render={({ field }) => {
              return (
                <FormItem
                  key={item.id}
                  className="flex flex-row space-x-3 space-y-0  cursor-default  items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, item.id])
                          : field.onChange(
                              field.value?.filter((value) => value !== item.id)
                            );
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              );
            }}
          />
        ))}
      </PopoverContent>
    </Popover>
  );
};

MultiSelectMenu.propTypes = {
  defaultValue: PropTypes.array.isRequired,
  form: PropTypes.shape({
    control: PropTypes.any,
  }).isRequired,
  items: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default MultiSelectMenu;
