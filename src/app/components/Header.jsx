"use client";

import Link from "next/link";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useEffect, useState, useContext } from "react";
import { LoadContext } from "./ClientWrapper"; // <-- adjust path if Header is in another folder

const Header = () => {
  const { loaded } = useContext(LoadContext);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const desktopLinkRefs = useRef([]);
  const mobileLinkRefs = useRef([]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/casestudies", label: "Case Studies" },
    { href: "/careers", label: "Careers Blog" },
    { href: "/details", label: "Details" },
    { href: "/faq", label: "FAQ'S" },
  ];

  // underline hover handlers with cleanup
  useLayoutEffect(() => {
    const all = [...desktopLinkRefs.current, ...mobileLinkRefs.current].filter(Boolean);
    const handlers = [];
    all.forEach((el) => {
      const underline = el.querySelector(".underline");
      if (!underline) return;
      const onEnter = () => gsap.to(underline, { width: "100%", duration: 0.35, ease: "power2.out" });
      const onLeave = () => gsap.to(underline, { width: "0%", duration: 0.35, ease: "power2.in" });
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      handlers.push({ el, onEnter, onLeave });
    });

    return () => {
      handlers.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  // entrance animation — run ONLY after loaded === true
  useLayoutEffect(() => {
    if (!loaded) return;
    if (!headerRef.current) return;

    // debug helper (uncomment while testing)
    // console.log("Header starting animation — loaded:", loaded, "headerRef:", headerRef.current);

    const ctx = gsap.context(() => {
      // small delay so the page wrapper fade is visible first, tweak delay if needed
      gsap.to(headerRef.current, {
        x: "0%",
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        delay: 0.06,
      });
    }, headerRef);

    return () => ctx.revert();
  }, [loaded]);

  // mobile menu toggle animation
  useEffect(() => {
    if (!menuRef.current) return;
    gsap.killTweensOf(menuRef.current);

    if (isOpen) {
      gsap.to(menuRef.current, { x: 0, opacity: 1, duration: 0.45, ease: "power2.out" });
    } else {
      gsap.to(menuRef.current, { x: "-120%", opacity: 0, duration: 0.45, ease: "power2.in" });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((s) => !s);

  return (
    <div
      ref={headerRef}
      // INITIAL hidden state so there's nothing to flash before animation runs
      className="opacity-0 transform z-[9999] relative translate-x-[100%] will-change-transform w-[94%] md:w-[88%] lg:w-[90%] h-[41px] sm:h-[74.98px] bg-white mx-auto rounded-[10px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] md:rounded-[20px] px-[20px] py-[10px] flex items-center justify-between"
    >
      {/* HAMBURGER */}
      <div className="block lg:hidden relative cursor-pointer" onClick={toggleMenu}>
        <img className="w-[16.89px] sm:w-[40px]" src="/img/homepage/hamburger.png" alt="Menu" />
        <div
          ref={menuRef}
          className="w-[140px] sm:w-[200px] top-[50px] sm:top-[80px] left-[0%] fixed bg-white z-[9999] rounded shadow-xl"
          style={{ transform: "translateX(-120%)", opacity: 0 }}
        >
          <ul className="flex flex-col items-start gap-2 sm:gap-3 z-[9999] p-2 text-[10px] sm:text-[20px] ps-[40px]">
            {links.map(({ href, label }, index) => {
              const isActive = pathname === href;
              return (
                <li
                  key={href}
                  ref={(el) => (mobileLinkRefs.current[index] = el)}
                  className={`relative cursor-pointer py-0 overflow-visible ${isActive ? "text-[#4C4886] font-semibold" : "text-[#666666]"}`}
                >
                  <Link href={href} className="relative z-10 inline-block">{label}</Link>
                  <span className={`underline absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] transition-all ${isActive ? "w-full bg-[#4C4886]" : "w-0 bg-black"}`}></span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* LOGO */}
      <div className="block sm:hidden">
        <img className="cursor-pointer w-[105px] h-[32px]" src="/img/homepage/mobile_logo.png" alt="Logo" />
      </div>

      {/* DESKTOP LOGO */}
      <div className="hidden sm:block">
        <img className="cursor-pointer" src="/img/homepage/desktop_logo.png" alt="Logo" />
      </div>

      {/* DESKTOP NAVIGATIONS */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-[2vw]">
          {links.map(({ href, label }, index) => {
            const isActive = pathname === href;
            return (
              <li
                key={href}
                ref={(el) => (desktopLinkRefs.current[index] = el)}
                className={`relative cursor-pointer py-1 overflow-visible ${isActive ? "text-[#4C4886] font-semibold" : "text-gray-700"}`}
              >
                <Link href={href} className="relative z-10 inline-block">{label}</Link>
                <span className={`underline absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] transition-all ${isActive ? "w-full bg-[#4C4886]" : "w-0 bg-black"}`}></span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CONTACT BUTTONS */}
      <div className="header-btns flex items-center gap-3">
        <button className="w-[28px] h-[26px] sm:w-[40px] sm:h-[39.44px] bg-[#4C4886] flex items-center justify-center rounded-[5px] sm:rounded-[10px] rotate-once cursor-pointer">
          <img className="hidden sm:block" src="/img/homepage/whatsapp.png" alt="WhatsApp" />
          <img className="block sm:hidden w-[10.98px] h-[]10.78px]" src="/img/homepage/whatsapp.png" alt="WhatsApp" />
        </button>
        <button className="w-[28px] h-[26px] sm:w-[40px] sm:h-[39.44px] bg-[#4C4886] flex items-center justify-center rounded-[5px] sm:rounded-[10px] rotate-once cursor-pointer">
          <img className="hidden sm:block" src="/img/homepage/gmail.png" alt="Gmail" />
          <img className="block sm:hidden w-[10.98px] h-[]10.78px]" src="/img/homepage/gmail.png" alt="Gmail" />
        </button>
      </div>
    </div>
  );
};

export default Header;
