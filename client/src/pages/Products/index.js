import React from "react";
import Card from "../../components/Card";
import styles from "./styles.module.css";
import { Grid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import axios from "axios";
// import { fetchProductList } from "../../api";

function Products() {
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("http://localhost:4000/product")
  //    .then((res) => res.json())
  //    .catch((err) => alert(err))
  // );
  const { isLoading, error, data } = useQuery("products", () => {
    axios
      .post("http://localhost:4000/product")
      .then((res) => res.json())
      .catch((err) => err);
  });
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log("Data", data);

  return (
    <div className={styles.products}>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default Products;
