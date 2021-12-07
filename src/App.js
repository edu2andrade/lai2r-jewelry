import './App.css';

function App() {
  return (
    <div className="flex items-center h-screen justify-center bg-platinum">
      <div className="flex items-center h-64 w-1/2 justify-evenly gap-2 bg-salmon">
        <div className="w-24 h-12 bg-darkGray text-center text-platinum rounded-md m-2">1</div>
        <div className="w-24 h-12 bg-darkGray text-center text-platinum rounded-md m-2">2</div>
        <div className="w-24 h-12 bg-darkGray text-center text-platinum rounded-md m-2">3</div>
      </div>
    </div>
  );
}

export default App;
