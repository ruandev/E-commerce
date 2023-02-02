import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import HeaderHome from './components/HeaderHome';
import DetailProduct from './pages/DetailProducts';
import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import SignUp from './pages/Sign-up';
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
			</Route>
			
		</Routes>
	);
}