import * as React from 'react';
import { Helmet } from "react-helmet"

const defaultMetadata = {
  metadata: {
    title: 'GatherContent University',
    description: '',
    keywords: '',
  }
}

function Site({ children, data }) {
  const { metadata } = data?.gathercontentItems?.itemContent || defaultMetadata;

  return (
    <>
      <Helmet>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
        <meta name="keywords" content={metadata?.keywords} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {children}
    </>
  )
}

export { Site }