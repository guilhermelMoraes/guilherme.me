import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="./src/styles/segoe-ui/Segoe-UI-Bold-Italic.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="segoeUiBoldItalic"
    />,
    <link
      rel="preload"
      href="./src/styles/segoe-ui/Segoe-UI-Bold.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="segoeUiBold"
    />,
    <link
      rel="preload"
      href="./src/styles/segoe-ui/Segoe-UI-Italic.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="segoeUiItalic"
    />,
    <link
      rel="preload"
      href="./src/styles/segoe-ui/Segoe-UI.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="segoeUi"
    />
  ]);
}