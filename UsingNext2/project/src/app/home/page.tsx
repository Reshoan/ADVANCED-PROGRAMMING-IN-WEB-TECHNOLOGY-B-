
import React from 'react';
import Link from 'next/link';


const Home = async() => {
    interface users{
        id:number,
        name: string
    }
    const a= await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const <data:user> = await a.json();
    console.log(data);
    return (
        <div>
            user.map
        </div>
    );
    }
    export default Home;