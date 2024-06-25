import React from 'react';
import { useNavigate } from 'react-router-dom';
import  '../style.css';
 
const Home = () => {
    
    const navigate = useNavigate();

    const gotoLogin = () => { 
        navigate("/login");
    }  
   
    return(
        <>
            <nav>
                <h1 className='header'>
                    Welcome Home
                </h1>
                
                <div>
        			<button onClick={gotoLogin}>
                        Log In
                    </button>
        		</div>
            </nav>
        </>
    )
}
 
export default Home;