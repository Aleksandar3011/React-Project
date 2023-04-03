import styles from "../TeacherList/TeacherList.module.css"


export const Pages = ({totalTeachers, teachersPerPage, setCurrentPage, currentPage}) => {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalTeachers/teachersPerPage); i++){
        pages.push(i);
    }
    // console.log(totalTeachers, teachersPerPage);
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