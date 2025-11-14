import { useState } from "preact/hooks"
import { TextInput } from "./TextInput";
import { chatService } from "./ChatService";
import { IconButton } from "./IconButton";

export function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [displayName, setDisplayName] = useState("");
    let [register, setRegister] = useState(false);

    function loginRegister() {
        if (register)
            chatService.send({ type: "register", email, password, displayName, staySignedIn: true });
        else
            chatService.send({ type: "login", email, password, staySignedIn: true });
    }

    return <div class="Login">
        <span onClick={e => {
            document.documentElement.classList.toggle("theme-light");
            localStorage["theme"] = localStorage["theme"] ? "" : "light";
        }} class="logo" >🗪</span>
        <TextInput type="email" placeholder="Email (someone@example.com)" value={email} onChange={setEmail} onEnter={loginRegister} autofocus={true} />
        <TextInput type="password" placeholder="Password" value={password} onChange={setPassword} onEnter={loginRegister} />

        {
            register &&
            <TextInput type="text" placeholder="Display Name (Agent Smith)" value={displayName} onChange={setDisplayName} onEnter={loginRegister} />
        }

        { <button style="display:block;" type="button" onClick={loginRegister}>
			{ register ? "Register" : "Login" }
            </button>}


        {/* {register ?
            <button type="button" onClick={loginRegister}>Register</button> :
            IconButton("login", "Login", loginRegister)
        } */}

        <p>{register ? "Switch back to " : "Have no account yet? Go and "}
            <a href="" onClick={e => {
                e.preventDefault();
                setRegister(!register);
            }}>
                {register ? "Login" : "Register"}
            </a>
        </p>
    </div>
}