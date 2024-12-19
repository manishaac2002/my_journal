
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
        <div className="grid grid-cols-2">
          <div className=" mr-10 box-border border-2 border-gray-300 rounded">
            <p className="text-2xl font-semibold text-gray-600 px-5 py-4">Your Journal List </p>
          </div>
         
        <Jodit />
        </div>
      </div>
      
      <button className='py-3 px-5 mt-4 rounded bg-blue-600 text-white hover:bg-blue-800 ml-5' onClick={clickEvent}>
        Save
      </button>

    </>
  )
}

export default App