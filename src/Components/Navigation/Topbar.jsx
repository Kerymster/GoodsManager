import React from "react";
import "./Topbar.css";
const Topbar = () => {
  return (
    <div className="bar">
      <a href="https://denebunu.com/" target="_blank" rel="noreferrer">
        <img
          src="https://scontent.fist3-1.fna.fbcdn.net/v/t39.30808-6/274201121_3089205447957785_4842482944173532400_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xbYv2HK5TQYAX-f9O8u&_nc_oc=AQk84mos5QbORaCY0FAHlK6uytiY0upqzC4NeHIrF4QO10lkFJ1g3_nYaqOdthZRhtA&_nc_ht=scontent.fist3-1.fna&oh=00_AT9hBvribO43KgfuqW5nNp4ZP6FsjX_myWL55CfSzpXWWA&oe=624356AB"
          title="Denebunu logosu"
          alt="Denebunu logosu"
        ></img>
      </a>
      <h1 className="title">
        {" "}
        <span>Goods</span> Manager
      </h1>
      <h3 className="title-c">Contact Us</h3>
    </div>
  );
};

export default Topbar;
