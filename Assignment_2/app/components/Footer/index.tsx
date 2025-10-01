import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black -mt-10" id="footer-section">
      <div className="mx-auto max-w-7xl pt-20 pb-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* COLUMN 1 - BRAND */}
          <div className="col-span-6 lg:col-span-4">
            <h3 className="text-white text-3xl font-bold mb-6">AstroTrack</h3>
            <p className="text-white text-opacity-80 text-base mb-8 max-w-sm">
              Mission-ready tools to plan, monitor, and track astronaut tasks with clarity and precision.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="footer-icons">
                <Image src="/images/footer/vec.svg" alt="facebook" width={15} height={20} />
              </Link>
              <Link href="https://twitter.com" className="footer-icons">
                <Image src="/images/footer/twitter.svg" alt="twitter" width={20} height={20} />
              </Link>
              <Link href="https://instagram.com" className="footer-icons">
                <Image src="/images/footer/instagram.svg" alt="instagram" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* COLUMN 2 - QUICK LINKS */}
          <div className="col-span-6 lg:col-span-2">
            <p className="text-white text-xl font-semibold mb-6">Quick Links</p>
            <ul>
              <li className="mb-4">
                <Link href="/" className="text-white text-opacity-80 hover:text-blue-400 transition">Home</Link>
              </li>
              <li className="mb-4">
                <Link href="#aboutus-section" className="text-white text-opacity-80 hover:text-blue-400 transition">About</Link>
              </li>
              <li className="mb-4">
                <Link href="#testimonial-section" className="text-white text-opacity-80 hover:text-blue-400 transition">Testimonials</Link>
              </li>
              <li>
                <Link href="#contact-section" className="text-white text-opacity-80 hover:text-blue-400 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 - CONTACT INFO */}
          <div className="col-span-6 lg:col-span-3">
            <p className="text-white text-xl font-semibold mb-6">Contact</p>
            <ul className="space-y-4">
              <li className="text-white text-opacity-80">Email: support@astrotrack.com</li>
              <li className="text-white text-opacity-80">Phone: +91 89075 4032</li>
              <li className="text-white text-opacity-80">Location: TPK, MDU</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mx-auto max-w-7xl">
        <div className="pt-6 pb-6 px-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-white text-opacity-70 text-sm">
          <p>© {new Date().getFullYear()} AstroTrack. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
