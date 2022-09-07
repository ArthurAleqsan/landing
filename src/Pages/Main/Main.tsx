import { useEffect, useState } from "react";
import About from "../../Components/About";
import Loader from "../../Components/Common/Loader";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Home from "../../Components/Home";
import Location from "../../Components/Location";
import Store from "../../Components/Store";
import { API } from "../../Services/Api";
import { WEB_SITE_ID } from "../../utils/constants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "../Orders";
import Images from "../../Components/Images";

const Main = () => {
  const handleScroll = (key: any) => {
    document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    links: {
      app_store_link: "/",
      play_store_link: "/",
    },
    socialLinks: {
      facebook: "/",
      instagram: "/",
      twitter: "/",
      youtube: "/",
    },
    primary_color: "",
    secondary_color: "",
    name: '',
    email:'',
  });
  useEffect(() => {
    setIsLoading(true);
    API.GET(`websites/${WEB_SITE_ID}`)
      .then((res) => {
        setData({
          logo: res.logo,
          primary_color: `#${res.primary_color}`,
          secondary_color: `#${res.secondary_color}`,
          name: res.name,
          email: res.email,
          links: {
            app_store_link: res.app_store_link || "/",
            play_store_link: res.play_store_link || "/",
          },
          socialLinks: {
            facebook: res.facebook || "/",
            instagram: res.instagram || "/",
            twitter: res.twitter || "/",
            youtube: "/",
          },
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <Router>
      <main>
        <Header
          handleScroll={handleScroll}
          primary_color={data.primary_color}
          secondary_color={data.secondary_color}
          logo={data.logo}
        />
        <Routes>
          <Route path="/orders.html" element={<Orders />} />
          <Route
            path="/"
            element={
              <>
                <Home primary_color={data.primary_color} logo = {data.logo} />
                <About />
                <Location />
                <Images />
                <Contact primary_color={data.primary_color} email = {data.email} />
                <Store links={data.links} />
              </>
            }
          />
        </Routes>
        <Footer socialLinks={data.socialLinks} name = {data.name} />
      </main>
    </Router>
  );
};

export default Main;
