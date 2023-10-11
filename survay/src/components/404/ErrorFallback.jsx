import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";
/**
 * error boundary fallback component,it will shown when unhandled error occur
 * @param {*} param0 
 * @returns 
 */
export default function ErrorFallback({ error, resetErrorBoundary }) {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
    resetErrorBoundary();
  };
  return (
    <div className="grid place-content-center h-screen">
      <div className="p-32">
        <div className="bg-red-100 p-6 border rounded-md shadow-md">
          <h1 className="text-2xl font-semibold text-red-700">
            Oops! Something Went Wrong
          </h1>
          <p className="text-gray-700">
            We apologize for the inconvenience, but an error occurred while
            rendering this part of the application.
          </p>
          <p className="text-gray-700">
            Our team has been notified, and we&apos;re working on fixing the
            issue.
          </p>
          <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-secondary text-secondary-foreground rounded-lg p-4 mb-2">
            {error.message}
          </code>
          <div className="space-x-5 flex">
            <Button
              onClick={resetErrorBoundary}
              variant={"secondary"}
              className="w-full"
            >
              Try again
            </Button>
            <Button onClick={handleReturn} className="w-full">
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.any,
  }),
  resetErrorBoundary: PropTypes.any,
};
