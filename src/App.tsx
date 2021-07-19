import "./App.css";
import IPadIntroduction from "./component/IPadIntroduction";
import IPadChip from "./component/IPadChip";
import IPadXDR from "./component/IPadXDR";
import IPad5G from "./component/IPad5G";
import IPadSumamry from "./component/IPadSummary";

function App() {
	return (
		<div>
			<IPadIntroduction />
			<IPadChip />
			<IPadXDR />
			<IPad5G />
			<IPadSumamry />
		</div>
	);
}

export default App;
