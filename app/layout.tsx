import DocsPage from "@/componants/DocsPage";
import "./globals.css";
import Navbar from "@/componants/Navbar";
import { ThemeProvider } from "./theme/ThemeProvider";
import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/componants/AppSidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar (fixed at top) */}
          <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background">
            <Navbar />
          </header>

          {/* Main 3-column layout */}
          <SidebarProvider>
            <div className="flex flex-1 overflow-hidden pt-16">
              {/* Sidebar */}
              <div className="w-64 border-r bg-background overflow-y-auto scrollbar-hide">
                <AppSidebar />
              </div>

              {/* Main Content */}
              <main className="flex-1 p-6 overflow-y-auto">
                {children}
              </main>

              {/* Docs Page */}
              <aside className="w-80 border-l bg-background p-4 overflow-y-auto scrollbar-hide">
                <DocsPage />
              </aside>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
