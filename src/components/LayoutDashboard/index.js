import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function LayoutDashboard({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState (false)
    console.log(isSidebarOpen)

const openSidebar = () => setIsSidebarOpen(true)
const closeSidebar = () => setIsSidebarOpen(false)

    return (
        <div>
            {/* elevar o estado: usar o estado que tem efeito em dois ou mais componentes em um "parent" acima desse componente, passando por props*/}
            <Sidebar isOpen={isSidebarOpen} toClose={closeSidebar}/>
            <Topbar toOpen={openSidebar}/>
            {children}
        </div>
    );
}