import MedalCount from "./components/medals";
import MedalList from "./components/medal_data";
import ScoreUpdater from "./components/scoreUpdater";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <MedalCount />
      <MedalList />
      <ScoreUpdater />
    </div>
  );
}

export default App;
