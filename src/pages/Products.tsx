import { Box, Button, ButtonGroup, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { FC, useRef } from "react";
import { List } from "../components";
import { useSelector } from "react-redux";
import { AppStateType } from "../store/reducers/index";
import { useLocation } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const numberOfProducts = [8, 16, "All products"];

const Products: FC = () => {
  const tabs = [{ name: "Products" }, { name: "Created Products" }];
  const [value, setValue] = React.useState("0");
  const { products, loading, error } = useSelector(
    ({ products }: AppStateType) => {
      return {
        products: products.products,
        loading: products.loading,
        error: products.error,
      };
    }
  );
  const location = useLocation();
  const [amountProd, setAmountProd] = useLocalStorage("amountProduct", 8);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onButtonHandler = () => {};
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            position: "fixed",
            left: 0,
            width: "100%",
            background: "#fff",
            zIndex: 999,
          }}
        >
          {location.pathname === "/products" ? (
            <>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                style={{
                  position: "absolute",
                  right: 70,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 9999,
                }}
              >
                {numberOfProducts.map((number, i) => (
                  <Button
                    style={
                      (+amountProd || amountProd) === number
                        ? { background: "red" }
                        : {}
                    }
                    key={number}
                    onClick={() => setAmountProd(numberOfProducts[i])}
                  >
                    {number}
                  </Button>
                ))}
              </ButtonGroup>
            </>
          ) : null}
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            {tabs.map((tab, i) => (
              <Tab key={tab.name} label={tab.name} value={i.toString()} />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab, i) => (
          <TabPanel
            key={tab.name}
            value={i.toString()}
            sx={{ marginTop: "50px" }}
          >
            <List items={products} loading={loading} error={error} />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default Products;
