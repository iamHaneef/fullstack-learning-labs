import styles from './Students.module.css'
import propTypes from 'prop-types'

//pass a props in a name of val
function Students(
    {
        //default props pass if value is missing
        name = "Guest",
        age = 0,
        no = 404,
        check = false
    }
) {

    return (
        <div className={styles.container}>
            <p>Name : {name} </p>
            <p>Age : {age}</p>
            <p>Reg No : {no}</p>
            <p>isStudent : {check ? "YES" : "NO"}</p>
        </div>
    )

}

Students.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    no: propTypes.number,
    check: propTypes.bool,
}



export default Students;