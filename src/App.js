import './App.css';
import Body from './components/body/index';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Analytics />
      <Body />
    </div>
  );
}

export default App;
