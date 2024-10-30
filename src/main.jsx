import { createRoot } from "react-dom/client";
import Routers from "./routers.jsx";
import "sweetalert2/src/sweetalert2.scss";
import "./index.css";

createRoot(document.getElementById("root")).render(<Routers />);
