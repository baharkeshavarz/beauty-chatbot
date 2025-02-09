import { FormHelperText } from "@mui/material";

const ValidationHelperText = ({
  error = false,
  helperText = "",
  ...others
}) => {
  return (
    <FormHelperText
      style={{ marginTop: "2px", marginBottom: "4px" }}
      {...others}
      error
      sx={{ my: 0, fontSize: "10px" }}
    >
      {error ? helperText : ""}
    </FormHelperText>
  );
};

export default ValidationHelperText;
