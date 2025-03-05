##  How to set-up the project
1. Clone the project
2. Run the below to install the node dependencies
```
npm install
```
3. Run the tests with the below command line.

## Command line - running the Tests

Run all the tests
```
npx playwright test
```

Run a single test file
```
npx playwright test tests/home-page.spec.ts
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
