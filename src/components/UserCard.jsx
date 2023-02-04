import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import ModalInfo from "./ModalInfo";
// import VisibilityIcon from '@mui/icons-material/Visibility';

export const UserCard = ({ login, image, score }) => {
  const [info, setInfo] = useState();
  const [open, setOpen] = useState(false);

  const userEndpointUrl = `https://api.github.com/users/${login}`;


  const seeMore = (e) => {
    e.preventDefault();
    setOpen(true);
    fetch(userEndpointUrl)
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          boxShadow: "0 0 10px 4px #d0d0d0",
          cursor: "pointer",
          backgroundColor: "#F0FFF0",
        }}
        onClick={seeMore}
      >
        <Avatar
          alt="Remy Sharp"
          src={image}
          sx={{
            width: 100,
            height: 100,
            display: "flex",
            justifyContent: "center",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: 22,
              fontFamily: "Quicksand",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Name: {login}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: 22,
              fontFamily: "Quicksand",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Score: {score}
          </Typography>
          {/* <VisibilityIcon /> */}
        </CardContent>
      </Card>
      {open && (
        <ModalInfo
          open={open}
          setOpen={setOpen}
          info={info}
          mainInfo={{ image, login, score }}
        />
      )}
    </>
  );
};
