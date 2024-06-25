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
                <p className='header'>
                    Welcome Home
                </p>
                
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