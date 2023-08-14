import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setupResponseInterceptor, backendApi } from "../../api/backendApi";

const AxiosNavigation = ({useLogout}) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const interceptorRef = useRef(null)


  if (!isLoaded) {
    setIsLoaded(true);
    interceptorRef.current = setupResponseInterceptor(navigate, useLogout);
  }
  useEffect(() => {
    return () => {
        backendApi.interceptors.response.eject(interceptorRef.current);
    }
  },[])
  return null;
};

export default AxiosNavigation;
