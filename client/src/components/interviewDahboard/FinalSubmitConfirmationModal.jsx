import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

const FinalSubmitConfirmationModal = ({ isOpen, closeDialog, submit }) => {
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
          {"Are you Sure to End Interview?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your answers will be saved and you will not be able to continue this
            interview again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "gray" }}>
            Cancel
          </Button>
          <Button
            variant={"contained"}
            onClick={() => {
              submit();
            }}
            color="error"
          >
            Yes, Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default FinalSubmitConfirmationModal;
