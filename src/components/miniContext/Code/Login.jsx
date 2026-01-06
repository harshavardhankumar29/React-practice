import UserContext from '../UserContext.js';
import { useState, useContext } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    if(!setUser){
        return <h2>Not Logged In...</h2>
    }

  return (
    <div className="flex items-center justify-center bg-gray-50">
        <div className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>
            <div className="space-y-4">
                <input
                    placeholder="Username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    placeholder="Password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-3 pt-2">
                    <button onClick={handleSubmit} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Login
                    </button>
                    <button onClick={handleSubmit} className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login