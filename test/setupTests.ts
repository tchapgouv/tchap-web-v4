import "@testing-library/jest-dom";
// :TCHAP:
// Very carefully enable the mocks for everything else in
// a specific order. We use this order to ensure we properly
// establish an application state that actually works.
//
// These are also require() calls to make sure they get called
// synchronously.
require("matrix-react-sdk/test/setup/setupManualMocks"); // must be first
require("./setup/setupLanguage");
require("matrix-react-sdk/test/setup/setupConfig");
