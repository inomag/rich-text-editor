import RichTextEditor from './atoms/richTextEditor';
import './App.css';
import {useState} from 'react';
function App() {

  const [value, setValue] = useState('');
  return (
    <div style={{padding: '24px'}}>
      <RichTextEditor label="Rich Text Editor" value={value} onChange={setValue}/>
      
    </div>
  );
}

export default App;
