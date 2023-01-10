import ReactDom from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
