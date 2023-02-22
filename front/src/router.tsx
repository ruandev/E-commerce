import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import HeaderHome from './components/HeaderHome';
import DetailProduct from './components/DetailProducts';
import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import SignUp from './pages/Sign-up';
import Store from './pages/Store';
import HeaderStore from './components/HeaderStore';
import CreateAt from './components/CreateAd';
import Cart from './components/Cart';
export default function MainRoutes() {
	function ProtectedRoutes({ redirectTo }: any) {
		const isAuthenticated = true;
		return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
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
					<Route path='/pagina-inicial' element={
					<div>
					<HeaderHome/>	
						<Home />
					</div>
					} />
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
				
			</Route>
			
		</Routes>
	);
}