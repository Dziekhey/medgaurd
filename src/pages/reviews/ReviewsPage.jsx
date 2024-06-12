import React, { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { reviews } from "../../Data/Reviews";
import ReviewModal from "../../components/review/ReviewModal";

const emojis = {
  Excellent: "😍",
  Good: "😄",
  Average: "🙂",
  Poor: "😞",
  Terrible: "😠",
};

const ReviewsPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="">
      
        <CardHeader
          title="My Reviews"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-title": {
              color: "martinique",
              fontWeight: "bold",
            },
          }}
        />
        <List>
          <div className="space-y-3">
            {reviews.map((review, index) => (
              <Card key={index} sx={{ mb: 1, color: '#383961' }}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{color: '#383961'}}>
                        {review.department} Department
                      </Typography>
                    }
                    secondary={
                      <>
                        <div className="pt-4">
                          <Typography variant="h6" sx={{color: '#383961'}}>
                            {emojis[review.rating]} {review.rating}
                          </Typography>
                          <div className="flex justify-between px-3">
                            <Typography
                              component="span"
                              variant="body1"
                              color="text.primary"
                              sx={{color: '#383961'}}
                            >
                              {review.comment}
                            </Typography>
                          </div>
                        </div>
                      </>
                    }
                  />
                </ListItem>
                <Divider />
              </Card>
            ))}
          </div>
        </List>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Review
          </Button>
        </Box>
     
      <ReviewModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default ReviewsPage;
