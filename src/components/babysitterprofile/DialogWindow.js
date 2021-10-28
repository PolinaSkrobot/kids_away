import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";

import ChooseDate from "../searchbabysitter/ChooseDate";
import ChooseStartTime from "../searchbabysitter/ChooseStartTime";
import ChooseEndTime from "../searchbabysitter/ChooseEndTime";
import ChooseLanguage from "../searchbabysitter/ChooseLanguage";
import ChooseActivity from "../searchbabysitter/ChooseActivity";
import ChooseAge from "../searchbabysitter/ChooseAge";
import ChooseChildren from "../searchbabysitter/ChooseChildren";
import Stack from "@mui/material/Stack";
import formatDate from "../helpers/formatter";
import axios from "axios";

import { useParams } from "react-router-dom";



import ConfirmWindow from "../confirmorder/ConfirmWindow"
import UserCabinet from "../usercabinet/UserCabinet"




export default function DialogWindow() {
  const { id } = useParams();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [activity, setActivity] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      sitter_id: id,
      address,
      activity,
      message,
      number,
      phone,
      age: localStorage.getItem("age"),
      date: formatDate(localStorage.getItem("date")),
      startTime: localStorage.getItem("startTime"),
      endTime: localStorage.getItem("endTime"),
      language: localStorage.getItem("language"), 
    };

    console.log("order", order);

    return axios.post('/neworder', null, {params: { order }})
     .then(response => {
     if(response.status === 200){
       <ConfirmWindow/>
       }
     })
      .then(()=> 
     <UserCabinet/>)
      };
  

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleClickOpen}>
        Invite Babysitter
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Invite Babysitter</DialogTitle>
        <DialogContent>
          <ChooseDate value={localStorage.getItem("date")} />
          <Stack spacing={2} direction="row">
            <ChooseStartTime value={localStorage.getItem("startTime")} />
            <ChooseEndTime value={localStorage.getItem("endTime")} />
          </Stack>

          <ChooseAge
            value={localStorage.getItem("age")}
          />

          <ChooseLanguage value={localStorage.getItem("language")} />

          <ChooseChildren
          value={number}
          onChange={(event) => setNumber(event.target.value)}/>

          <ChooseActivity
          value={activity}
          onChange={(event) => setActivity(event.target.value)} />

          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Message"
            label="Message"
            type="text"
            fullWidth
            variant="standard"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="phone"
            type="text"
            fullWidth
            variant="standard"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} component={Link} to="/user-cabinet">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
