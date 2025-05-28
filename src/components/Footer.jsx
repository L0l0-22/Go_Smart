import { FiInstagram, FiFacebook, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className=" text-forest py-9 bg-beige ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold">PrepKitchen</div>
        <ul className="flex flex-wrap gap-6 text-forest">
          <li><a href="#plans" className="hover:underline">Plans</a></li>
          <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
          <li><a href="#faq" className="hover:underline">FAQs</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
        <div className="flex gap-4 text-xl">
          <a href="#"><FiInstagram className="hover:text-Darkgreen" /></a>
          <a href="#"><FiFacebook className="hover:text-Darkgreen" /></a>
          <a href="mailto:hello@PrepKitchen.app"><FiMail className="hover:text-Darkgreen" /></a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} PrepKitchen. All rights reserved.
      </div>
    </footer>
  );
}
