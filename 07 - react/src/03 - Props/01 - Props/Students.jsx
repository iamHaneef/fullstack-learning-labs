import styles from './Students.module.css'
import propTypes from 'prop-types'

//pass a props in a name of val
function Students(val) {

    return (
        <div className={styles.container}>
            <p>Name : {val.name} </p>
            <p>Age : {val.age}</p>
            <p>Reg No : {val.no}</p>
            <p>isStudent : {val.check ? "YES" : "NO"}</p>
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