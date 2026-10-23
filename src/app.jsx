import {
  lazy,
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
} from "preact-iso";

import Routes from "./routes";

export function App() {
  return (
    <ErrorBoundary>
      <LocationProvider>
        <Routes />
      </LocationProvider>
    </ErrorBoundary>
  );
}
