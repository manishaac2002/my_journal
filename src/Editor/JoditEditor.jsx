import JoditEditor from 'jodit-react';
import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import settings from "../settings/settings.json";

const Jodit = ({ onContentChange }) => {
  const [content, setContent] = useState('');

  // Pass content changes to parent component
  const handleChange = (newContent) => {
    setContent(newContent);
    onContentChange(newContent); // Update content in the parent component
  }

  return (
    <div>
      <JoditEditor
        value={content}
        onChange={handleChange}
        config={settings} />
    </div>
  );
}

// PropTypes validation
Jodit.propTypes = {
  onContentChange: PropTypes.func.isRequired, // Ensure it's a function
};

export default Jodit;
