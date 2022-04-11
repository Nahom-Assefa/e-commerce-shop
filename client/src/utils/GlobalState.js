import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

// Instantiate new context, container to hold global state
const StoreContext = createContext();
// Provider wraps our state passed in and provides to all other components
const { Provider } = StoreContext;

// Instantiate our initial global state
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });

    // use this to confirm it works
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

// Provides the data the StoreProvider gives to use in other components
const useStoreContext = () => {
    return useContext(StoreContext);
}


export { StoreProvider, useStoreContext };