import React from "react";

const Header = () => {
  return (
    <div className="text-black text-xl font-bold flex justify-between items-center px-2 md:px-24 py-4">
      <div className="logo">
        <a
          href="/"
          title="Go to home"
          className="flex items-center gap-3"
          rel="home"
        >
          <img
            className="emblem state-emb"
            id="logo"
            src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2020/01/2020010996.png"
            alt="logo"
          />

          <div className="logo_text">
            <strong lang="hi">राष्ट्रीय कैडेट कोर </strong>
            <h1 className="h1-logo">National Cadet Corps</h1>
          </div>
        </a>
      </div>
      <div className="flex flex-row items-center gap-6">
        <a
          aria-label="NCC Logo - External site that opens in a new window"
          href="#"
          target="_blank"
          title="NCC Logo"
        >
          <img
            className="sw-logo"
            src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2020/01/2020010935.png"
            alt="ncc-logo"
          />
        </a>
        <a href="https://amritmahotsav.nic.in/">
          <img className="w-[110px]" src="/assets/images/logo.jpg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
