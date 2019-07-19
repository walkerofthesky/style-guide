# style-guide

My goal for this project is to act as a living style guide for my projects. In it's initial state, it's just an animations style guide, since I don't really have shared styles across projects. However, I left the name ambiguous so that it could grow into this role if desired.

## Developer's Guide

### Up and Running

Node Version: 10.15.0

To run the project locally:

```
npm run local
```

### Storybook

I created this project using Storybook to display individual components. If you're not familiar with Storybook, check out their [Introduction](https://storybook.js.org/docs/basics/introduction/) article.

Storybook is not great for reacting to changes to state. For this reason, I may switch to a static site generator like [Gatsby](https://www.gatsbyjs.org/). For now, I'm working around it by using an addon called [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs). With Knobs, you can simulate state changes by getting user input via the Knobs addon panel, using booleans, text inputs, number inputs, selects, etc.

### Styled Components

Keeping this project us simple as possible, I opted to use Styled Components to handle CSS needs. The [documentation](https://www.styled-components.com/docs) should help get you up to speed if you're not already familiar with it, as well as provide answers to more advanced topics.

### Deployment

Storybook includes a simple tool for deploying to a static hosting service, like GitHub Pages or AWS S3. Configuration options can be found on the [GitHub page](https://github.com/storybookjs/storybook-deployer). Using the command `npm run deploy` will build and deploy to GitHub Pages, using the `gh-pages` branch.

The demoable site is available at [https://walkerofthesky.github.io/style-guide/](https://walkerofthesky.github.io/style-guide/).
