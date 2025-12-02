import React, { useEffect } from "react";
import { useState } from "react";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    document.title = 'My Test - Contact';
  }, []);

  // fake BackEnd to store form data
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (!agreed) {
      // If the user has not agreed to the privacy policy, show an alert
      alert("Please agree to the privacy policy before submitting.");
      return;
    }
    
    // Save form data to localStorage
    const data = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    localStorage.setItem("formData", JSON.stringify(data));
    alert("Data saved in localStorage");
    
    // Reset the form after saving
    event.currentTarget.reset();
    // Reset the agreed checkbox state
    setAgreed(false);
  }

  return (
    <div style={containerStyle}>
      <div className="mx-auto max-w-2xl text-center mt-5">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Us!</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Have a question or need assistance? We’re here to help!</p>
      </div>
      <form action="#" method="POST" onSubmit={handleSubmit} className="mx-auto max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">First name</label>
            <div className="mt-2.5">
              <input type="text" name="first-name" id="first-name" required autoComplete="given-name" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600" />
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">Last name</label>
            <div className="mt-2.5">
              <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email</label>
            <div className="mt-2.5">
              <input type="email" name="email" id="email" required autoComplete="email" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Message</label>
            <div className="mt-2.5">
              <textarea name="message" id="message" rows={4} className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"></textarea>
            </div>
          </div>

          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <button type="button" onClick={() => setAgreed(!agreed)}
                className={`flex w-10 h-6 flex-none items-center rounded-full p-px ring-1 ring-inset 
                  transition-colors duration-200 ease-in-out focus-visible:outline-2 
                  focus-visible:outline-offset-2 cursor-pointer
                  ${agreed ? "bg-sky-600 ring-sky-600" : "bg-gray-200 ring-gray-900/5"}`}
                role="switch"
                aria-checked={agreed}
                aria-labelledby="switch-1-label">
                <span className="sr-only">Agree to policies</span>
                <span aria-hidden="true" className={`size-4 rounded-full bg-white ring-1 shadow-xs 
                ring-gray-900/5 transition duration-200 ease-in-out transform 
                ${agreed ? "translate-x-5" : "translate-x-0"}`}></span>
              </button>
            </div>
            <label className="text-sm/6 text-gray-600" id="switch-1-label">
              By selecting this, you agree to our
              <a href="#" className="font-semibold text-sky-600"> privacy&nbsp;policy</a>.
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer">Let's talk</button>
        </div>
      </form>
    </div>
  );
}
  
const containerStyle: React.CSSProperties = {
  height: 'calc(100vh - 56px)',
  padding: '0 10px'
};