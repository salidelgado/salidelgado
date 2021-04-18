import React ,{useEffect, useState} from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import './../assets/styles/App.scss';
const API = 'http://localhost:3000/initalState';
const Home = () => {

	const initialState = useInitialState(API);

	return(
		<div className="App">
			<Header/>
			<Search/>
			{ initialState.mylist.length > 0 &&
				<Category title="Originales de Platzi">
					<Carousel>
						<CarouselItem/>
					</Carousel>
				</Category>
			}
			<Category title="Tendencias de Platzi">
				<Carousel>
					{initialState.trends.map(item =>
						<CarouselItem key={item.id} {...item} />
					)}
					
				</Carousel>
			</Category>
			<Category title="Originales de Netflix">
				<Carousel>
				{initialState.originals.map(item =>
						<CarouselItem key={item.id} {...item} />
					)}
				</Carousel>
			</Category>
			<Footer/>
		</div>
	);
}

export default Home;