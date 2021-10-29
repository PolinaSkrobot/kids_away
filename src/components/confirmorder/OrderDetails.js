import { React, useState,  }  from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ConfirmBadge from "../confirmorder/ConfirmBadge";
import Chip from '@mui/material/Chip';


export default function OrderDetails(props) {



  return (
    <Paper
      elevation={3}
      sx={{ width: 550 }}
      style={{ margin: "10px", padding: "10px" }}
    >
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Stack
          direction="row"
          spacing={30}
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            display: "flex",
            margin: "20px",
          }}
        >
          <Typography color="secondary" variant="h5">
            Order Details
          </Typography>
          <Chip label={props.status}/>
        </Stack>

        <ListItem>
          <ListItemText primary="1. Date " />

          <Typography color="primary" style={{ fontWeight: 600 }}>
            {props.date}
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Time " />
          <Typography color="primary" style={{ fontWeight: 600 }}>
            {props.startTime}-{props.endTime}
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="3. Age of children " />
          <Typography color="primary" style={{ fontWeight: 600 }}>
            text text text
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="4. Number of children " />
          <Typography color="primary" style={{ fontWeight: 600 }}>
            text text text
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="5. Language " />
          <Typography color="primary" style={{ fontWeight: 600 }}>
            text text text
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="6. Activities " />
          <Typography color="primary" style={{ fontWeight: 600 }}>
            text text text
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="6. Address " />
          <Typography color="primary" style={{ fontWeight: 600 }}>
            {props.address}
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemText primary="7. Message " />
          <Typography color="primary" style={{ fontWeight: 600 }}>
            {props.message}
          </Typography>
        </ListItem>
      </List>

      <Stack
        spacing={5}
        direction="row"
        alignItems="center"
        justifyContent="center"
        margin="20px"
      >
        <Button
          variant="contained"
          onClick={props.onFinish}
          style={{ width: "30%" }}
        >
          Finish order
        </Button>
        <Button
          variant="contained"
          onClick={props.onDelete}
          style={{ width: "30%" }}
        >
          Delete Order
        </Button>
      </Stack>
    </Paper>
  );
}
