import React,{Component} from "react";
import _ from 'lodash';

const Pagination = (props) => {
    const {itemsCount,pageSize,currentPage,onPageChange} = props;
    console.log(currentPage);
    const pageCount = Math.ceil(itemsCount / pageSize)
    if(pageCount === 1) return null;
    const pages = _.range(1,pageCount + 1);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page =>
                    <li key={page}
                        className={(currentPage === page) ? 'page-item active' : 'page-item'}>
                        <a
                            style={{cursor:"pointer"}}
                            onClick={() => onPageChange(page)}
                            className="page-link">
                            {page}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}


export default Pagination;