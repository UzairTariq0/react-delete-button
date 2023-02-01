import { useState } from "react";
import "./button1.css";

const Button1 = () => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleClick = () => {
        setIsDeleting(true);
        setTimeout(() => {
            setIsDeleting(false);
        }, 2500);
    };
    return (
        <button
        onClick={handleClick}
        className={isDeleting ? "deleting" : ""}
        disabled={isDeleting}
        >
            <span>
                {isDeleting ? "Deleting ..." : "Delete Profile  "}
            </span>
            <span className="container">
                <span className="first">
                    <span className="paper"></span>
                </span>
                <span className="second">
                    <span className="mation"></span>
                </span>
                <span className="anim"></span>
                <span className="mat">
                    <span className="filler"></span>
                </span>
            </span>
        </button>
    )
}

export default Button1
