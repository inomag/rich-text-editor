import React, {useState} from 'react';
import './richTextEditor.css'
import {getFormatString} from './utils'

function RichTextEditor({label, value, onChange}) {

    const [boldSelected, setBoldSelected] = useState(false);
    const [bold, setBold] = useState([]);

    const [htmlString, setHtmlString] = useState('');

    const toggleButton = (btn) => {
        if(btn === 'b'){
            // start means all characters after this until the end will be bold
            if(!boldSelected){
                setBold([...bold, {start: value.length-1, end: -1}])
            }else{
                const arr = [...bold];
                const last = arr.pop();
                setBold([...arr, {start: last.start, end: value.length}])
            }
            setBoldSelected(!boldSelected);
        }
    }

    const setRichTextValue = (val) => {
        const formattedString = getFormatString(val, bold);
        setHtmlString(formattedString);
        onChange(val)
    }

  return (
    <div>
        <div className='richTextLabel'>{label}</div>
        <textarea onChange={(e) => setRichTextValue(e.target.value)} value={value} className='richTextEditor' rows={8} cols={50}/>
        <div>
            <button className={`${boldSelected ? 'selectedBtn' : ''} btn`} onClick={() => toggleButton('b')}>B</button>
            {/* <button className={`${selectedButton.i ? 'selectedBtn': ''} btn`} onClick={() => toggleButton('i')}>I</button>
            <button className={`${selectedButton.u ? 'selectedBtn' : ''} btn`} onClick={() => toggleButton('u')}>U</button> */}
        </div>
        <div><span dangerouslySetInnerHTML={{__html: htmlString}}/></div>

    </div>
  )
}

export default RichTextEditor;