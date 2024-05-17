import { createRoot } from "react-dom/client";

function App() {
	return <p>Lorem ipsum dolor sit amet.</p>;
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
