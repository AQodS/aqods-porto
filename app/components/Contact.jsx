import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "32e1a7e7-4430-4ee0-98e6-b182bd26660a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="name"
            placeholder="Enter your name"
            required
            type="text"
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
          placeholder="Enter your message"
          required
          rows="6"
        />
        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          type="submit"
        >
          Submit now
          <Image alt="" className="w-4" src={assets.right_arrow_white} />
        </button>
        <p className="mx-auto mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
