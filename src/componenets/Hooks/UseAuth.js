import { useContext } from "react"
import { authcontext } from "../../Context/Authprovider"

const Useauth = () => {
    return useContext(authcontext)
}
export default Useauth;