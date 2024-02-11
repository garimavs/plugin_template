import React from "react";
import type { Config } from "./block-config";
import { css } from "@emotion/react";

const Block: React.FC<{ config: Config }> = ({ config }) => {
  return (
    <div
      css={css({
        display: "flex",
        backgroundColor: config.backgroundColor || "black",
        color: config.textColor || "white",
        fontFamily: "Arial, sans-serif"
      })}
    >
      <span
        css={css({
          padding: "1rem",
          fontSize: "4rem",
          color: config.iconColor || "white"
        })}
        className="material-icons-outlined"
      >
        {config.icon}
      </span>
      <div
        css={css({
          flexDirection: "column"
        })}>
        <div
        css={css({
          display: "flex",
          alignItems: "center",
          fontSize: "1.5rem",
          flex: 1,
          paddingLeft: "1rem",
          paddingBottom: "0.5rem",
          paddingTop: "1.2rem",
          textAlign: "center",
          fontWeight: "bold",
          fontStyle: "italic",
          font: "sans-serif"
        })}
      >
        <span>{config.text}</span>
      </div>
      <div
        css={css({
          display: "flex",
          alignItems: "center",
          fontSize: "0.8rem", // Adjust the font size for the additional text
          flex: 1,
          paddingLeft: "1rem",
          textAlign: "center"
        })}
      >
        <span>{config.additionalText}</span>
      </div>
      </div>
    </div>
  );
};

export default Block;
