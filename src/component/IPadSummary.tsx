import React, { useEffect, useRef } from "react";
import iPadSumamry from "./image/iPadSummary.png";
import "./staticStyle.css";
import "./animatedStyle.css";

export default function IPadSumamry() {
	const ref1 = useRef<HTMLDivElement>(null);
	const ref2 = useRef<HTMLDivElement>(null);
	const ref3 = useRef<HTMLDivElement>(null);
	const ref4 = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ref1.current?.classList.add("in-animation-zoomIn");

		ref1.current?.addEventListener("animationend", () => {
			ref2.current?.classList.add("in-animation-zoomIn");
		});

		ref2.current?.addEventListener("animationend", () => {
			ref3.current?.classList.add("in-animation-zoomIn");
		});

		ref3.current?.addEventListener("animationend", () => {
			ref4.current?.classList.add("in-animation-zoomIn");
		});

		ref4.current?.addEventListener("animationend", () => {
			ref1.current?.classList.add("out-animation-zoomIn");
		});
	}, []);

	return (
		<div className="container">
			<h2 className="headingNoMargin" ref={ref1}>
				M1
			</h2>
			<h2 className="headingNoMargin" ref={ref2}>
				XDR
			</h2>
			<h2 className="headingNoMargin" ref={ref3}>
				5G
			</h2>
			<h2 className="headingNoMargin" ref={ref4}>
				끝판왕
			</h2>
			<img src={iPadSumamry} className="image" />
		</div>
	);
}
