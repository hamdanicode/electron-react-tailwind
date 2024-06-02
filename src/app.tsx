import { Router, Route } from 'electron-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
const root = createRoot(document.getElementById("app"));
const Test:any=()=>{
        const {open}=window
        const handleClidk=()=>{
                open('#/about/detail')
        }
        return<>
        <div>Hello</div>
        <button onClick={handleClidk}>Go to Search screen</button>
        {/* <Link to="/about" >About</Link> */}
        </>
}

root.render(<div>

        
        <React.StrictMode>
                <Router
                        main={
                                <>
                                        <Route path="/" element={<Test/>} />
                                </>
                        }
                        about={
                                <>
                                <Route path="/" element={<div>Hello About</div>} />
                                <Route path="/detail" element={<div>Hello About detail</div>} />
                                </>
                        }
                        
                />
        </React.StrictMode>
</div>);


// import { Router, Route } from 'electron-router-dom'


// import ReactDom from 'react-dom/client'
// import React from 'react'

// export function AppRoutes() {
//   return (
//     <Router
//       main_window={
//         <>
//           <Route path="/" element={<MainScreen />} />
//           <Route path="/search" element={<div>Search</div>} />
//         </>
//       }
//       about={<Route path="/" element={<div>About Screen</div>} />}
//     />
//   )
// }



// ReactDom
//   .createRoot(document.getElementById('app'))
//   .render(
//     <React.StrictMode>
//       <AppRoutes />
//     </React.StrictMode>
//   )


//   import { useNavigate } from 'react-router-dom'


// export function MainScreen() {
//   const navigate = useNavigate()

//   return (
//     <main>
//       <button onClick={() => navigate('/search')}>Go to Search screen</button>

//     </main>
//   )
// }


