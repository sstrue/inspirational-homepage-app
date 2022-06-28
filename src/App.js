import React from "react";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import Quote from "./features/quote/Quote";
import Error from "./features/error/Error";
import Journal from "./features/journal/Journal";
import BackgroundImageLeftControl from "./features/backgroundImage/components/BackgroundImageLeftControl";
import BackgroundImageRightControl from "./features/backgroundImage/components/BackgroundImageRightControl";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="backdrop">
        <BackgroundImage />
      </div>
      <header>
        <div className="weather-top">
          <Error />
          <Weather />
        </div>       
      </header>
      <aside className="left-wallpaper-control wallpaper-control">
        <BackgroundImageLeftControl />
      </aside>
      <main>
        <div className="body">
          <Journal />
        </div>
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <BackgroundImageRightControl />
      </aside>
      <footer>
        <div className="quote-end">
          <Quote />
        </div>
      </footer>
    </div>
  );
}

export default App;
