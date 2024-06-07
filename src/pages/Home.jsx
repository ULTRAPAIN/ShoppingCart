/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    // creating a state where spinner will be loaded when the setLaoding is true this indicated that an async function is run in background 
    const [loading, setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    //  so lets first create an async function 
    async function fetchProductData(){
        setLoading(true);
        try{
            // fetching the data from the url storing inside the result
            const result= await fetch(API_URL);
            // converting the result into json format
            const data= await result.json();
            // updating the state when the data is fetched and stored inside the posts
            setPosts(data);
        }
        // this block will catch the error if any error occurs during fetching of the data 
        catch(error){
            console.log("Error in Fetching of the data",error)
        }
        setLoading(false);
    }

    // creating an  useEffect hook which will run only once when the component is mounted this is generally used for fetching the data 
    //here we will call the fetchProductData function

    useEffect(()=>{
        fetchProductData();
    },[])
    return (
        <>
        <div>
            
            {/* now we will crate the cards */}

            {
                // if loading is true then the spinner will be loaded else the data will be loaded
                loading?
                (<Spinner/>):
                // if the length of the posts is greater than 0 then the data will be loaded else no data found will be displayed
                (posts.length >0 ?
                    (
                        <div>

                            {/* mapping the posts and passing the post as a prop to the Product component*/}
                            {
                            posts.map((post)=>(
                                // passing the post as a prop to the Product component
                                <Product key = {post.id} post={post}/>
                            ))
                            }
                           
                        </div>
                    ):
                    (
                        // if no data is found then this will be displayed
                        <div>No data found</div>
                    )
                )
            }
        </div>
        </>
    )
}

export default Home
