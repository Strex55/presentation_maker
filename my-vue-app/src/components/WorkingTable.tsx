import React from 'react';
import './WorkingTable.css';
type WorkingTableProps = {
  placeholder: string;
};

const WorkingTable: React.FC<WorkingTableProps> = ({ placeholder }) => (
  <div className="working_table">
    <i>working_table</i>
    <div>
      <input
        type="text"
        className="presentation_text"
        id="presentation_text"
        name="presentation_text"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default WorkingTable;
