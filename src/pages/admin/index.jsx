import { Outlet } from "react-router-dom"
import "./Admin.scss"
import SiteBar from "./site-bar"
const Admin = () => {
    return (
        <>
            <main className="admin">
                <SiteBar />
                <Outlet />
            </main>
        </>
    )
}

export default Admin