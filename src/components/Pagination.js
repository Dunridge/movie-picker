import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i < Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    // href="!#"
    return (
        <nav className="white">
            <ul className="pagination">
                {pageNumbers.map(number => {
                    return(<li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link"> 
                            {number}
                        </a>
                    </li>);
                })}
            </ul>
        </nav>
    )
}

export default Pagination;