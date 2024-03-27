import React from "react";

const Modal = ({ videoName, originalResolution, videoResizes, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500 backdrop-filter backdrop-blur-sm">
      <div className="bg-emerald-800  p-8 rounded-lg shadow-lg w-96 h-96">
        <h2 className="text-lg font-bold overflow-clip overflow-ellipsis text-nowrap">
          {videoName} Resizes:
        </h2>
        <h3 className="text-sm mb-6">
          Original Resolution: {originalResolution.width}x{originalResolution.height}
        </h3>
        <ul className="list-disc pl-6 h-2/3 overflow-y-auto">
          {videoResizes.map((resize, index) => (
            <li key={index}>{resize}</li>
          ))}
        </ul>
        <div className="flex flex-col">
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
