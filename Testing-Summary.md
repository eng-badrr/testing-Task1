# Software Testing – Final Summary

Software testing is an important part of software development because it helps identify defects, verify that the software works as expected, and improve its quality and reliability.

During this task, I learned the differences between errors, faults, defects, bugs, and failures. A human error can introduce a fault into the code, which may become a defect or bug and eventually cause a failure when the program is executed.

I also learned the difference between verification and validation. Verification checks whether we are building the product right, while validation checks whether we are building the right product. Static testing examines code without executing it, using techniques such as code reviews and walkthroughs. Dynamic testing involves executing the software and checking its actual behavior.

Risk-Based Testing and FMEA help teams prioritize testing based on the likelihood and impact of potential failures.

For the practical part, I created a TypeScript project using Jest. I implemented unit tests for calculator functions and an asynchronous user service, including successful cases, edge cases, and failure scenarios. I also used mocking to test API requests without making real network calls. Additionally, I created React component tests using React Testing Library to verify that the component renders the expected content.

The project contains 15 passing tests and achieved 100% coverage for statements, branches, functions, and lines.

**One thing I found confusing:** Understanding the difference between test coverage and software quality. I learned that achieving 100% coverage does not guarantee that the application is completely free of bugs. It only means that the measured code was executed during testing.
