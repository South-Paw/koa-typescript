# @south-paw/koa-typescript

♨️ Simple boilerplate for a Koa server with Typescript, ESLint, Prettier and Jest.

## About

Unlike some of the other Koa boilerplates out there, this one is intended to be simple, minimalistic and reasonably unopinionated.

* Typescript, ESLint, Prettier and Jest are ready to roll
* Config has `.env` file support
* Simple `/api/health` route implemented

You don't need to keep anything as you find it and hopefully it will save you a little time when you need a quick boilerplate for that next Koa project.

If you think theres some kind of improvement to be made, please raise a ticket or make a pull request.

## Issues and Bugs

If you manage to find any, please report them [here](https://github.com/South-Paw/react-vector-maps/issues) so they can be squashed.

## Development

Install [`Node.js`](https://nodejs.org/) and [`Yarn`](https://yarnpkg.com).

Open the project directory in your CLI and run the `yarn` command to install dependencies, after that you can run any of following commands

```bash
# Runs all watch tasks (TypeScript, Node)
yarn watch

# Runs all watch tasks with --inspect flag
yarn watch:debug

#	Runs ESLint on project files
yarn lint

# Runs tests using Jest
yarn test

# Runs tests in watch mode
yarn test:watch

# Build the app
yarn build

# Starts the built app with node
yarn start

# Starts the built app in watch mode
yarn start:watch

# Starts the built app in watch mode with --inspect flag
yarn start:debug

# Compile all source .ts files to .js files in the dist folder
yarn ts

# Compile in watch mode
yarn ts:watch
```

## License

MIT, see the [LICENSE](./LICENSE) file.
