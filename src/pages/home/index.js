import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypeWritter from "typewriter-effect";
import HamburgerMenuButton from "components/hamburgerMenuButton";
import { ReactComponent as LogoSmall } from "assets/images/logo_small.svg";
import { ReactComponent as LogoBig } from "assets/images/logo_big.svg";
import donutIcon from "assets/images/donut.svg";
import styles from "./style.module.css";
import clsx from "clsx";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((state) => !state);
  };

  const menuVariants = {
    initial: {
      top: 48,
      scaleY: 0,
      opacity: 0,
      originY: 0,
    },
    opened: {
      top: 48,
      scaleY: 1,
      opacity: 1,
      originY: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.01,
      },
    },
    closed: {
      originY: 0,
      scaleY: 0,
      opacity: 0,
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 2,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        {/* Navbar start */}
        <nav className={styles.navbar}>
          <div className={styles.navbar_logo}>
            <Link to="/">
              <LogoSmall />
            </Link>
          </div>

          <ul className={styles.tabNav}>
            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link to="/" className={styles.navbar_link}>
                Home
              </Link>
            </li>

            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link to="/contract" className={styles.navbar_link}>
                Contract
              </Link>
            </li>

            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link to="/tokenomics" className={styles.navbar_link}>
                Tokenomics
              </Link>
            </li>

            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link to="/roadmap" className={styles.navbar_link}>
                Roadmap
              </Link>
            </li>

            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link to="/platform" className={styles.navbar_link}>
                Platform
              </Link>
            </li>

            <li
              className={clsx(
                styles.navItem,
                styles.navItemDesktop,
                "hidden lg:block"
              )}
            >
              <Link to="/blog" className={styles.navbar_link}>
                Blog
              </Link>
            </li>

            <li
              className={clsx(
                styles.navItem,
                styles.navItemDesktop,
                "hidden lg:block"
              )}
            >
              <Link to="/media" className={styles.navbar_link}>
                Media
              </Link>
            </li>
          </ul>

          <motion.ul
            className={styles.navbar_nav}
            variants={menuVariants}
            animate={isMobileMenuOpen ? "opened" : "closed"}
            initial="initial"
          >
            <motion.li variants={linkVariants} className="block md:hidden">
              <Link
                to="/"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Home
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block md:hidden">
              <Link
                to="/contract"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Contract
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block md:hidden">
              <Link
                to="/tokenomics"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Tokenomics
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block md:hidden">
              <Link
                to="/roadmap"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Roadmap
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block md:hidden">
              <Link
                to="/platform"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Platform
              </Link>
            </motion.li>
            <motion.li variants={linkVariants}>
              <Link
                to="/blog"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Blog
              </Link>
            </motion.li>
            <motion.li variants={linkVariants}>
              <Link
                to="/media"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Media
              </Link>
            </motion.li>
          </motion.ul>

          <div className={styles.navbar_subnav}>
            <Link
              to="/"
              className={clsx(styles.subnav_link, "flex items-center")}
            >
              <img src={donutIcon} alt="donut" className="mr-1" />
              Swap
            </Link>
            <HamburgerMenuButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              className="block lg:hidden"
            />
          </div>
        </nav>
        {/* Navbar end */}

        {/* Hero start */}
        <div className="py-10 px-8 md:px-24 text-left xxl:px-4 xxl:max-w-9xl xxl:mx-auto">
          <div className="w-full flex items-center">
            <div className="mr-1 flex-grow">
              <p className={styles.headerBadge}>
                <span className="block">introducing cuminu</span>
                <span className="block ml-2 border border-pink-800 px-2 rounded-md">
                  erc-20
                </span>
              </p>
              <h1 className={styles.headerHeadlineText}>
                <span className="block">The token that</span>
                <span className="block">powers the</span>
                <span
                  className="block text-pink-800"
                  style={{
                    fontFamily: "helveticaExtraBold",
                    fontWeight: "normal",
                    fontStyle: "normal",
                  }}
                >
                  <TypeWritter
                    options={{
                      strings: ["community"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
                <span className="block">platform</span>
              </h1>
            </div>

            <div className={styles.heroLogoBig}>
              <LogoBig />
            </div>
          </div>

          <div className="md:flex md:justify-between md:items-center">
            <h2 className={styles.headerSubHeadline}>
              <span className="block">
                Join us as we{" "}
                <span
                  className="text-white"
                  style={{
                    fontFamily: "helveticaExtraBold",
                    fontWeight: "normal",
                    fontStyle: "normal",
                  }}
                >
                  revolutionize
                </span>
              </span>
              <span className="block">adult entertainment forever.</span>
            </h2>
            <div className="mt-7 text-center md:mt-0">
              <button
                className={clsx(
                  "bg-pink-800 text-gray-900 py-2 px-4 rounded-lg text-xl uppercase",
                  styles.ctaButton
                )}
              >
                <span className="lg:hidden">invest</span>
                <span className="hidden lg:block">start investing</span>
              </button>
            </div>
          </div>
        </div>
        {/* Hero End */}
      </header>
    </>
  );
};

export default Home;
