import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import ReviewModal from "../../components/review/ReviewModal";
import ripples from "../../assets/ripples.svg";

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
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getReviews = async () => {
    setLoading(true);
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/reviews`);
    const data = await response.json();
    setReviews(data);
    setLoading(false);
  };

  const handleNewReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Box className="">
      <div className="flex justify-between lg:pr-3">
        <CardHeader
          title="My Reviews"
          sx={{
            pt: 3,
            alignItems: "center",
            "& .MuiCardHeader-title": {
              color: "martinique",
              fontWeight: "bold",
            },
          }}
        />
        <Box display="flex" justifyContent="center" mt={2}>
          <button
            className="bg-cobalt text-white px-3 rounded-lg "
            onClick={handleOpen}
          >
            Add Review
          </button>
        </Box>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <img src={ripples} alt="Loading" className="size-96 object-contain" />
        </div>
      ) : reviews.length === 0 ? (
        <div className="flex justify-center pt-10">
          <p className="text-martinique lg:text-2xl font-bold">
            You Haven't Posted Any Reviews
          </p>
        </div>
      ) : (
        <List>
          {reviews.map((review, index) => (
            <Card key={index} sx={{ mb: 1, color: "#383961" }}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ color: "#383961" }}>
                      {review.department} Department
                    </Typography>
                  }
                  secondary={
                    <>
                      <div className="pt-4">
                        <Typography variant="h6" sx={{ color: "#383961" }}>
                          {emojis[review.rating]} {review.rating}
                        </Typography>
                        <div className="flex justify-between px-3">
                          <Typography
                            component="span"
                            variant="body1"
                            color="text.primary"
                            sx={{ color: "#383961" }}
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
        </List>
      )}
      <ReviewModal
        open={open}
        handleNewReview={handleNewReview}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default ReviewsPage;
