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
import erc from "../../assets/images/erc.svg";

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
    <div className={styles.minediv}>
      <header className={"container"}>
        <nav className={styles.navbar + " navbar"}>
          <div className={styles.navbar_logo + " navbar_logo logo"}>
            <div className="logo">
              <Link to="/">
                <LogoSmall />
              </Link>
            </div>
          </div>

          <ul className={styles.tabNav}>
            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link to="/" className={styles.navbar_link + " hidden sm:block"}>
                Home
              </Link>
            </li>
            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link
                to="/contract"
                className={styles.navbar_link + " hidden lg:block"}
              >
                Contract
              </Link>
            </li>
            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link
                to="/tokenomics"
                className={styles.navbar_link + " hidden sm:block"}
              >
                Tokenomics
              </Link>
            </li>
            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link
                to="/roadmap"
                className={styles.navbar_link + " hidden lg:block"}
              >
                Roadmap
              </Link>
            </li>
            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link
                to="/platform"
                className={styles.navbar_link + " hidden sm:block"}
              >
                Platform
              </Link>
            </li>
            <li
              className={clsx(
                styles.navItem,
                styles.navItemDesktop,
                "navItemDesktop"
              )}
            >
              <Link
                to="/blog"
                className={styles.navbar_link + " hidden lg:block"}
              >
                Blog
              </Link>
            </li>
            <li
              className={clsx(
                styles.navItem,
                styles.navItemDesktop,
                "hidden xl:block"
              )}
            >
              <Link
                to="/media"
                className={styles.navbar_link + " hidden lg:block"}
              >
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
            <motion.li variants={linkVariants} className="block lg:hidden">
              <Link
                to="/"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Home
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block lg:hidden">
              <Link
                to="/contract"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Contract
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block lg:hidden">
              <Link
                to="/tokenomics"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Tokenomics
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block lg:hidden">
              <Link
                to="/roadmap"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Roadmap
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block lg:hidden">
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

          <div className={styles.navbar_subnav + " swap"}>
            <Link
              to="/"
              className={clsx(styles.subnav_link, "flex items-center")}
            >
              <img src={donutIcon} alt="donut" className="mr-3" />
              Swap
            </Link>
            <HamburgerMenuButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              className="block lg:hidden ml-5 hambur"
            />
          </div>
        </nav>
      </header>

      <div className={"container"}>
        <div className={"flex items-center pdcontainer"}>
          <div className="mr-1 flex-grow">
            <p className={styles.headerBadge + "headerBadge"}>
              <div className="block uppercase font-bold">
                introducing cuminu
              </div>
              <div className="ml-3">
                <img src={erc} alt="erc" />
              </div>
               {/* <div className="block ml-3 text-sm border border-pink-800 px-2 py-0.5 rounded-md">
                ERC-20
              </div> */}
            </p>
            <div className="md:flex md:justify-between md:items-center">
              <h1 className={styles.headerHeadlineText + " headerHeadlineText"}>
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
                      strings: ["Cummuniti"],
                      cursor: "_",
                      autoStart: true,
                      loop: true,
                      pauseFor: 500,
                      deleteSpeed: 10,
                      delay: 10,
                    }}
                  />
                </span>
                <span className="block">platform</span>
              </h1>
              <div className={styles.heroLogoBig + "heroLogoBig"}>
                <LogoBig />
              </div>
            </div>
            <div className="md:flex md:justify-between md:items-center justify-center fMs">
              <h2 className={styles.headerSubHeadline}>
                <span className="block">
                  Join us as we{" "}
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "helveticaExtraBold",
                      fontWeight: "extra bold",
                      fontStyle: "extra bold",
                    }}
                  >
                    revolutionize
                  </span>
                </span>
                <span className="block">adult entertainment forever.</span>
              </h2>
              <button
                  className={clsx(
                    "bg-pink-800 text-gray-900 mt-10 ml-auto mr-auto md:mr-0 rounded-lg text-xl uppercase block",
                    styles.ctaButton
                  )}
                >
                  {/*  <span className="md:hidden">invest</span> */}
                  <span
                    style={{
                      fontFamily: "BergenMonoBold",
                      fontWeight: "bold",
                      fontStyle: "bold",
                      fontSize: "30px",
                    }}
                  >
                    start investing
                  </span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
