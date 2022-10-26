import React, { Component, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const ReactDraftWysiwyg = () => {
  const [editorState, setEditorState] = useState();

  const handleChange = () =>{
    console.log(editorState);
  }
  return (
    <Editor
    wrapperClassName="wrapper-class"
    editorClassName="editor-class"
    toolbarClassName="toolbar-class"
    editorState={editorState}
    onEditorStateChange={handleChange}
   />
  )
}