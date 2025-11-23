import css1 from '@/assets/govuk-frontend-5.11.0.min.css?url'
import css2 from '@/assets/jquery-ui-custom.css?url'
import logo from '@/assets/logo.svg'
import css3 from '@/assets/screen.css?url'
import Header from '@/components/Header'
import Footer from '@/components/footer'
import appCss from '@/styles.css?url'

import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

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
        title: 'Access your booking - Change booking',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss, type: 'text/css' },
      { rel: 'stylesheet', href: css1, type: 'text/css' },
      { rel: 'stylesheet', href: css2, type: 'text/css' },
      { rel: 'stylesheet', href: css3, type: 'text/css' },
      { rel: 'icon', sizes: '48x48', href: logo },
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
