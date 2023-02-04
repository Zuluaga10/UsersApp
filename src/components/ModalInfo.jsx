import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  boxShadow: "0 0 10px 4px #d0d0d0",
  p: 4,
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "lavenderblush",
};

export default function ModalInfo({ open, setOpen, info, mainInfo }) {
  const handleClose = () => setOpen(false);

  console.log(info);
  if (!info) {
    return;
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Avatar
              alt="Remy Sharp"
              src={mainInfo.image}
              sx={{
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
              }}
            />
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: 18,
                fontFamily: "Quicksand",
                paddingTop: "10px",
              }}
            >
              Name: {mainInfo.login}
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: 18,
                fontFamily: "Quicksand",
              }}
            >
              Score: {mainInfo.score}
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: 18,
                fontFamily: "Quicksand",
              }}
            >
              Public repos: {info.public_repos}
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                fontSize: 18,
                fontFamily: "Quicksand",
              }}
            >
              Followers: {info.followers}
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                fontSize: 18,
                fontFamily: "Quicksand",
              }}
            >
              Following: {info.following}
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                fontSize: 18,
                fontFamily: "Quicksand",
              }}
            >
              Public guists: {info.public_gists}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
