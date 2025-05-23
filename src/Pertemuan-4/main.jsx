import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./FrameworkList";
import SearchData from "./SearchList"
import Rensponsive from "./Rensponsive";
import CariData from "./Barang";
createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <SearchData/>
            <FrameworkList/>
            <Rensponsive/> */}
            <CariData/>
        </div>
    )