"use client";

import { ChangeEvent, useState } from "react";
import Markdown from "react-markdown";

function GetLocalStorageNote() {
    return localStorage.getItem("note") ?? "";
};

async function UpdateLocalStorageNote(value: string) {
    localStorage.setItem("note", value);
};

export default function NoteEditor() {
    const [note, setNote] = useState(GetLocalStorageNote());
    const [isEditing, setIsEditing] = useState(false);

    const updateNote = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNote(event.currentTarget.value);
        UpdateLocalStorageNote(event.currentTarget.value);
    };

    return (
        <div className="note">

            {isEditing &&
                <textarea className="w-full min-h-[460px] p-2 bg-dg-900" value={note}
                    onChange={e => updateNote(e)}></textarea>
            }

            {!isEditing &&
                <Markdown className="w-full min-h-[460px] p-2 bg-dg-900">
                    {note}
                </Markdown>
            }

            <div className="pt-1 bg-dg-950">
                <div className="bg-dg-900 p-2 flex">
                    <div className="mr-0 ml-auto cursor-pointer px-4 py-2 bg-lima-50 rounded text-dg-950"
                        onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? "Stop Editing" : "Edit"}
                    </div>
                </div>
            </div>

        </div>
    );
};
