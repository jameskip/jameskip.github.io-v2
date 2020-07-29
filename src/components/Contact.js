import React from "react";
import { Image, Box, Text } from "rebass";

export default (props) => (
  <Box id="contact">
    <Image
      src={
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
      }
      sx={{
        width: ["100%", "15%"],
        borderRadius: 8,
      }}
    />
    <Text fontSize={[3, 4, 5]} fontWeight="bold" color="primary">
      Contact
    </Text>
  </Box>
);
