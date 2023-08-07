import { useUser } from "../context/UserContext"
function Profile() {
    const { user } = useUser()
    return (
        <div>
            <div>
                {user}
            </div>

        </div>
    )
}

export default Profile