import React from "react";

function ContactForm({ isVisible }) {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3510b889-cf75-4178-aa89-dab32d1734e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <>
      {isVisible && (
        <form
          className="w-full h-full bg-black bg-opacity-80 absolute z-30 top-0 left-0 flex items-center justify-center"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col w-[600px] h-[800px] bg-gray-100 gap-3 rounded-2xl p-16 justify-center">
            <span className="text-2xl px-2">Name:</span>
            <input
              className="rounded-lg h-16 px-4 shadow-xl"
              type="text"
              name="name"
              placeholder="Your name here"
            />
            <span className="text-2xl px-2">Email:</span>
            <input
              className="rounded-lg h-16 px-4 shadow-xl"
              type="email"
              name="email"
              placeholder="Your Email here"
            />
            <span className="text-2xl px-2">What can I do for you?</span>
            <textarea
              className="rounded-lg min-h-36 h-fit m-h-96 p-4 shadow-xl"
              name="message"
              placeholder="Your text here"
            ></textarea>
            <button
              className="flex text-white px-10 py-3 self-center rounded-full bg-black w-fit mt-10 hover:bg-gray-600"
              type="submit"
            >
              Submit Form
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default ContactForm;
