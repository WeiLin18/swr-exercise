import React from "react";
import { Link, Typography } from "@material-ui/core";
import { css } from "@emotion/css";
import clx from "classnames";

import GoText from "assets/GoText";
import LineIcon from "assets/LineIcon";
import FbIcon from "assets/FbIcon";
import IgIcon from "assets/IgIcon";
import { layout, colors, breakpoints } from "styles";

const style = {
  root: css`
    height: 300px;
    overflow: hidden;
    position: relative;
    @media (max-width: ${breakpoints.pad}) {
      height: 480px;
    }
  `,
  circle: css`
    width: 2000px;
    height: 1000px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: calc(50% - 2000px / 2);
    background-color: ${colors.primary};
  `,
  circleSub: css`
    position: absolute;
    border-radius: 50%;
    background-color: ${colors.secondary};
  `,
  circleLeft: css`
    width: 300px;
    height: 300px;
    left: 380px;
    top: 110px;
  `,
  circleRight: css`
    width: 200px;
    height: 200px;
    right: 500px;
    top: 80px;
  `,
  content: css`
    position: relative;
    z-index: 5;
    padding-top: 100px;
    display: flex;
    flex-wrap: wrap;
  `,
  logo: css`
    margin-right: 20%;
    margin-bottom: 50px;
    @media (max-width: ${breakpoints.pad}) {
      margin-right: 36px;
    }
  `,
  snsIconBox: css`
    margin-bottom: 24px;
  `,
  snsIcon: css`
    margin-right: 20px;
  `,
  text: css`
    color: #fff;
  `,
  license: css`
    color: #fff;
    width: 100%;
    text-align: center;
  `,
};

const Footer = () => {
  return (
    <footer className={style.root}>
      <div className={style.circle}>
        <div className={clx(style.circleSub, style.circleLeft)} />
        <div className={clx(style.circleSub, style.circleRight)} />
      </div>
      <div className={clx(layout.container, style.content)}>
        <GoText width={160} className={style.logo} />
        <div>
          <div className={style.snsIconBox}>
            <LineIcon className={style.snsIcon} />
            <FbIcon className={style.snsIcon} />
            <IgIcon />
          </div>
          <Typography className={style.text}>
            UI Design：
            <Link
              variant="body2"
              color="textSecondary"
              href="https://2021.thef2e.com/users/6296427084285739362?week=1&type=1"
              underline="hover"
            >
              Rey Chang
            </Link>{" "}
            /{" "}
            <Link
              variant="body2"
              color="textSecondary"
              href="https://www.figma.com/file/YQ0Q6Gbj8YRVSntbVXcTPy/Week-1-%7C-%E5%8F%B0%E7%81%A3%E6%97%85%E9%81%8A%E6%99%AF%E9%BB%9E%E5%B0%8E%E8%A6%BD?node-id=0%3A1"
              underline="hover"
            >
              Mockup (original version)
            </Link>
          </Typography>
          <Typography className={style.text}>
            Website Development：
            <Link
              variant="body2"
              color="textSecondary"
              href="https://github.com/WeiLin18"
              underline="hover"
            >
              Wei Lin
            </Link>
          </Typography>
          <Typography className={style.text}>
            Source Data：
            <Link
              variant="body2"
              color="textSecondary"
              href="https://ptx.transportdata.tw/PTX/"
              underline="hover"
            >
              交通部PTX服務平臺
            </Link>
          </Typography>
        </div>
        <Typography variant="caption" className={style.license}>
          © 2021 Copyright LET’S GO
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
