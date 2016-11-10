import React from "react";
import { Link } from "react-router";

function Paginate({page, tab}) {
  let pageNum = 0;
  pageNum = (page < 4) ?  1 : parseInt(page) - 2;
  let renderPagination = n => {
    return [n, n + 1, n + 2, n + 3, n + 4]
  }

  return (
    <ul className="pagination">
      <li><Link to={`?tab=${tab}&page=1`}>&laquo;</Link></li>
      {
        renderPagination(pageNum).map((n, i) =><li className={(page == n) ? 'active disabled' : ''} key={i}>
        <Link to={`?tab=${tab}&page=${n}`}>{n}</Link></li>)  
      }
      <li><a>...</a></li>
      <li><Link to={`?tab=${tab}&page=50`}>&raquo;</Link></li>
    </ul>
  );
}

export default Paginate;