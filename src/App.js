import './App.css';
const api = {
key: "71a7647154d9132a86ef428e3f44c703",
base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="app">
  <main>
    <div className="search-box">
      <input 
        type="text"
        className="search-bar"
        placeholder="Search..."

        />
    </div>
    <div className="location-box">
      <div className="location">
        Alaska, USA
        <div className="date">

        </div>
      </div>
    </div>
  </main>
    </div>
  );
}

export default App;
