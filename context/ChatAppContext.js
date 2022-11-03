import React, { useEffect, useState} from 'react';
import { useRouter } from 'next/router';

//INTEERNAL IMPORT
import { checkIfWalletConnected, connectWallet, connectWithContract, convertTime} from '../utils/apiFeature'

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({children}) => {
    const title = "hey whats up";
    const [account, setAccount] = useState("");
    const [username, setUsername] = useState("");
    const [friendList, setFriendList] = useState([]);
    const [friendMsg, setFriendMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState("");

    //CHAT USER DATA
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");
        return (
        
        <ChatAppContext.Provider value={
          { 
             checkIfWalletConnected, 
             connectWallet, 
             connectWithContract,
             title
            }
        }>
            {children}
        </ChatAppContext.Provider>
    )
}