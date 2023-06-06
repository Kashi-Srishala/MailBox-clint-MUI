import { Typography } from "@mui/material";

const Heading = (props) => {
  return (
    <Typography
      variant="h3"
      color="red"
      fontWeight="700"
      style={{ marginTop: "5rem" }}
    >
      {props.label}
    </Typography>
  );
};

export default Heading;
