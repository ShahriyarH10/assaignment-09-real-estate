import { createContext, useState } from "react";
export const HomeContext = createContext(null);

const Home = (props) => {
    const [homeData, setHomeData] = useState("from home")
    return (
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-2xl'>This is Home Page</h1>
            <HomeContext.Provider value={homeData}>
            {
                props.children
            }
            </HomeContext.Provider>
            

        </div>
    );
};

export default Home;