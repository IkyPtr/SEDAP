export default function TailwindCSS(){
    return(
        <div>
            <h1 class="border m-4">Belajar Tailwind CSS</h1>
            <button className="bg-blue-500 text-white
                                px-4 py-2 mx-4 rounded
                                shadow-lg">Click Me</button>
            <Spacing/>
            <Typography/>
            <BorderRadius/>
            <BackgroundColor/>
            <FlexboxGrid/>
            <ShadowEffect/>
        </div>
    )
}

function Spacing(){
    return(
        <div className="bg-white shadow-lg p-5 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">Card Title</h2>
            <p className="mt-2 text-gray-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
        </div>
    )
}

function Typography(){
    return(
        <div>
            <h1 className="tet-3x1 font-bold txt-blue-600">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!!</p>
        </div>
    )
}

function BorderRadius(){
    return(
        <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg">KLik Saya</button>
        
    )
}

function BackgroundColor(){
    return(
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lx font-bold">Tailwind Colours</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel</p>
        </div>
    )
}

function FlexboxGrid(){
    return(
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffect(){
    return(
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2x1 transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}