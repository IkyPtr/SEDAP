import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import Userfrom from "./Userfrom";
import HitungGaji from "./HitungGajiForm";
import './tailwind.css';

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwindCSS/>
            <Userfrom/>
            <HitungGaji/>
        </div>
    )