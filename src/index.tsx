import { render } from "preact";

import "./index.css";
import "./Login.css";
import { Login } from "./Login";
import { Main } from "./Main";
import { useEffect, useState } from "preact/hooks";
import { chatService } from "./ChatService";
import "./Pwa"

export function App() {
	// let [loggedIn, setLoggedIn] = useState(false)
	let [renderCount, setRenderCount] = useState(1);
	console.log("App render count:" + renderCount);

	useEffect(() => {
		// const listener = () => setLoggedIn(!!chatService.inbox);
		const listener = () => setRenderCount(x => x+1);
		chatService.addListener(listener);
		return () => chatService.removeListener(listener);
	}, []);

	return chatService.inbox ? <Main /> : <Login />;
}

render(<App />, document.getElementById("app"));

let theme = localStorage["theme"];
document.documentElement.classList.toggle("theme-" + theme);
