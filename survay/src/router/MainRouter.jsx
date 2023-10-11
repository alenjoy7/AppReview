import HomePage from "@/app/HomePage";
import ResultPage from "@/app/ResultPage";
import ErrorFallback from "@/components/404/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter } from "react-router-dom";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HomePage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/result",
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ResultPage />
      </ErrorBoundary>
    ),
  },
]);
