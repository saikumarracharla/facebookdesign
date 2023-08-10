import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React, { Component } from "react";

import viratImage from "../Pictures/virat.png";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

import VideocamIcon from "@mui/icons-material/Videocam";
import CollectionsIcon from "@mui/icons-material/Collections";
import status1 from "../Pictures/status1.png";
import status2 from "../Pictures/status2.png";
import status3 from "../Pictures/status3.png";
import status4 from "../Pictures/status4.png";

class Body extends Component {
  render() {
    return (
      <Box>
        <Card
          sx={{ maxWidth: "45%", backgroundColor: "#181820", padding: "5px" }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <LocalLibraryIcon sx={{ color: "white" }} />
                <Typography sx={{ color: "white" }}>Stories</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <SubscriptionsIcon sx={{ color: "white" }} />
                <Typography sx={{ color: "white" }}>Reels</Typography>
              </Box>
            </Box>
            <Divider sx={{ background: "white", marginTop: "5px" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                marginTop: "10px",
              }}
            >
              <Box component="img" src={status1} alt="alt" />
              <Box component="img" src={status2} alt="alt" />
              <Box component="img" src={status3} alt="alt" />
              <Box component="img" src={status4} alt="alt" />
            </Box>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginTop: "30px",
            marginLeft: "20px",
          }}
        >
          <Box component="img" src={viratImage} alt="alt" />
          <Typography
            sx={{
              backgroundColor: "#181820",
              padding: "10px",
              width: "35%",
              color: "white",
              borderRadius: "20px",
              marginLeft: "18px",
            }}
          >
            what's on your mind
          </Typography>
        </Box>
        <Box>
          <Box>
            <VideocamIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white" }}>Live Video</Typography>
          </Box>
          <Box>
            <CollectionsIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white" }}>Photo/Video</Typography>
          </Box>
          <Box>
            <CollectionsIcon sx={{ color: "white" }} />
            <Typography>Photo/Video</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Body;
