
import JoditEditor from 'jodit-react';
import { useState } from 'react';
import settings from "../settings/settings.json"
const Jodit = () => {
    const [content, setContent] = useState('');
  return (
    <div>
     <JoditEditor
          value={content}
          onChange={(newContent) => setContent(newContent)}
          config={settings}/>
          </div>
  )
}

export default Jodit