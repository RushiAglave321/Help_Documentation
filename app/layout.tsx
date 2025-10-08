import "./globals.css";
import Navbar from "@/componants/Navbar";
import { ThemeProvider } from "./theme/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/componants/AppSidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col h-screen bg-gray-50 dark:bg-background text-gray-900 dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar (fixed at top) */}
          <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-background border-b border-gray-200 dark:border-border shadow-sm flex items-center px-4">
            <Navbar />
          </header>

          {/* Main 3-column layout */}
          <SidebarProvider>
            <div className="flex flex-1 overflow-hidden pt-16">
              {/* Left Sidebar */}
              <aside className="hidden lg:flex flex-col w-64 border-r border-gray-200 dark:border-border bg-white dark:bg-background overflow-y-auto scrollbar-hide">
                <AppSidebar />
              </aside>

              {/* Main Content */}
              <main className="flex-1 overflow-y-auto max-h-screen bg-gray-50 dark:bg-background">
                {children}
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
