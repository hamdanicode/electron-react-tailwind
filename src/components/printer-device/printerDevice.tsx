
const PrinterDevice: any = () => {

    return <>
        <div className='container mx-auto bg-gradient-to-r border-2 rounded-md border-solid border-gray-600' >
            <label className="block text-sm">
                <span className="mb-1 block">Printer</span>
                <select
                    className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    defaultValue=""
                >
                    <option value="" disabled>Pilih…</option>
                    <option value="apple">EPSON</option>
                    <option value="banana">Panda Thermal</option>
                </select>
            </label>
        </div>

        {/* <Link to="/about" >About</Link> */}
    </>
}

export default PrinterDevice
