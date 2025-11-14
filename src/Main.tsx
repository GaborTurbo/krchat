import { useState } from "preact/hooks";
import { LeftPane } from "./LeftPane"
import "./Main.css"
import { RightPane } from "./RightPane"
import { ConversationDto } from "./ChatService"




export function Main() {
    let [selected, setSelected] = useState<ConversationDto>();
    function onBack() {
        setSelected(undefined);
    }

    let mainClassVisible = selected === undefined ? "left" : "right";


    return <div class={"Main " + mainClassVisible}>
        <LeftPane selected={selected} onSelect={setSelected} />
        <RightPane conversation={selected} onBackFunc={onBack} />
    </div>
}