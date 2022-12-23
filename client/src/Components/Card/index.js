import { Box, Image, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Card() {
  return (
    <Box
      className={styles.myCard}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="3"
    >
      <Link to="/">
        <Image
          width="440px"
          height="300px"
          src="https://img.freepik.com/free-photo/realistic-camera-lens-with-reflections-3d-rendering_460848-12234.jpg?w=1060&t=st=1662626157~exp=1662626757~hmac=5a3f600225a763fad8a58e99450a2aefb617b3a47e983e9f7cae697f8b0adf53"
          alt="products"
        ></Image>
        <Box p="6" ml="150">
          <Box d="flex" alignItems="baseline">
            08/09/2022
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            MacBook Pro
          </Box>
          <Box>100 TL</Box>
        </Box>
      </Link>
      <Button colorScheme="pink">Add to Card</Button>
    </Box>
  );
}

export default Card;
