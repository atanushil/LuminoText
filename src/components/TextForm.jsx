import React, { useState } from "react";

export default function TextForm(props) {
  const defaultText = "Enter text here...";
  const [text, setText] = useState(defaultText);

  const handleUppercaseClick = () => {
    if (defaultText === text|| text ==="") {
      alert("Write something!!");
      return;
    }

    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowercaseClick = () => {
    if (defaultText === text|| text ==="") {
      alert("Write something!!");
      return;
    }
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    if(text===""){
      alert("Write something before clear !!");
      return;
    }
    setText("");
  };

  const handleCapitalizeClick = () => {
    if (defaultText === text|| text ==="") {
      alert("Write something!!");
      return;
    }
    let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
  };

  const handleCopyClick = () => {
    if (defaultText === text|| text ==="") {
      alert("Write something!!");
      return;
    }
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Text copied to clipboard!");
      },
      (err) => {
        alert("Failed to copy text!");
      }
    );
  };

  const handleRemoveExtraSpacesClick = () => {
    if (defaultText === text|| text ==="") {
      alert("Write something!!");
      return;
    }
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const wordCount = text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex flex-col w-full max-w-4xl">
        <p className="text-2xl sm:text-4xl my-4 text-center">{props.heading}</p>
        <div className="relative w-full">
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            className="w-full h-48 sm:h-96 border-2 border-black rounded-md p-2 resize-none"
            placeholder={defaultText}
          ></textarea>
          <div className="absolute bottom-2 right-2 text-gray-600 text-sm">
            Words: {wordCount} | Characters: {charCount}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 my-4 justify-center">
          <button
            onClick={handleUppercaseClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Convert to Uppercase
          </button>
          <button
            onClick={handleLowercaseClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Convert to Lowercase
          </button>
          <button
            onClick={handleClearClick}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Clear Text
          </button>
          <button
            onClick={handleCapitalizeClick}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Capitalize Words
          </button>
          <button
            onClick={handleCopyClick}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </button>
          <button
            onClick={handleRemoveExtraSpacesClick}
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
    </div>
  );
}
