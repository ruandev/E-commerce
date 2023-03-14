import { useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import api from './api';
import Cart from './components/Cart';
import CreateAt from './components/CreateAd';
import DetailProduct from './components/DetailProducts';
import EditAt from './components/EditAd';
import HeaderHome from './components/HeaderHome';
import HeaderStore from './components/HeaderStore';
import useSearch from './hooks/Search/useDiscardChanges';
import useStorage from "./hooks/Storage/useStorage";
import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import SignUp from './pages/Sign-up';
import Store from './pages/Store';
import headers from './utils/Token';

export default function MainRoutes() {
	const {storage} = useStorage()
	function ProtectedRoutes({ redirectTo }: any) {
		return storage?.token ? <Outlet /> : <Navigate to={redirectTo} />;
	}	 
	return (
		<Routes>
			<Route path='/'>
        <Route path='/' element={<SignIn/>} />
        <Route path='/entrar' element={<SignIn />} />
				<Route path='/cadastro' element={<SignUp/>} />
        
				<Route />
            </Route>
            
			<Route element={
				
					<ProtectedRoutes redirectTo='/entrar' />
					
				}>
				<Route path='/pagina-inicial' element={<Home />} />
				
				<Route path='/detalhamento-produto' element={
					<div>
					<HeaderHome/>	
					<DetailProduct/>
					</div>
					} />
				<Route path='/carrinho' element={
					<div>
						<Cart />
					</div>
					} />
				<Route path='/minha-loja' element={
					<div>
						<HeaderStore/>
						<Store/>
					</div>
					} />
				<Route path='/cadastrar-produto' element={
					<div>
						<HeaderStore/>
						<CreateAt />
					</div>
					} />
				<Route path='/editar-produto' element={
					<div>
						<HeaderStore/>
						<EditAt />
					</div>
					} />
				
			</Route>
			
		</Routes>
	);
}