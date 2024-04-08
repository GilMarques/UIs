import { useState } from "react";
import "./App.css";
import googlelogo from "./icons/google.png";
import microsoftlogo from "./icons/microsoft.png";
import pinetree from "./pinetree.png";
import redcross from "./redcross.png";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(0);
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [notMatching, setNotMatching] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!terms) return alert("You must agree to the terms and conditions");

    const data = {
      firstName,
      lastName,
      gender,
      password,
      email,
      phonenumber,
    };
    console.log(data);
  };

  return (
    <div>
      <div className="background_image -z-10"></div>
      <div
        className="absolute h-full w-full rounded-2xl bg-green-500 opacity-90 md:left-1/2 md:top-1/2 md:flex md:h-fit md:w-fit md:translate-x-[-50%] md:translate-y-[-50%]"
        style={{
          boxShadow: "2px 2px 5px 0 rgba(255,255, 255,1)",
        }}
      >
        <h1 className="invisible p-2 text-3xl font-bold text-white md:visible">
          Getting Started
        </h1>

        <div className="flex h-full justify-center rounded-2xl bg-white p-2 md:h-fit md:w-[768px]">
          <img
            src={pinetree}
            alt="Pine tree"
            className="invisible absolute -bottom-6 left-[70px] h-[500px] md:visible"
          />
          <div className="relative w-full py-5 md:w-2/3">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="m-2 rounded-md border-2 border-gray-400 p-2"
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="m-2 rounded-md border-2 border-gray-400 p-2"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  className="m-2 rounded-md border-2 border-gray-400 p-2"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <select
                  name=""
                  id=""
                  className="m-2 rounded-md border-2 border-gray-400 p-2"
                  defaultValue={0}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="0" disabled>
                    Gender
                  </option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="m-2 rounded-md border-2 border-gray-400 p-2"
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="m-2 rounded-md border-2 border-gray-400 p-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="m-2 rounded-md border-2 border-gray-400 p-2"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {notMatching && (
                <div className="flex items-center gap-x-2 p-2 text-red-500">
                  <img src={redcross} className="h-4" alt="Cross" />
                  Passwords do not match
                </div>
              )}
            </form>
            <div className="flex items-center gap-x-2 p-2">
              <input
                type="checkbox"
                name="checkbox"
                className="h-5 w-5 rounded-sm border-2 border-gray-400"
                onChange={(e) => setTerms(e.target.checked)}
              ></input>
              <p>
                {" "}
                I've read and and agree with <b>Terms of service</b> and our{" "}
                <b>Privacy Policy</b>
              </p>
            </div>
            {terms && (
              <p className="mx-2 text-red-500">
                You have to agree with the terms and conditions
              </p>
            )}
            <div className="flex justify-center">
              <button
                className="rounded-xl bg-green-600 p-2 text-white"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
            Already have an account?{" "}
            <a href="/login" className="underline">
              Login
            </a>
            <div className="flex items-center justify-center gap-x-2">
              <div className="w-1/5 border-[1px] border-gray-300"></div>
              <p className="text-gray-400">Or</p>
              <div className="w-1/5 border-[1px] border-gray-300"></div>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <button className="border-gray flex items-center gap-x-2 rounded-xl border-2 p-2 font-bold">
                <img
                  src={googlelogo}
                  alt="Google logo"
                  width={24}
                  height={24}
                />
                <p>Sign up with Google</p>
              </button>

              <button className="border-gray flex items-center gap-x-2 rounded-xl border-2 p-2 font-bold">
                <img
                  src={microsoftlogo}
                  alt="Microsoft logo"
                  width={24}
                  height={24}
                />
                <p>Sign up with Microsoft</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
