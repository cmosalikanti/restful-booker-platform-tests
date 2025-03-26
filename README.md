[![Playwright Tests for Restful Booker Platform](https://github.com/cmosalikanti/restful-booker-platform-tests/actions/workflows/ci.yml/badge.svg)](https://github.com/cmosalikanti/restful-booker-platform-tests/actions/workflows/ci.yml)

##  Overview

This project currently has UI automation tests for the application https://automationintesting.online/, developed by
Mark Winteringham. The tests are written using the Playwright automation framework.

##  How to set-up the project
1. Clone the project
2. Run the below to install the node dependencies
```
npm install
```
3. Download the browser binaries needed for testing (e.g., Chromium, WebKit, and Firefox) and install
```
npx playwright install
```
4. Run the tests with the various command line options as described below.

## Command line - running the Tests

Run all the tests
```
npx playwright test
```

Run a single test file
```
npx playwright test tests/home/home-page.spec.ts
```

Run tests in interactive UI mode, with a built-in watch mode (Preview)
```
npx playwright test --ui
```

Run tests in headed browsers
```
npx playwright test --headed
```

Run all the tests against a specific project
```
npx playwright test --project=chromium
```

## Built-in Reporters
#### List reporter
```
npx playwright test --reporter=list
```

#### Line reporter
More concise than the list reporter. Uses a single line to report last finished test, and prints failures when they occur.
```
npx playwright test --reporter=line
```

#### Dot reporter
Very concise - it only produces a single character per successful test run.
```
npx playwright test --reporter=dot
```

#### HTML reporter
Produces a self-contained folder that contains report for the test run that can be served as a web page.
```
npx playwright test --reporter=html
```

A quick way of opening the last test run report is:
```
npx playwright show-report
```


#### PageObjectModel template
https://playwright.dev/docs/pom
