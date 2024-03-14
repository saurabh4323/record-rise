// App.js
import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Fields from "./Fields";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const deleteData = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header />

      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" endIcon={<AddIcon />}>
            Add
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>E-mail</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => (
          <Fields
            key={index}
            name={element.name}
            email={element.email}
            index={index}
            onDelete={deleteData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
