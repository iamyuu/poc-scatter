import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ScatterChartStocks } from "./with-d3";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ScatterChartStocks />
	</React.StrictMode>,
);
