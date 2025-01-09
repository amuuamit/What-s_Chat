import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { data } from "react-router-dom";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    const INITIAL_STATE = {
        chatId: "null",
        user: {}
    };

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                console.log("Changing user:", action.payload);
                return {
                    user: action.payload,
                    chatId:
                        currentUser.uid > action.payload.uid
                            ? currentUser.uid + action.payload.uid
                            : action.payload.uid + currentUser.uid,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    useEffect(() => {
        console.log("Current user:", currentUser);
        console.log("Chat state:", state);
    }, [currentUser, state]);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
