import PropTypes from "prop-types";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ui folder and its files are comming from the shadcn ui kit
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    )}
    {...props}
  />
));

Card.propTypes = {
  className: PropTypes.any,
};
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));

CardHeader.propTypes = {
  className: PropTypes.any,
};
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));

CardTitle.propTypes = {
  className: PropTypes.any,
};
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));

CardDescription.propTypes = {
  className: PropTypes.any,
};
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));

CardContent.propTypes = {
  className: PropTypes.any,
};
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));

CardFooter.propTypes = {
  className: PropTypes.any,
};
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
