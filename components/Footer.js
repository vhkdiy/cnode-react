import React from "react";

function Footer({location}) {
  return (
    <div className={`footer ${location.pathname === '/login' ? 'footer_fix_bottom' : ''}`}>
      <div className="container">
        <div className="footer__links">
          <a href="#" className="footer__links__a">RSS</a>
          <span> | </span>
          <a href="#" className="footer__links__a">源码地址</a>
        </div>

        <div className="footer__info">
          <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;