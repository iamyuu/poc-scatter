import * as React from "react";

interface Data {
	label: string;
	data: number;
}

const randColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
const randNum = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1) + min);

// constant variables
const lineBackground = "#EDEEF1";
const brandColor = "#1882E5";
const chartWidth = 1000; // TODO: make it full width of the container

// just randomize data
const items: Array<Data> = [...new Array(9)].map((_, i) => ({
	label: `Brand ${i + 1}`,
	data: randNum(0, 100),
}));

// add your brand to the beginning, so it can be highlighted easily
items.unshift({
	label: `Your brand`,
	data: 0,
});

interface ScatterChartProps {
	data: Array<Data>;
}

export function ScatterChart(props: ScatterChartProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={24}
			viewBox={`0 0 ${chartWidth} 24`}
			fill="none"
		>
			<rect width={chartWidth} height={24} rx={12} fill={lineBackground} />
			{props.data.map((d, i) => {
				// if the data is 0, we will set it to 1 to keep the circle visible
				const percentage = d.data === 0 ? 1 : d.data;
				// calculate x position based on the percentage
				const x = (chartWidth * percentage) / 100;
				// highlight the client's brand, which is the first item in the array
				const isHighlighted = i === 0;

				return (
					<circle
						key={i}
						cx={x}
						cy={12}
						r={10}
						fill={isHighlighted ? brandColor : randColor()}
						opacity={isHighlighted ? 1 : 0.3}
					/>
				);
			})}
		</svg>
	);
}

export function App() {
	return (
		<>
			<div
				style={{
					margin: 20,
					padding: 20,
					background: "white",
					borderRadius: 6,
				}}
			>
				<ScatterChart data={items} />
			</div>

			<pre
				style={{
					font: "12px/1.6 monospace",
				}}
			>
				{JSON.stringify(items, null, 2)}
			</pre>
		</>
	);
}
