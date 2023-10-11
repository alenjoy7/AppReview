import PropTypes from "prop-types";

import {
  selectMultipleItem,
  selectSingleItem,
  sliderVariation,
} from "@/utils/data/data";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import DatePicker from "../datePicker/DatePicker";
import MultiSelectMenu from "../selectMenu/MultiSelectMenu";
import SingleSelectMenu from "../selectMenu/SingleSelectMenu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

/**
 * this component is the main form and it is used to collect the data from the user.
 * And questions are hardcoded here we can change to dynamic and loop through if the values are questions are comming from api
 * @param {*} param0
 * @returns survay form
 */
const SurvayForm = ({ form, onSubmit }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <FormField
          control={form.control}
          name={"question1"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>How often do you use this app?</FormLabel>
              <SingleSelectMenu
                defaultValue={field.value}
                handleOnChange={field.onChange}
                items={selectSingleItem}
                placeholder="select an option"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"question2"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Main app goal?</FormLabel>
              <MultiSelectMenu
                defaultValue={field.value}
                handleOnChange={field.onChange}
                items={selectMultipleItem}
                placeholder="select your goals"
                form={form}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"question3"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rate user experience (1-10)</FormLabel>
              <FormControl>
                <div>
                  <p className="pb-3 text-muted-foreground px-3 text-sm">
                    {sliderVariation[field.value]}
                  </p>
                  <Slider
                    defaultValue={[8]}
                    max={9}
                    step={1}
                    onValueChange={field.onChange}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"question4"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Suggest any improvement</FormLabel>
              <FormControl>
                <Input
                  placeholder="your suggestions for improvement"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"question5"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your birthday?</FormLabel>
              <FormControl>
                <DatePicker field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SurvayForm;

/**
 * props types
 */
SurvayForm.propTypes = {
  form: PropTypes.shape({
    control: PropTypes.any,
    handleSubmit: PropTypes.func,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
