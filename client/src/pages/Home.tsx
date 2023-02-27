import { useGetIdentity, useList } from "@pankod/refine-core";
import { Box, Typography, Stack, useMediaQuery } from "@pankod/refine-mui";
import { Rocket } from "assets";
import PieChart from "components/layout/charts/PieChart";

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 998px)");
  const { data: user } = useGetIdentity();

  return (
    <Box bgcolor="#fff">
      <Box
        sx={{
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          gap: 2,
        }}
      >
        <Box
          width="90%"
          p={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "12px",
            backgroundColor: "#F5F5FB",
            margin: "10px auto",
            lineHeight: 3,
          }}
        >
          <Typography
            variant="h2"
            fontSize={20}
            fontWeight="bold"
            color="#111026"
          >
            Welcome Back
            <span
              style={{
                fontSize: "18px",
                color: "#111026",
                fontWeight: "normal",
                opacity: "0.8",
                marginLeft: "5px",
              }}
            >
              {user?.given_name}
            </span>
          </Typography>
          <img src={Rocket} alt="" width="200px" height="auto" />
        </Box>

        <Box
          width="90%"
          borderRadius="12px"
          p={2}
          margin="15px auto"
          bgcolor="#F5F5FB"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            my={2}
          >
            <Typography fontSize={18} fontWeight={400} color="#11142d">
              Your Mintor :
            </Typography>
            <Typography>John Doe</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" my={2}>
            <Typography fontSize={18} fontWeight={400} color="#11142d">
              Your Next Session :
            </Typography>
            <Typography>Next Tue at 7:00 PM</Typography>
          </Stack>
        </Box>
      </Box>

      <Box
        width="90%"
        sx={{
          margin: "20px auto",
          borderRadius: "12px",
        }}
      >
        <PieChart />
      </Box>

      {/* <Box width="90%" sx={{ margin: "20px auto", borderRadius: "12px" }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize={16} fontWeight={700} ml={2} color="#111026">Your Courses</Typography>

        </Stack>
        
        <Stack 
          gap={2} 
          mt={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          flex={2}
        >
          <CourseCard 
          title="Node.Js"
          category="Web Development"
          type="W"
          bgColor="#4D4CAC"
        />
        <CourseCard 
          title="EB CLI"
          category="DevOps"
          type="D"
          bgColor="#9698D6"
        />
        <CourseCard 
          title="Express"
          category="Web Development"
          type="W"
          bgColor="#FF808B"
        />
        </Stack>
      </Box> */}
    </Box>
  );
};

export default Home;
