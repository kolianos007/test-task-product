import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      style={{
        background: "#1976D2",
        padding: "20px 0",
        // position: "absolute",
        // bottom: 0,
        // left: 0,
        // right: 0,
        boxShadow:
          "0px 2px 4px 6px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 11px rgb(0 0 0 / 12%)",
      }}
    >
      <span style={{ color: "#fff", fontSize: "24px" }}>Made by Kol_Ko</span>
    </footer>
  );
};

export default Footer;
