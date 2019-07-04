# Shipwell

Shipwell is a UI interface that allows you to load destinations and validate them against an API. When validated you can see the route in a list displayed below the loading form. Within it you will have the option to mark the route as complete edit it, or delete it.

## Installation

Use the npm or yarn package manager to install Shipwell.

```bash
yarn install
```

## Usage

```bash
yarn start
```

When you execute the start command, a window is automatically displayed in your browser.

## Tools

- Eslint and Prettier: Use eslint to be aware of errors that are overlooked and prettier to have a single convinced style of code.

- Axios: While I could use fetch for such a simple interface I preferred to use a secure and scalable system as the architecture progresses.

- Hooks: The new react proposal changes the paradigm of assembly of components and reduces them to very simple and reusable components, so choose to use it.

Why don't I use any preprocessor?

I consider that the styles of this interface were too simple to acquire more complexity in the styles, so use the css module system by default.