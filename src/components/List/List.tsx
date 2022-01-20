import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";
import React, { FC, useCallback } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { IProduct } from "../../types/types";

interface PropTypes {
  items: IProduct[];
  loading?: boolean;
  error?: any;
}

const List: FC<PropTypes> = ({ items, loading, error }) => {
  const [amountProd] = useLocalStorage("amountProduct", 8);
  const SkeletonProduct = useCallback(
    () => (
      <div
        style={{
          width: "345px",
          height: "532px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #F6F6F6",
          borderRadius: "8px",
          marginBottom: "15px",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={345}
          height={300}
          style={{ borderRadius: "8px", marginBottom: "20px" }}
        />
        <Skeleton
          variant="rectangular"
          width={313}
          height={125}
          style={{ borderRadius: "8px" }}
        />
        <Skeleton
          variant="rectangular"
          width={50}
          height={20}
          style={{ borderRadius: "8px", marginTop: "20px" }}
        />
      </div>
    ),
    []
  );
  return (
    <Box
      display="flex"
      sx={{ justifyContent: "space-between", flexWrap: "wrap" }}
    >
      {loading
        ? Array(amountProd)
            .fill(0)
            .map((_, i) => <SkeletonProduct key={i} />)
        : items.map(({ id, image, price, title }, ind) => {
            amountProd > ind && (
              <Card sx={{ width: 345, marginBottom: 2 }} key={id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
    </Box>
  );
};

export default List;
