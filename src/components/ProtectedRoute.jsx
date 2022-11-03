import { useNavigate } from "react-router-dom";
import { AuthContextUse } from "../context/authContext";

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
	const { user } = AuthContextUse();
    
	if(user){
        return children
    }else{
        navigate('/') 
    }
};

export default ProtectedRoute;
