import PropTypes from "prop-types"

function UserList({ name, age, isAdmin, location, dataNilai }) {

    // //const location = {
    // province: 'Yogyakarta',
    //     city: 'Jogja'
    // }
    //dataNilai:[10,8,7,9]
    return (
        <>
            <div>
                Nama:{name}
            </div>
            <div>
                Age:{age + 5}
            </div>
            <div>
                IsAdmin:{isAdmin ? 'true' : 'false'}
            </div>
            <div>
                City:{location.city}
            </div>
        </>
    )
}

UserList.propTypes = {
    name: PropTypes.string,
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    isAdmin: PropTypes.bool.isRequired,
    // location: PropTypes.object,
    location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        province: PropTypes.string.isRequired
    }),

    // dataNilai: PropTypes.array
    // dataNilai: PropTypes.arrayOf(PropTypes.string)
    dataNilai: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number,
    PropTypes.string]))
}

export default UserList