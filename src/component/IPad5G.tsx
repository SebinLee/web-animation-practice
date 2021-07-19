import "./staticStyle.css";
import iPad5G from "./image/iPad5G.jpeg";

export default function IPad5G() {
	return (
		<div className="container">
			<h1 className="heading">초고속 스피드의 셀룰러.</h1>
			<img src={iPad5G} className="image" />
		</div>
	);
}
