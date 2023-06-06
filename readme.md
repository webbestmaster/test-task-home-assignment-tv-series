# react typescript front minimum

[![Github CI](https://github.com/webbestmaster/test-task-home-assignment-tv-series/actions/workflows/github-ci.yml/badge.svg)](https://github.com/webbestmaster/test-task-home-assignment-tv-series/actions/workflows/github-ci.yml)

Live demo - https://webbestmaster.github.io/test-task-home-assignment-tv-series/

Repository link - https://github.com/webbestmaster/test-task-home-assignment-tv-series

## Installation

1. install nodejs v18.x (or higher) for your platform
2. go to project's directory
3. run `npm i`


## Dev mode

1. make installation
2. go to project's directory
3. run `npm run start`
4. open http://localhost:9090/


## Description

For developers:

1 - In developer mode, the request to the server is made twice (useEffect is called twice), this is because I use `<StrictMode>`, the link to the documentation is https://legacy.reactjs.org/docs/strict-mode.html. In the assembled project, there is no such problem.

2 - I connected localization to the project because I think that the lines of "human text" in the code are bad practice.

3 - I did not connect redux because our project is too small for it.

4 - I wrote a test that check the structure of the server response, I think, for our project it is very important to have the correct response from the server.

5 - Coverage by typescript's types - 100%.

6 - _The last and probably the most important point in this document: my decisions, ideas, implementations, coding style and so on can (and will) differ from the one you use in the team, and, of course, if we work together, then I will write the code in the same way as the team_

In any case, I'm waiting for your opinion. Have a nice day :)


## License

See [license](license).
