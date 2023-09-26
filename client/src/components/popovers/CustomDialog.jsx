import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

const CustomDialog = ({ isOpen, closeDialog }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    closeDialog();
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You are not Signed in!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Open sign in page to attempt interview. This will help us to save
            your ongoing interview.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "gray" }}>
            Cancel
          </Button>
          <Button
            variant={"outlined"}
            onClick={() => {
              navigate("/log");
            }}
            autoFocus
          >
            Open
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CustomDialog;
