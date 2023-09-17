import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import FormData from "../interfaces/FormData";

const MyForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
          height: "100vh",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Leave us a message!
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: "Name is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="subject"
                control={control}
                defaultValue=""
                rules={{
                  required: "Subject is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{
                  required: "Message is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "10px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        {showAlert && (
          <Alert
            severity="success"
            sx={{ position: "fixed", top: "16px", right: "16px", zIndex: 9999 }}
          >
            Submitted!
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default MyForm;
