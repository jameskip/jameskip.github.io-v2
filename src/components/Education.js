import React from "react";
import { Card, Image, Text } from "rebass";

export default (props) => (
  <Card id="education">
    <Image
      sx={{
        width: ["100%", "15%"],
        borderRadius: 8,
      }}
      src={
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
      }
    />
    <Text fontSize={[3, 4, 5]} fontWeight="bold" color="primary">
      Education
    </Text>
  </Card>
);
