import JoditEditor from 'jodit-react';
import PropTypes from 'prop-types'; // Import PropTypes
import settings from "../settings/settings.json";
import TitleText from './TitleText';

const Jodit = ({ value, onContentChange, editorRef }) => {
  return (
    <section>
      <TitleText />
      <div>
        <JoditEditor
          value={value} 
          onBlur={onContentChange} 
          config={settings}
          ref={editorRef} 
        />
      </div>
    </section>
  );
};

// PropTypes validation
Jodit.propTypes = {
  value: PropTypes.string.isRequired, 
  onContentChange: PropTypes.func.isRequired,
  editorRef: PropTypes.object.isRequired, 
};

export default Jodit;
