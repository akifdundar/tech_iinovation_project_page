import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core"
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum"
import { Toaster } from "@/components/ui/toaster"
import { DemoProvider } from "@/components/demo-provider"
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

export const metadata: Metadata = {
  title: 'DecentralAI',
  description: 'Decentralized AI Platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var t = localStorage.getItem('decentralai-theme');
              if (t === 'light') {
                document.documentElement.classList.remove('dark');
              } else {
                document.documentElement.classList.add('dark');
              }
            } catch(e) {
              document.documentElement.classList.add('dark');
            }
          })();
        `}} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <DynamicContextProvider
          settings={{
            environmentId: "demo",
            walletConnectors: [EthereumWalletConnectors],
          }}
        >
          <ThemeProvider>
            <DemoProvider>
              {children}
            </DemoProvider>
          </ThemeProvider>
          <Toaster />
        </DynamicContextProvider>
      </body>
    </html>
  )
}
