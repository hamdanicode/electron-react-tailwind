import { Router, Route } from 'electron-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainSetting from './windows/settings';
import PrinterDevice from './components/printer-device/printerDevice';
const root = createRoot(document.body);
const Menu: any = () => {
        const { open } = window
        const handleClidk = (link:string) => {
                open(`#${link}`)
        }
        return <>
                <PrinterDevice />
                <button className='bg-sky-400' onClick={()=>{handleClidk("/about")}}>About</button>
                <div>

                <button className='bg-sky-400' onClick={()=>{handleClidk("/about/detail")}}>About Detail</button>
                </div>
                {/* <Link to="/about" >About</Link> */}
        </>
}

root.render(<div>
        <React.StrictMode>
                <Router
                        main={
                                <>
                                        <Route path="/" element={<Menu />} />
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
