import React from "react";
import JournalEntry from "./JournalEntry";
import "./JournalEntries.css";

const JournalEntries = ({ entries }) => {
    const colors = [
        "surface-blue",
        "surface-red",
        "surface-green",
        "surface-orange"
    ];

    const getEntryColor = (index) => colors[index % colors.length];

    return (
        <div className="surface">
            <ul className="entries-list">
                {entries.map(({ text, isDone}, index) => (
                    <li
                        key={text}
                        className={`${getEntryColor(index)} surface-styles ${
                            isDone ? "entry-done" : ""
                        }`}
                    >
                        <JournalEntry id={index} isDone={isDone}>
                            {text}
                        </JournalEntry>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JournalEntries;