import React from "react";
import { useDispatch } from "react-redux";
import { switchToNextBackgroundImage } from "../backgroundImageSlice";
import "./BackgroundImageRightControl.css";

const BackgroundImageRightControl = () => {
    const dispatch = useDispatch();

    return (
        <button
            aria-label="Switch to next wallpaper"
            className="btn"
            onClick={() => {
                dispatch(switchToNextBackgroundImage());
            }}
        >
            {">"}
        </button>
    );
};

export default BackgroundImageRightControl;