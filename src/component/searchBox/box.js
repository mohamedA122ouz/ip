import { forwardRef, useEffect } from "react";
import "./box.css";
import img from "../img/pattern-bg-desktop.png";


const Box = forwardRef(function ({ handleClick }, ref) {
    useEffect(() => {
        console.log("is running");
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                handleClick();
            }
        });
        return (document.removeEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                handleClick();
            }
        }));
    },[]);
    return (
        <div className="container" style={{ backgroundImage: { img } }}>
            <h1>IP Address Tracker</h1>
            <div className="search">
                <input className="input" type="text" placeholder="Search for any IP address or domain" ref={ref} />
                <button className="button" onClick={handleClick}>&gt;</button>
            </div>
        </div>
    );
})
export default Box;