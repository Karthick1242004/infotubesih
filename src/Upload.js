import React from 'react';
import Up from './upload.module.css';

export default function Upload() {
  return (
    <div className={Up.up}>
      <h1>Upload Project Details Here:</h1>
      <div className={Up.info}>
      <p>The uploaded file will undergo a plagiarism checking for project duplication and for AI generated content. So kindly make sure that the provided detials are strictly not generated by AI and its not a copy of other projects. The uploaded project must be unique. Mentor must verify the standard of the projects first, the project should be either final year project or a hackathon project or else a standalone project which has the same standard as a final year and hackathon projects. The mentor should make sure it</p>
      </div>
    </div>
  )
}
