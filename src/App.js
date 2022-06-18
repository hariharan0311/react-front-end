import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { postFunc } from "./Redux/Reducer/SampleReducer/Action";

const Styles = {
  heading: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  heading1: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
  },
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postFunc());
  }, []);

  const { data } = useSelector((state) => ({
    data: state.SampleReducer.post,
  }));

  return (
    <div>
      <div style={{ padding: 40, width: "50%" }}>
        <h2>List</h2>
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={Styles.heading}>Id</TableCell>
                  <TableCell style={Styles.heading}>Name</TableCell>
                  <TableCell style={Styles.heading}>City</TableCell>
                  <TableCell style={Styles.heading}>Age</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.city}</TableCell>
                      <TableCell>{item.age}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}

export default App;
