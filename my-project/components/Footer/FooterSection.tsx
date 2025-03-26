/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuItems = [
  { id: 738, text: "Feedback", url: "https://indiancc.nic.in/feedback/" },
  {
    id: 737,
    text: "Website Policies",
    url: "https://indiancc.nic.in/website-policies/",
  },
  { id: 736, text: "Contact Us", url: "https://indiancc.nic.in/contact-us/" },
  { id: 735, text: "Help", url: "https://indiancc.nic.in/help/" },
  {
    id: 734,
    text: "Web Information Manager",
    url: "https://indiancc.nic.in/web-information-manager/",
  },
];

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-3">
      <div className="flex text-center items-center justify-center bg-gray-900">
        <ul className="flex text-sm gap-6 py-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${item.id}`}
            >
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex gap-8 md:px-24 flex-col md:flex-row justify-between text-theme-text-500 leading-relaxed p-5">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl text-theme-text-300">
            <Image
              src="/assets/images/logo.jpg"
              alt="NCClogo"
              width={120}
              height={50}
              className="rounded-full flex justify-center items-center mr-2"
            />
          </h3>
          <p className="text-lg">Unity & Descipline</p>
          <div className="flex flex-row gap-2 justify-start items-center">
            <Link href="#" target="_blank">
              <Image
                src="/assets/images/TwitterIcon.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full flex justify-center items-center mr-2"
              />
            </Link>
            <Link href="#" target="https://www.facebook.com/share/19XKd3Erza/ ">
              <Image
                src="/assets/images/FaceBookIcon.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full flex justify-center items-center mr-2"
              />
            </Link>
            <Link href="#" target="_blank">
              <Image
                src="/assets/images/LinkedInIcon.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full flex justify-center items-center mr-2"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/nationalcadetcorps.davv?igsh=c241ZWp6c3A0dWlp "
            >
              <Image
                src="/assets/images/InstaIcon.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full flex justify-center items-center mr-2"
              />
            </Link>
            <Link href="#" target="_blank">
              <Image
                src="/assets/images/youtubeIcon.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full flex justify-center items-center mr-2"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h3 className="text-2xl text-theme-text-300">Get In Touch</h3>
          <p className="text-md">+91 9815783390</p>
          <p className="text-md">+91 9144880066</p>
          <p className="text-md">choudharytanish29@gmail.com</p>
          <p className="text-md">Davv@gmail.com</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl text-theme-text-300">Quicklinks</h3>
          <p className="text-md">
            <Link href={`/`}>Home</Link>
          </p>
          <p className="text-md">
            <Link href={`/`}>About</Link>
          </p>
          <p className="text-md">
            <Link href={`/`}>Gallery</Link>
          </p>
          <p className="text-md">
            <Link href={`/`}>Activities</Link>
          </p>
          <p className="text-md">FAQ</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl text-theme-text-300">Support</h3>
          <p className="text-md">Newsletter</p>
          <p className="text-md">Testimonials</p>
          <p className="text-md">FAQs</p>
          <p className="text-md">Contact</p>
          <p className="text-md">
            <Link href="/">Code of Conduct</Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center py-4 mt-4">
        <div className="flex flex-col text-center gap-2">
          <p className="mr-none">Content Owned by NCC DAVV</p>
          <p>
            Developed and hosted by{" "}
            <a
              href="http://www.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Parth & Tanish</b>
            </a>
            , <br />
          </p>
          <p>
            Last Updated: <strong>Oct 01, 2024</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
