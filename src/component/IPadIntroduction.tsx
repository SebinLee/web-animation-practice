import "./staticStyle.css";
import iPadImage from "./image/iPadPro.jpeg";

export default function IPadIntroduction() {
	return (
		<div className="container">
			<img src={iPadImage} className="image" />
			<div className="introductionContainer">
				<h1 className="heading">iPad Pro</h1>
				<h2 className="text">
					막강한 성능의
					<br />
					Apple M1 칩 탑재.
				</h2>
			</div>
		</div>
	);
}
