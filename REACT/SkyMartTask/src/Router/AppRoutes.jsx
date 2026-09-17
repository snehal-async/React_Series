import { Routes,Route } from "react-router"

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
        </Routes>
      
    </div>
  )
}

export default AppRoutes
