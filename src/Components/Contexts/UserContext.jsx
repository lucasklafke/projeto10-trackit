import { createContext, useState ,useContext} from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [URL,setURL] = useState(null);
  const [progress,setProgress] = useState(0);
  const [habits,setHabits] = useState([]);
  return (
    <UserContext.Provider value={{ token, setToken, URL,setURL,progress, setProgress,habits,setHabits}}>
      {children}
    </UserContext.Provider>
  );
}


export function useToken(){
    const context = useContext(UserContext);
    const {token,setToken} = context;
    return {token, setToken}
}
export function useURL(){
    const context = useContext(UserContext);
    const {URL,setURL} = context;
    return {URL, setURL}
}
export function useProgress() {
  const context = useContext(UserContext);
  const { progress, setProgress } = context;
  return { progress, setProgress };
}
export function useHabits() {
  const context = useContext(UserContext);
  const { habits, setHabits } = context;
  return { habits, setHabits };
}