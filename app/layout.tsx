import './globals.css'
import Link from 'next/link'
import { Providers } from '@/src/store/providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <Providers>
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 space-y-4 border-r border-gray-300 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-4">📚 Dashboard</h2>
              <nav className="flex flex-col space-y-2">
                <Link href="/dashboard" className="hover:text-blue-500">
                  🏠 Home
                </Link>
                <Link href="/news" className="hover:text-blue-500">
                  📰 News
                </Link>
                <Link href="/recommendations" className="hover:text-blue-500">
                  🎬 Movie Recommendations
                </Link>
                <Link href="/social" className="hover:text-blue-500">
                  📱 Social Feed
                </Link>
                <Link href="/settings" className="hover:text-blue-500">
                  ⚙️ Settings
                </Link>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
