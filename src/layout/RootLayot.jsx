import { Outlet } from "react-router-dom"
import Sideber from '../components/Sidebar'


function RootLayot() {
  return (
    <div className="flex">
      <Sideber/>
      <main className="bg-slate-900 w-full h-full">
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayot