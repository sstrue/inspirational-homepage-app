import React from "react";
import { useDispatch } from "react-redux";
import { switchToPreviousBackgroundImage } from "../backgroundImageSlice";
import "./BackgroundImageLeftControl.css";

const BackgroundImageLeftControl = () => {
    const dispatch = useDispatch();

    return (
        <button
            aria-label="Switch to previous wallpaper"
            className="btn"
            onClick={() => {
                dispatch(switchToPreviousBackgroundImage());
            }}
        >
            {"<"}
        </button>
    );
};

export default BackgroundImageLeftControl;