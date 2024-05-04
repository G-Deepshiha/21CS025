import {Route,Routes} from 'react-router-dom';
// import Ques1 from './component/Ques1';
import Average from './component/Average';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/ques1" element={<Ques1/>}/> */}
        <Route path="/average" element={<Average/>}/>
      </Routes>
    </div>
  );
}

export default App;
