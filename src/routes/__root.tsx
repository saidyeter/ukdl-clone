import { TanStackDevtools } from '@tanstack/react-devtools'
import { Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import Header from '../components/Header'
import Footer from '../components/footer'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta content="True" name="HandheldFriendly" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="dcterms.isVersionOf" content="IBS-6.3.0.30" />
        <link rel="icon" sizes="48x48" href="./src/assets/logo.svg" />
        <link rel="stylesheet" href="./src/assets/govuk-frontend-5.11.0.min.css" />
        <link rel="stylesheet" href="./src/assets/jquery-ui-custom.css" />
        <link rel="stylesheet" href="./src/assets/screen.css" />
        <title>
          Access your booking
          - Change booking
        </title>
        <meta name="theme-color" content="#1d70b8" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
