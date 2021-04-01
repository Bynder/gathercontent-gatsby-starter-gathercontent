!['GatherContent & Gatsby'](hero.png)

# gatsby-starter-gathercontent

## Getting Started

In this starter you'll use an example project from GatherContent with Gatsby. 

If you're interested in how data is sourced from GatherContent you can view the documentation in the [GatherContent source plugin](https://github.com/gathercontent/gatsby-source-gathercontent/docs/sourcing-from-gathercontent.md) 👍

### Prerequisites

- You have a [GatherContent](https://gathercontent.com/) account.

- You have a GatherContent [API Key](https://docs.gathercontent.com/reference#authentication).

- You have a demo project in GatherContent named "Course records (headless CMS example)".

All accounts should have this demo project. If you can't find this project on your account then our [support team](https://gathercontent.com) can help.

### Configuration

To build the site we need to source the data from GatherContent. 

Firstly, create a `.env.development` file and populate it with the prerequisite data.

```
# .env.development
GATSBY_GC_EMAIL=<email>
GATSBY_GC_API_KEY=<your_api_key>
GATSBY_GC_PROJECT_ID=<project_id> // you can find this in the project settings
```

## Build & view the demo

```cli
npm install
npm run develop
```

The demo should now be running at http://localhost:8000! 

You can start editing the code in `src` or update the content in your GatherContent project.

### Live edits

You can manually rebuild the project by re-running `npm run develop` or you can run `npm run refresh`! 

By using the refresh command, you won't need to manually restart your development server saving you time 👍

### Query guide

The GatherContent source plugin includes a [guide on sourcing data](https://github.com/gathercontent/gatsby-source-gathercontent/blob/main/docs/sourcing-from-gathercontent.md) from GatherContent. 

It is recommended that you read the guide to better understand the schema.

## More reading

- [Sourcing from GatherContent](https://github.com/gathercontent/gatsby-source-gathercontent/blob/main/docs/sourcing-from-gathercontent.md) - a guide on querying with GatherContent.
- [GatherContent source plugin](https://github.com/gathercontent/gatsby-source-gathercontent)
- [gathercontent.js](https://github.com/gathercontent/gathercontent.js) - a helper library for getting content from GatherContent
