import { FC, PropsWithChildren } from "react"
import { AdminNavbar } from "../navbar"

export const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="min-vh-100 d-grid" style={{ gridTemplateRows: 'auto 1fr auto' }}>
            <AdminNavbar />
            <main className="container py-5">
                {children}
            </main>
        </div>
    )
}
