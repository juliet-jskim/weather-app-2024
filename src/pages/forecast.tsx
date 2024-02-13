import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/Forecast.module.css";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Forecast() {
  const [location, setLocation] = useState(""); //city location

  const [weatherData, setWeatherData] = useState<any>({});
  const currentDate = new Date(weatherData.dt * 1000);
  const formattedDate = currentDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const API_KEY = process.env.NEXT_PUBLIC_API;


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
          style={{ position: "absolute", left: "19%", top: "25%" }}
        >
          <div className="mainContainer">
            <div className={styles.searchForm}>
              <h3
                style={{
                  fontFamily: "Gilroy-Bold",
                  fontSize: "18px",
                  color: "var(--black)",
                }}
              >
                Check Today's Forecast
              </h3>
              <div className={"formContainer"}>
                <form
                  className={"search-bar"}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    getWeatherForecast();
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search a location ex: Vancouver"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{
                      fontFamily: "Gilroy-Medium",
                      color: "var(--black)",
                      width: "22em",
                      fontSize: "16px",
                      borderRadius: "10px",
                      padding: "1em 1em 0.5em 1em",
                      background: "var(--white)",
                      boxShadow:
                        "0px 4px 12px 0px rgba(0, 0, 0, 0.13), -6px -5px 11px 4px #FFF",
                      backdropFilter: "blur(17px)",
                    }}
                  />
                  <button
                    onClick={() => getWeatherForecast()}
                    type="submit"
                    style={{
                      width: "30px",
                      height: "30px",
                      position: "relative",
                      right: "3em",
                    }}
                  >
                    <Image
                      src={"/assets/icons/search-icon.svg"}
                      alt="search icon"
                      width={30}
                      height={30}
                    />
                  </button>
                </form>
              </div>
            </div>
            <div>
              {Object.keys(weatherData).length !== 0 ? (
                <>
                  <div className={styles.currentWeatherCard}>
                    <div className={styles.leftColumn}>
                      <h3
                        style={{
                          fontFamily: "Gilroy-Black",
                          fontSize: "60px",
                          color: "var(--black)",
                          position: "relative",
                          top: ".375em",
                        }}
                      >
                        {weatherData.main.temp.toFixed(0)} &deg;C{" "}
                      </h3>
                      <h1
                        style={{
                          fontFamily: "Gilroy-Blackitalic",
                          fontSize: "32px",
                          color: "var(--black)",
                          textTransform: "uppercase",
                        }}
                      >
                        {weatherData.name}
                      </h1>
                      <p
                        style={{
                          fontFamily: "Gilroy-Semibold",
                          color: "var(--grey)",
                        }}
                      >
                        {new Date(weatherData.dt * 1000).toLocaleString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                    <div className={styles.rightColumn}>
                      <div>
                        <h1
                          style={{
                            fontFamily: "Gilroy-Black",
                            fontSize: "36px",
                            color: "var(--black)",
                            textTransform: "capitalize",
                          }}
                        >
                          {weatherData.weather[0].description}
                        </h1>
                      </div>
                      <div className={styles.windSpeed}>
                        <Image
                          src={"/assets/icons/wind-icon.svg"}
                          alt="wind icon"
                          width={44}
                          height={37}
                        />
                        <p
                          style={{
                            fontFamily: "Gilroy-Semibold",
                            color: "var(--grey)",
                          }}
                        >
                          wind
                        </p>
                        <h3
                          style={{
                            fontFamily: "Gilroy-Bold",
                            fontSize: "17px",
                            color: "var(--black)",
                          }}
                        >
                          {weatherData.wind.speed.toFixed(0)}km/h
                        </h3>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>

        <Image
          className={styles.backgroundImage}
          src={"/assets/img/background-image-2.png"}
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
