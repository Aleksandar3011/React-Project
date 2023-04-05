import styles from "../TestList/TestList.module.css"


export const Pages = ({totalTests, testsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalTests/testsPerPage); i++){
        pages.push(i);
    };

    return(
        <div className={styles.pages}>
            {
                pages.map((page, index) => {
                    return <button className={page === currentPage ? styles.active : ""} key={index} onClick={() => setCurrentPage(page)}>{page}</button>;
                })
            }
        </div>
    );
};