import { Sidebar } from "@/resources";
import { AuthContextProvider } from "@/resources/contexts/AuthContext";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <body>
          <AuthContextProvider>
            <Sidebar/>
            {children}
          </AuthContextProvider>
        </body>
      </html>
    )
}