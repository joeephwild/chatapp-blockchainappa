//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract ChatApp {

    //USER STRUCT
    struct user {
        string name;
        friend[] friendList;
    }

    //Friend struct
    struct friend {
        address pubkey;
        string name;
    }

    //MESSAGE STRUCT
    struct message {
        address sender;
        uint256 timestamp;
        string msg;
    } 
  
  //MAPPINGS
    mapping(address => user) userList;
    mapping(bytes32 => message[]) allMessages;

    //Check USER EXIST
    function checkUserExist(address pubkey) public view return(bool){
        return bytes(userList[pubkey].name).length > 0;
    }

    //CRREATE ACCOUNT
    function createAccount(string calldata name) external {
        require(checkUserExist(msg.sender) == false, "user already exist");
        require(bytes(name).length>0, "Username cant be empty");

        userList[msg.sender].name =name
    }

    //GET USERNAME
    function getUsername(address pubkey) external view returns(string memory){
        require(checkUserExist(pubkey), "User is not registered");
        return userList[pubkey].name;
    }

    //ADD FRIEND
    function addFriend(address friend_key, string calldata name) external{
        require(checkUserExist(msg.sender), "Create an account First");
        require(checkUserExist(friend_key), "User is not registered");
        require(msg.sender = friend_Key, "users cannot add themselves");
        require(checkAlreadyFriends(msg.sender, friend_Key)== false, "These user are friends");

        _addFriend(mag.sender, friend_key, name);
        _addFriend(friend_key, msg.sender, userList[msg.sender].name);
    }

    //Check already friends
    function checkAlreadyFriends(address pubkey1, address pubkey2) internal view returns(bool){
        if(userList[pubkey1].friendList.length > userList[pubkey2].friendList.length){
            address tmp = pubkey1;
            pubkey1 = pubkey2;
            pubkey2 = tmp;
        }
        for(uint256 i = 0; i < userList[pubkey1].friendList.length; i++){
            if(userList[pubkey1].friendList[i].pubkey = pubkey2)return true;
           
        }
         return false;
    }

    //ADD FRIEND
    function _addFriend(address me, address friend_Key, string memory name) internal {
        friend memory newFriend = friend(friend_key, name);
        userList[me].friendList.push(newFriend);
    }

    //GET FRIEND
    function getMyFriendList() external view returns(friend[] memory){
        return userList[msg.sender].friendList;
    }

    //GET CODE
    function _getChatCode(address pubkey1, address pubkey2) internal pure returns(bytes32){
        if(pubkey1 <pubkey2){
            return keccak256(abi.encodePacked(pubkey1, pubkey2));
        }else return keccak256(abi.encodePacked(pubkey2, pubkey1));
    }
}