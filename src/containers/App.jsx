import React from 'react'
import Header from './../components/Header';
import Search from './../components/Search';
import Category from './../components/Category';
import Carousel from './../components/Carousel';
import CarouselItem from './../components/CarouselItem';
import Footer from './../components/Footer';
import './../assets/styles/App.scss';

const App = () => (
	<div className="App">
		<Header/>
		<Search/>
		<Category title="Originales de Platzi"/>
		<Carousel>
			<CarouselItem/>
			<CarouselItem/>
			<CarouselItem/>
			<CarouselItem/>
			<CarouselItem/>
			<CarouselItem/>
			<CarouselItem/>
		</Carousel>

			<Category title="Originales de Netflix"/>
			<Carousel>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
			</Carousel>

			<Category title="Nueva Colección"/>
			<Carousel>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
			</Carousel>
		<Footer/>
	</div>
);

export default App;