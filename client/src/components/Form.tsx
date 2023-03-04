import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@pankod/refine-mui";
import { FormProps } from "interfaces/common";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CustomButton from "./CustomButton";

const Form = ({
  type,
  register,
  onFinish,
  onFinishHandler,
  formLoading,
  courseImage,
  handleImageChange,
  handleSubmit,
}: FormProps) => {
  return (
    <Box
      width="90%"
      margin="0 auto"
      padding="10px 20px"
      borderRadius="12px"
      bgcolor="#fcfcfc"
    >
      <form
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={handleSubmit(onFinishHandler)}
      >
        <FormControl>
          <FormHelperText
            sx={{
              fontSize: "16px",
              margin: "2px 0",
              color: "#1e1e1e",
            }}
          >
            Course Name
          </FormHelperText>
          <TextField
            fullWidth
            required
            color="info"
            variant="outlined"
            {...register("title", { required: true })}
          />
        </FormControl>

        <FormControl>
          <FormHelperText
            sx={{
              fontSize: "16px",
              margin: "2px 0",
              color: "#1e1e1e",
            }}
          >
            Course Description
          </FormHelperText>
          <TextareaAutosize
            style={{
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              borderColor: "rgba(0, 0, 0, 0.23)",
            }}
            minRows={5}
            fullWidth
            required
            placeholder="Write Description..."
            color="info"
            variant="outlined"
            {...register("description", { required: true })}
          />
        </FormControl>

        <Stack direction="row" gap={4}>
          <FormControl sx={{ flex: 1 }}>
            <FormHelperText
              sx={{
                fontSize: "16px",
                margin: "2px 0",
                color: "#1e1e1e",
              }}
            >
              Select Course Type
            </FormHelperText>
            <Select
              variant="outlined"
              required
              displayEmpty
              color="info"
              inputProps={{ "aria-label": "without lable" }}
              defaultValue="Web"
              {...register("category", { required: true })}
            >
              <MenuItem value="Web">Web</MenuItem>
              <MenuItem value="Devops">Devops</MenuItem>
              <MenuItem value="Android">Android</MenuItem>
              <MenuItem value="UiUx">UI UX</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ flex: 1 }}>
            <FormHelperText
              sx={{
                fontSize: "16px",
                margin: "2px 0",
                color: "#1e1e1e",
              }}
            >
              Select Course Level
            </FormHelperText>
            <Select
              variant="outlined"
              required
              displayEmpty
              color="info"
              inputProps={{ "aria-label": "without lable" }}
              defaultValue="Beginner"
              {...register("level", { required: true })}
            >
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Advance">Advance</MenuItem>
              <MenuItem value="Expert">Expert</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack direction="column">
          <Stack direction="row" alignItems="center">
            <FormHelperText
            sx={{
              fontSize: "16px",
              margin: "2px 0",
              color: "#1e1e1e",
            }}
            >
              Choose a Photo
            </FormHelperText>
            <Button
              component="label"
            >
              <AddPhotoAlternateIcon />
              <input 
                hidden
                accept= "image/*"
                type="file"
                onChange={(e) => {
                  // @ts-ignore
                  handleImageChange(e.target.files[0])
                }}
              />
            </Button>
          </Stack>
          <Typography fontSize={14} sx={{ wordBreak: "break-all" }}>
            {courseImage?.name}
          </Typography>
        </Stack>

        <CustomButton 
          type="submit"
          title={formLoading ? "Submitting..." : "Submit"}
          backgroundColor="#475be8"
          color="#fff"
        />
      </form>
    </Box>
  );
};

export default Form;
