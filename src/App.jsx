import Jodit from "../src/Editor/JoditEditor.jsx";
import { useState, useRef } from 'react';

function App() {
  const [editorContent, setEditorContent] = useState(''); // State to hold content from Jodit
  const [savedJournals, setSavedJournals] = useState([]); // To hold saved journals
  const editorRef = useRef(null); // Ref to access the editor instance

  const clickEvent = () => {
    // Check if editor content is not empty before saving
    if (editorContent.trim() !== '') {
      setSavedJournals([...savedJournals, editorContent]); // Save content as new journal
        console.log(editorContent);
        const heading = editorContent.split("</h1>")[0]
        console.log(heading);
      // Clear content and manage cursor
      setEditorContent('');
      // Focus the editor after content is cleared to keep the cursor in place
    }
  };

  return (
    <>
      <div className="mt-10 ml-5 mr-4">
        <h1 className="text-3xl font-bold mb-4">Personal Journal</h1>
        <div className="grid grid-cols-2">
          <div className="mr-10 box-border border-2 border-gray-300 rounded">
            <p className="text-2xl font-semibold text-gray-500 px-5 py-4">Your Journal List</p>
            <div className="space-y-4">
              {savedJournals.map((journal, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded">
                  <div dangerouslySetInnerHTML={{ __html: journal }} />
                </div>
              ))}
            </div>
          </div>
          <Jodit
            value={editorContent}
            onContentChange={setEditorContent}
            editorRef={editorRef} // Pass the ref to the editor
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="py-3 px-5 mt-4 rounded bg-blue-600 text-white hover:bg-blue-800 mr-4"
          onClick={clickEvent}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default App;
