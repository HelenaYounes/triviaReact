import {useState} from 'react';
import Header from './Header';

const Home = ({list}) => {
    const [categoriesList, setCategoriesList] = useState(list);
  return (
        <div>
            <h1>Welcome To trivia Game</h1>
            <Header menu={list}/>
        </div>
    );
}

export default Home;