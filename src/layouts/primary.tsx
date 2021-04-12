import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/700.css'

import 'index.css'
import { Header } from 'components'

export const LayoutPrimary = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          socials {
            icon
            url
            title
          }
        }
      }
    }
  `)

  return (
    <>
      <div className='layout lsd-container max-w-container-xxxl mx-auto overflow-auto lg:overflow-hidden'>
        <Header
          siteTitle={data.site.siteMetadata.title}
          socials={data.site.siteMetadata.socials}
        />
        <main className='flex h-1'>{children}</main>
      </div>
    </>
  )
}