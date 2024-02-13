import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  // const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(""); //city location

  const [weatherData, setWeatherData] = useState<any>({});

  const API_KEY = process.env.NEXT_PUBLIC_API;

  // const url = `https://api.openweathermap.org/
  // data/2.5/weather?q=${location}&units=imperial&apiKey=${apiKey}`

  async function getWeatherForecast() {
    console.log("button pressed");
    try {
      const serverResponse = await fetch(
        " https://api.openweathermap.org/data/2.5/weather?" +
          "q=" +
          location +
          "&appid=" +
          API_KEY +
          "&units=metric"
      );
      const data = await serverResponse.json();
      console.log(data);
      if (data?.cod === "400") throw data;
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  }

  // console.log(locationInput);

  // const GrabWeatherForecast = () => {
  //   axios.get(url)
  //     .then((response) => {
  //       setWeather(response.data);
  //       console.log(response.data);
  //     }).catch(err => {
  //       console.log(err)
  //     })
  //   }

  return (
    <>
      <Head>
        <title>RainCheck | 2024</title>
        <meta
          name="description"
          content="Weather forecasting app using OpenWeatherMap api"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/logo.svg" sizes="32x32" />
      </Head>

      <main
        style={{
          position: "absolute",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Header />
        <div
          className={styles.mainFrameContainer}
          style={{ position: "absolute", left: "23%", top: "42%" }}
        >
          <div
            className="mainContainer"
            style={{ display: "flex", flexDirection: "row", gap: "16.875em" }}
          >
            <div className={"leftColumn"}>
              <div className={"textContainer"}>
                <h1
                  className={`mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl `}
                  style={{ fontFamily: "Gilroy-Bold", color: "var(--white)" }}
                >
                  RainCheck
                </h1>
                <h3
                  className={`text-3xl font-extrabold`}
                  style={{
                    fontFamily: "Gilroy-SemiboldItalic",
                    color: "var(--white)",
                  }}
                >
                  Weather Forecast
                </h3>
                <h4
                  className={`text-2xl font-extrabold`}
                  style={{
                    fontFamily: "Gilroy-Medium",
                    color: "var(--white)",
                    width: "8em",
                    marginTop: "1em",
                    marginBottom: "1em",
                  }}
                >
                  Making your days predictable
                </h4>
              </div>
              <div className={styles.buttonBox}>
                  <a className={styles.hoverEffect} href='/forecast' style={{color: 'var(--white)', display:'flex', flexDirection: 'row', gap:'1em'}}>
                    See the forecast
                    <Image 
                      src={'/assets/icons/arrow.svg'}
                      alt='arrow'
                      width={13}
                      height={15}
                    />
                  </a>
              </div>
            </div>
            <div className={"rightContainer"}>
              <Image
                src={"/assets/icons/umbrella.svg"}
                alt="umbrella vector"
                width={247}
                height={247}
              />
            </div>
          </div>
        </div>

        <Image
          className={styles.backgroundImage}
          src={"/assets/img/background-image.png"}
          alt="background image"
          width={1440}
          height={1024}
          style={{ position: "relative", zIndex: -4 }}
        />
        <Footer />
      </main>
    </>
  );
}
