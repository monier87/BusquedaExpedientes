import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/dashboard'
import Inventarios from '../Pages/inventarios'
import Ordenes from '../Pages/ordenes'
import Usuarios from '../Pages/usuarios'


function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/Inventario' element={<Inventarios />}>Configuracion</Route>
            <Route path='/Ordenes' element={<Ordenes />}>Expedientes</Route>
            <Route path='/Usuarios' element={<Usuarios />}>Usuarios</Route>

        </Routes>

    )

}

export default AppRoutes;