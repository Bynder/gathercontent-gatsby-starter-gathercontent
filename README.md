# gatsby-starter-gathercontent

## Getting Started

In this starter you'll use an example project from GatherContent with Gatsby. 

If you're interested in how data is sourced from GatherContent you can view the documentation in the [GatherContent source plugin](https://github.com/gathercontent/gatsby-source-gathercontent/docs/sourcing-from-gathercontent.md) 👍

## Prerequisites

1. A [GatherContent](https://gathercontent.com/) account.

2. A GatherContent API Key by following these [instructions](https://docs.gathercontent.com/reference#authentication).

3. Every GatherContent account comes with examples projects. This demo works with a specific example project named "Course records (headless CMS example)". You'll need the project id, which you can find in the project settings.

If you can't find this project on your account then our [support team](https://gathercontent.com) can help.

## Configuration

To build the site we need to source the data from GatherContent. 

Firstly, create a `.env.development` file and populate it with the prerequisite data.

```shell
# .env.development
GATSBY_GC_EMAIL=<email>
GATSBY_GC_API_KEY=<your_api_key>
GATSBY_GC_PROJECT_ID=<project_id>
```

## Build & view the demo

```shell
npm install
npm run develop
```

The demo should now be running at http://localhost:8000! 

You can start editing the code in `src` or update the content in your GatherContent project.

## Live edits

You can manually rebuild the project by re-running `npm run develop` or you can run `npm run refresh`! 

By using the refresh command, you won't need to manually restart your development server saving you time 👍

## More reading

- [GatherContent source plugin](https://github.com/gathercontent/gatsby-source-gathercontent)

- [Sourcing from GatherContent](https://github.com/gathercontent/gatsby-starter-gathercontent/docs/sourcing-from-gathercontent.md)
