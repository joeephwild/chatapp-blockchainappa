import React, { useEffect, useState} from 'react';
import { useRouter } from 'next/router';

//INTEERNAL IMPORT
import { checkIfWalletConnected, connectWallet, connectWithContract, convertTime} from '../utils/apiFeature'

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({children}) => {
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

    const router = useRouter();

    //fetch user data
    const fetcchData = async() => {
        try {
            //get contract
            const contract = await connectWithContract();
            //get account
            const connectAccount = await connectWallet();
            setAccount(connectAccount);
            //get username
            const username = await contract.getUsername(connectAccount);
                  setUsername(username)
                  //get friendList
            const friendLists = await contract.getMyFrienList();
            setFriendList(friendLists);  
            //get alll app user
            const userLists = await contract.getAllAppUser();
            setUserList(userLists);
        } catch (error) {
            setError("please install metamask")
        }
    } 

    useEffect(() => {
      fetcchData()
    }, [])
    

    //read message
    const readMessage = async(friendAddress) => {
        try {
           const contract = connectWithContract();
           const read = await contract.readMessage(friendAddress);
           setFriendMsg(read);
        } catch (error) {
            setError("currently no message available")
        }
    }

    //send Message
    const sendMessage = async(address, msg) => {
        try {
            if(msg || address) return setError('please type yur message'); 
            const contract = connectWithContract();
            const send = await contract.sendMessage(address, msg);
            setLoading(true);
           await send.wait();
           setLoading(false);
           window.location.reload();
        } catch (error) {
            setError('please reload and try again')
        }
    }

    //create accounts
    const createAccounts = async({name, accountAddress}) => {
       try {
        if(name || accountAddress) return setError('Name and accountAddres must exist')
        const contract = await connectWithContract();
        const accounts = await contract.createAccount(name);
        setLoading(true);
        await accounts.wait();
        setLoading(false);
        window.location.reload();
       } catch (error) {
        setError('error while creating account reload browser pls');
       }
    }
 
    //ADD FRIEND
    const addMyFriends = async({name, accountAddress}) => {
        try {
           if(name || accountAddress) return  setError('please provide name');
           const contract = await connectWithContract();
           const addAFriend = await contract.addFriend(accountAddress, name);
           setLoading(true);
           await addAFriend.wait();
           setLoading(false);
           router.push('/');
           window.location.reload();
        } catch (error) {
            setError('error while adding friend retry again later');
        }
    }

    //Read user info
    const readUser = async(userAddress) => {
        const contract = await connectWithContract();
        const userName = await contract.getUsername(userAddress) ;
        setUsername(userName);
        }
        return (
        
        <ChatAppContext.Provider value={
          { 
             readMessage,
             readUser,
             createAccounts,
             addMyFriends,
             sendMessage,
             account,
             username,
             error,
             friendMsg,
             friendList,
             loading,
             userList,
             currentUserAddress,
             currentUserName
            }
        }>
            {children}
        </ChatAppContext.Provider>
    )
}