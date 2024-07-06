import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

interface formDataProps{
  email:string;
  password:string;
}


const Login = () => {
  const [formData, setFormData] = useState<formDataProps>({
    email:'',
    password:''
  })

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  /* Logica do BackEnd */
  
    const handlerSubmit = ()=>{

    }
  
  return (
    <div className="screenLog h-screen w-full flex items-center justify-center">
      <div className="cardLogin bg-DarkGray text-white w-72 h-96 flex flex-col items-center justify-start p-4 rounded-2xl md:w-80">
        <div className="w-full mb-5 font-semibold text-2xl">
          <h1>Login</h1>
        </div>
        <form onSubmit={handlerSubmit} className="content w-full h-full flex flex-col justify-around items-center p-2">
          <div className="labelInput w-full flex flex-col items-start">
            <label htmlFor="email" className="w-full text-start">Email:</label>
            <input
              type="email"
              className="w-full text-black rounded-2xl p-2"
              placeholder="E-mail"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="current-email"
            />
          </div>
          <div className="labelInput w-full flex flex-col items-start">
            <label htmlFor="password" className="w-full text-start">Senha:</label>
            <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full text-black rounded-2xl p-2"
                placeholder="Password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer text-black"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="w-full h-10 flex items-center justify-center">
            <button className="w-52 h-full bg-AlmostBlack text-white rounded-2xl hover:bg-gray-950">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
