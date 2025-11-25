import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'


import logo from '@/assets/logo.svg'
import Footer from '../components/footer'
import Header from '../components/header'

import css1 from "../assets/govuk-frontend-5.11.0.min.css?url"
import css2 from "../assets/jquery-ui-custom.css?url"
import css3 from "../assets/login.css?url"
import css4 from "../assets/standby.css?url"
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
      { rel: 'stylesheet', href: appCss, },
      { rel: 'stylesheet', href: css1, },
      { rel: 'stylesheet', href: css2, },
      { rel: 'stylesheet', href: css3, },
      { rel: 'stylesheet', href: css4, },
      { rel: 'icon', 'size': '48x48', href: logo },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
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
