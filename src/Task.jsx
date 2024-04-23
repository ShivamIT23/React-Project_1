import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function Task({actSubmit , value , actChange}) {
    return (
        <form onSubmit={(e) => actSubmit(e)}>
            <TextField
            name='task'
          id="filled-textarea"
          label="Add a Task"
          placeholder="Here"
          multiline
          variant="filled"
          margin='normal'
          onChange={actChange}
          value={value}
        />
        <br />
        <Button type='submit' variant="contained" endIcon={< AddIcon />}>Add</Button>
        </form>
    )
}