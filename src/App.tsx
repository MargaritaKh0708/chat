
import { AuthorizationPage } from 'components/Pages/AuthorizationPage';
import { ChatPage } from 'components/Pages/ChatPage';
import { Routes, Route } from 'react-router-dom';
import './index.css';


function App() {
  
  return (
    <div className='App'> 
    <Routes>
      <Route path='/' element={<AuthorizationPage/>}></Route>
      <Route path='/chat' element={<ChatPage/>}></Route>
    </Routes>
     </div>
  );
}

export default App;
