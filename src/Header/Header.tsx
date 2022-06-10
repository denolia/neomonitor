import { Layout } from "antd";
import React from "react";
import css from "./Header.module.css";

function Header() {
  return (
    <Layout.Header className={css.header}>
      <div style={{ display: "flex" }}>
        <div className={css.iconWrapper}>
          <img className={css.icon} src="favicon.png" alt="" />
        </div>
        <div className={css.name}>NeoMonitor</div>
      </div>

    </Layout.Header>

  );
}
export default Header;
