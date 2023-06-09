import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { IndexLoader, ShowLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { CreateAction, UpdateAction, DeleteAction } from "./actions";
import AddPage from "./pages/AddPage"
import Search from "./pages/Search"
import Sites from "./pages/Sites"
import Update from "./pages/Update"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={IndexLoader}/>
            <Route path="recipe/:id" element={<Show/>} loader={ShowLoader}/>
            <Route path="create" action={CreateAction}/>
            <Route path="update/:id" action={UpdateAction}/>
            <Route path="delete/:id" action={DeleteAction}/>
            <Route path="add" element={<AddPage/>} />
            <Route path="search" element={<Search/>} />
            <Route path="sites" element={<Sites/>} />
            <Route path="recipe/:id/update" element={<Update/>} loader={ShowLoader}/>
        </Route>
    </>
))

export default router