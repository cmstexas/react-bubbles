import React, {useState} from 'react';


const AddColorForm = ({ submitColor, initialValues }) => {
    const [newColor, setNewColor] = useState(initialValues || {color: "", code: ""});

    const handleChange = event => setNewColor({...newColor, [event.target.name]: event.target.value});

    const handleSubmit = event => {
      event.preventDefault();
      submitColor(newColor);
    };
  

  return (
  <form onSubmit={handleSubmit}>
    <input name="color"
            placeholder="color name"
            value={newColor.color}
            onChange={handleChange} />
    <input name="code"
            placeholder="hexcode"
            value={newColor.code.hex}
            onChange={handleChange} />
    <button type="submit">Add Color</button>
  </form>
  );
};

export default AddColorForm;