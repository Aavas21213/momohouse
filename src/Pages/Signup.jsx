import { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Log the form data first, before clearing the state
    console.log("Form Submitted!", { name, email, password, phone });

    // Clear form fields
    setName("");
    setEmail("");
    setPassword("");
    setCpassword("");
    setPhone("");

    alert("Sign Up Successful!");
  };

  return (
    <div className="flex pt-7 justify-center">
      {/* Left-side illustration */}
      <div className="shadow-2xl shadow-slate-700 rounded-xl">
        <img
          className="h-72"
          src="https://scribie.com/assets/front/illustrations/Welcome-to-scribie-512x391.svg"
          alt="Welcome"
        />
      </div>

      {/* Form Section */}
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-[484px] p-5 m-auto gap-y-1 flex flex-col rounded-xl shadow-2xl shadow-slate-700"
        >
          <label htmlFor="name">Name*</label>
          <input
            className="border-2 outline-none p-1 border-slate-400 rounded-md"
            id="name"
            type="text"
            placeholder="Enter Your Name"
            value={name} // Bind the input value to state
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            className="border-2 outline-none border-slate-400 p-1 rounded-md"
            id="email"
            type="email"
            placeholder="Enter Your Email"
            value={email} // Bind the input value to state
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password*</label>
          <input
            id="password"
            type="password"
            className="border-2 outline-none border-slate-400 p-1 rounded-md"
            placeholder="Enter Your Password"
            value={password} // Bind the input value to state
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="cpassword">Confirm Password*</label>
          <input
            id="cpassword"
            type="password"
            className="border-2 outline-none border-slate-400 p-1 rounded-md"
            placeholder="Confirm Your Password"
            value={cpassword} // Bind the input value to state
            onChange={(e) => setCpassword(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone*</label>
          <input
            id="phone"
            type="tel"
            className="border-2 outline-none border-slate-400 p-1 rounded-md"
            placeholder="Enter Your Phone Number"
            value={phone} // Bind the input value to state
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button
            type="submit"
            className="font-medium mt-2 bg-teal-500 text-white p-2 rounded-2xl hover:bg-teal-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
