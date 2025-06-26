import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="c-space text-sm text-[#84dfff] pb-8 pt-6 bg-transparent">
      {/* Garis Pemisah */}
      <div className="mb-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#33c2cc] to-transparent" />

      {/* Konten Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Info */}
        <div className="flex gap-3 text-neutral-400">
          <a href="#" className="hover:text-[#ffaa55] transition">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-[#ffaa55] transition">Privacy Policy</a>
        </div>

        {/* Sosial Media */}
        <div className="flex gap-4">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src={social.icon}
                className="w-5 h-5 opacity-80 hover:opacity-100"
                alt={social.name}
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-neutral-500 text-center">
          © {new Date().getFullYear()} Fiantata Supriadi. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;