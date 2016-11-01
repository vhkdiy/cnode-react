import React from "react";

function SidebarPanel({ title, titleLink, isQR, children }) {
  const rankingLink = <a href="#" className="ranking__link">{titleLink}</a>;
  return (
    <div className="sidebar__panel">
        {
          title
          ? (
            <div className="sidebar__panel__header">
              <span className="sidebar__panel__header_span">{title}</span>
              {
                titleLink ? rankingLink : null
              }
            </div>
          )
          : null
        }
      <div className={`sidebar__panel__inner${isQR ? ' qrcode--center': ''}`}>
        {children}
      </div>
    </div>
  )
}

export default SidebarPanel;