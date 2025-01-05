import React from 'react';
import './WorkingTable.css';

const WorkingTable: React.FC = () => {
  return (
    <div className="working_table">
    <div>
        <input
          type="text"
          className="presentation_text"
          placeholder="Type some text"
        />
      </div>
    </div>
  );
};

export default WorkingTable;
