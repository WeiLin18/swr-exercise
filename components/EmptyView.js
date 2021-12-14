import React from "react";
import { Typography } from "@material-ui/core";
import { css } from "@emotion/css";

const style = {
  root: css`
    width: 100%;
    min-height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
const EmptyView = ({ ...props }) => {
  return (
    <section className={style.root} {...props}>
      <Typography variant="h6">搜無結果，請使用其他搜尋設定</Typography>
    </section>
  );
};

export default EmptyView;
