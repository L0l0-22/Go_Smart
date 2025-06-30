import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import logo from "../assets/logoFooter.png"
import footer from "../assets/footer.png"
import mail from "../assets/email.png"
import phone from "../assets/phone-call.png"
import location from "../assets/location.png"

export default function Footer() {
  return (
    <footer className="bg-main text-white p-12 rounded-t-[50px] relative overflow-hidden">
        <div className="absolute right-0 top-[-5px] hidden md:block h-full">
          <img src={footer} alt="Go Smart Footer" className="h-full"/>
        </div>
      <div className="container mx-auto flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:justify-between items-start">
        {/* Left*/}
        <div className="lg:max-w-sm w-full">
          <img src={logo} alt="Go Smart Logo" className="w-48 mb-4" />
          <p className="md:line-clamp-3 line-clamp-5 text-lg leading-relaxed text-gray-300">
            Go Smart Is Dedicated To Innovation And Accessibility, Creating
            Impactful Software Solutions For Everyone, Everywhere.
          </p>
          <div className="flex gap-4 mt-4 text-2xl text-gray-300">
            <FaGooglePlusG className="hover:text-white cursor-pointer rounded-full border p-2 w-10 h-10" />
            <FaFacebookF className="hover:text-white cursor-pointer rounded-full border p-2 w-10 h-10" />
            <FaTwitter className="hover:text-white cursor-pointer rounded-full border p-2 w-10 h-10" />
            <FaInstagram className="hover:text-white cursor-pointer rounded-full border p-2 w-10 h-10" />
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col md:flex-row md:space-x-28 space-y-10 md:space-y-0 lg:mr-52">
          <div className="w-full lg:w-auto">
          <h4 className="text-lg font-medium  mb-3">Useful Links</h4>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
            <li><a href="#technologies" className="hover:text-white">Technologies</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
          </ul>
          </div>
          <div className="w-full lg:w-auto">
            <h4 className="text-lg font-medium mb-3">Contact Us</h4>
            <div className="space-y-6  text-gray-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full border border-[#3232bb] bg-[#242485]">
                  <img src={mail} alt="Go Smart mail" className="w-6 max-w-[1.5rem]" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p>Info@Gosmart.Ae</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full border border-[#3232bb] bg-[#242485]">
                  <img src={phone} alt="Go Smart phone" className="w-6 max-w-[1.5rem]" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p>+20 109 434 3113</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full border border-[#3232bb] bg-[#242485]">
                  <img src={location} alt="Go Smart location" className="w-6 max-w-[1.5rem]" />
                </div>                <div>
                  <p className="font-medium">Reach Us</p>
                  <p>
                    16A/4 1st-Laselky Division, <br />
                    New Maadi, Cairo, Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
