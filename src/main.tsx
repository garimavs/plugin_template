import ReactDomClient from "react-dom";
import { Dev } from "./index.dev";

ReactDomClient.createRoot(document.getElementById("root")!).render(<Dev />);