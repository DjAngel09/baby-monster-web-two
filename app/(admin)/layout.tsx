import { Sidebar } from "@/resources";
import { AuthContextProvider } from "@/resources/contexts/AuthContext";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="es">
      <head />
      <body>
        <AuthContextProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </AuthContextProvider>
      </body>
    </html>
  )
}