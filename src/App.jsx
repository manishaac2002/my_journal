
import Jodit from "../src/Editor/JoditEditor.jsx"

function App() {

  const clickEvent = ({ content }) => {
    console.log(content);
  }
  return (
    <>
      <div
        className="mt-10 ml-5 mr-4 ">
        <h1 className='text-3xl font-bold mb-4'>Personal Journal</h1>
        <Jodit />
      </div>
      
      <button className='py-3 px-3 mt-4 ml-3 rounded bg-blue-600 text-white' onClick={clickEvent}>
        Save
      </button>

    </>
  )
}

export default App