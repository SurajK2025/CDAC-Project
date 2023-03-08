import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const AddToCourse = (props) => {

    const editor = useRef(null);
	const [content, setContent] = useState('');

    const [apiData, setApiData] = useState({ chapterName:""})

    const handleChange = (event) => {
        const { name, value } = event.target
        setApiData({ ...apiData, [name]: value })

    }

    return (
        <>
        <br/><br/><br/><br/>
            <input type="text" name='chapterName' placeholder='Chapter name' onChange={handleChange} />
            <JoditEditor
                name='chapterContent'
                ref={editor}
                value={content}
                onChange={newContent => {setContent(newContent)}}
            />
        </>
    );

}
export default AddToCourse;