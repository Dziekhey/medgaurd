import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  IconButton,
  MenuItem,
} from "@mui/material";
import { departments, emojis } from "../../Data/Reviews";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", 
  maxWidth: 400, 
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

const ReviewModal = ({ open, handleClose, handleNewReview }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [comment, setComment] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/reviews`, {
        method: "POST",
        body: JSON.stringify({
          rating: selectedEmoji,
          department: department,
          comment: comment,
        }),
        headers: { "Content-Type": "application/json"}
      });

      const data = await response.json();

      if (response.status === 201) {
        handleNewReview(data);
        toast.success("Review was posted successfully");
        setSelectedEmoji(null);
        setComment("");
        setDepartment("");
        handleClose();
      } else {
        toast.error(data.errorMsg);
      }
    } catch (error) {
      console.log(error);
    } 
  };

  const CloseAndReset = () => {
    setSelectedEmoji(null);
    setComment("");
    setDepartment("");
    handleClose();
  }

  return (
    <Modal
      open={open}
      onClose={CloseAndReset}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: '#383961'}}>
          Leave a Review
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, color: '#383961' }}>
          {emojis.map((emoji, index) => (
            <Box key={index} sx={{ textAlign: "center", mx: 1, color: '#383961' }}>
              <Typography variant="body2" className="text-xs text-martinique lg:text-md">{emoji.name}</Typography>
              <IconButton
                onClick={() => setSelectedEmoji(emoji.name)}
                color={selectedEmoji === emoji.name ? "primary" : "default"}
                sx={{
                  fontSize: "1.5rem",
                  ...(selectedEmoji === emoji.name && {
                    bgcolor: "primary.light",
                    borderRadius: "50%",
                    color: '#383961'
                  }),
                  "&:hover": {
                    bgcolor: "primary.light",
                    borderRadius: "50%",
                  },
                }}
              >
                {emoji.value}
              </IconButton>
            </Box>
          ))}
        </Box>
        <TextField
          select
          label="Choose department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          fullWidth
          sx={{ color: '#383961'}}
          margin="normal"
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Comment"
          multiline
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          fullWidth
          margin="normal"
          sx={{ color: '#383961'}}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" onClick={CloseAndReset} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReviewModal;
