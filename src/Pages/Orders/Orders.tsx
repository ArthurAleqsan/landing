import { useEffect } from "react";
import { WEB_SITE_ID } from "../../utils/constants";
import styles from "./styles.module.scss";
declare const vueApp: any;

const Orders = () => {

  const url = window.location.href;
  useEffect(() => {
    if (typeof window !== "undefined") {
      vueApp.setOption("postUrl", url);
      vueApp.setOption('shareTxt', '');
      vueApp.mount("#app");
    }
  }, [url]);

  return (
    <div className={styles.container}>
      <iframe src="/order.html"></iframe>
      {/* <div id="app" data-website-id={WEB_SITE_ID}>
        <script src="https://s3.eu-central-1.amazonaws.com/anyexcuse-hw.testing.mqd.me/js/app.js"></script>
        <link
          href="https://s3.eu-central-1.amazonaws.com/anyexcuse-hw.testing.mqd.me/css/app.css"
          rel="stylesheet"
        />
      </div>
      <div
        id="app"
        data-website-id="39195956-f2de-4e3b-825c-57b08ba8f9b5"
      ></div> */}
    </div>
  );
};

export default Orders;
