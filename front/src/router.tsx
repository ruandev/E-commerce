import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
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
        <Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp/>} />
        
				<Route />
            </Route>
            
            <Route element={<ProtectedRoutes redirectTo='/sign-in' />}>
                <Route path='/home' />
            </Route>
		</Routes>
	);
}