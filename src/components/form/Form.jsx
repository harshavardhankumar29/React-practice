import React, { useState } from 'react';

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, seterr] = useState({
    name: "",
    email: "",
    password: ""
  });

  const nameHandle = (e) => {
    setName(e.target.value);
    seterr(prev => ({ ...prev, name: "invalid Name" }));
  };

  const emailHandle = (e) => {
    setEmail(e.target.value);
    seterr(prev => ({ ...prev, email: "invalid Email" }));
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
    seterr(prev => ({ ...prev, password: "invalid Password" }));
  };

  function validate(type, value) {
    if (type === "email") {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(value.toLowerCase());
    }
    if (type === "password") {
      return value.length >= 6;
    }
    if (type === "name") {
      return value.length > 0 && value.length <= 20;
    }
    return false;
  }

  const submitHandle = (e) => {
    e.preventDefault();

    let valid = true;
    
    if (!validate("name", name)) {
      seterr(prev => ({ ...prev, name: "Invalid Name" }));
      valid = false;
    }

    if (!validate("email", email)) {
      seterr(prev => ({ ...prev, email: "Invalid Email" }));
      valid = false;
    }

    if (!validate("password", password)) {
      seterr(prev => ({ ...prev, password: "Password must be 6+ characters" }));
      valid = false;
    }

    if (!valid) return;

    console.log("Form Submitted ✅", { name, email, password });

    setName("");
    setEmail("");
    setPassword("");

    seterr({ name: "", email: "", password: "" });
  };

  return (
    <form onSubmit={submitHandle} className="flex flex-col w-1/4 m-auto gap-4">

      <label>Name:</label>
      <input
        type="text"
        value={name}
        className="border-2"
        onChange={nameHandle}
        placeholder="Enter your name"
      />
      {err.name && <p className="text-red-500 text-sm">{err.name}</p>}

      <label>Email:</label>
      <input
        type="email"
        value={email}
        className="border-2"
        onChange={emailHandle}
        placeholder="Enter your email"
      />
      {err.email && <p className="text-red-500 text-sm">{err.email}</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        className="border-2"
        onChange={passwordHandle}
        placeholder="Enter password"
      />
      {err.password && <p className="text-red-500 text-sm">{err.password}</p>}

      <button type="submit"
        className="bg-black text-white py-2 rounded-md">
        Submit
      </button>

    </form>
  );
};

export default Form;



// const Form = () => {
//     const nameRef = useRef(null);
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);

//     function validate(type, value) {
//         if (type === 'email') {
//             const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             return re.test(String(value).toLowerCase());
//         }
//         if (type === 'password') return String(value).length >= 6;
//         if (type === 'name') {
//             const v = String(value).trim();
//             return v.length > 0 && v.length <= 20;
//         }
//         return false;
//     }

//     const submitHandle = (e) => {
//         e.preventDefault();
//         const name = nameRef.current?.value ?? '';
//         const email = emailRef.current?.value ?? '';
//         const password = passwordRef.current?.value ?? '';

//         if (!validate('name', name)) {
//             alert('Invalid Name');
//             return;
//         }
//         if (!validate('email', email)) {
//             alert('Invalid Email');
//             return;
//         }
//         if (!validate('password', password)) {
//             alert('Invalid Password (min 6 chars)');
//             return;
//         }

//         console.log('Form Submitted ✅', { name, email, password });
//         e.target.reset();
//     };

//     return (
//         <form onSubmit={submitHandle} className="flex flex-col w-1/4 m-auto gap-4">
//             <label>Name:</label>
//             <input type="text" ref={nameRef} className="border-2" placeholder="Enter your name" />

//             <label>Email:</label>
//             <input type="email" ref={emailRef} className="border-2" placeholder="Enter your email" />

//             <label>Password:</label>
//             <input type="password" ref={passwordRef} className="border-2" placeholder="Enter password" />

//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default Form;