import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from 'react-redux';
import  { increment, decrement } from "../../app/counterSlice";

const Counter = () => {
    const result = useSelector(state => state.count.value);
    const dispatch = useDispatch();
    return (
      <>
        <Grid
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "30vw",
              height: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            <Button variant="contained" onClick={() => dispatch(increment(5))}>
              <AddIcon />
            </Button>
            <TextField
              id="outlined-basic"
              value={result}
              variant="outlined"
              inputProps={{ readOnly: true }}
            />
            <Button variant="contained" onClick={() => dispatch(decrement())}>
              <RemoveIcon />
            </Button>
          </Box>
        </Grid>
      </>
    );
};

export default Counter;