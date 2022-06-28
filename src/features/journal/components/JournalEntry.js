import React from "react";
import { useDispatch } from "react-redux";
import { removeEntry, toggleEntryDone } from "../journalSlice";
import "./JournalEntry.css";

const JournalEntry = ({ children, id, isDone }) => {
    const dispatch = useDispatch();

    return (
        <div className="goal">
            <div className="entry-actions-container">
                <button
                    aria-label="Remove"
                    className="remove"
                    onClick={() => dispatch(removeEntry(id))}
                >
                    Remove
                </button>
                <button
                    aria-label="Mark Done"
                    className="done"
                    onClick={() => {
                        dispatch(toggleEntryDone(id));
                    }}
                >
                    {isDone ? "Redo" : "Done"}
                </button>
            </div>
            {children}
        </div>
    );
};

export default JournalEntry;