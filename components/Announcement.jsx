"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const Announcement = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const modalRef = useRef(null); // Use ref to target the modal

  useEffect(() => {
    // Check sessionStorage for user visit
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setModalVisible(true); // Show modal if first visit in session
      sessionStorage.setItem("hasVisited", "true"); // Mark user as visited for this session
    }

    // Function to handle clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalVisible(false); // Close the modal if click is outside
        console.log("Clicked outside the modal, closing it.");
      }
    };

    // Add event listener for clicking outside the modal
    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false); // Close modal when "X" is clicked
  };

  return (
    <div className="modal m-4">
      {isModalVisible && (
        <div className="fixed flex-col inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef} // Attach the modal to the ref
            className="relative bg-white rounded-lg shadow-lg p-8 w-96 space-y-3"
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-gray-200 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="text-center">
              <h1 className=" text-sizeSubtitle font-semibold">Announcement</h1>
              <h2>Pixel Exchange Closure</h2>
            </div>
            <div>
              <p>Dear valued customers,</p>
              <p className="mb-3">
                <span className="opacity-0">____</span>
                We would like to inform you that the Pixel Exchange will be
                temporarily closed from December 20 to December 21. The closure
                is due to a Christmas party event during this period. We
                sincerely apologize for any inconvenience this may cause and
                appreciate your understanding and support. We look forward to
                serving you again after the holiday break. Thank you for your
                continued trust in our services! Wishing you all a joyful
                holiday season.
              </p>
              <p>Best regards,</p>
              <p>The Pixel Exchange Team</p>
              {/* Image */}
              <Image
                className="w-full h-full"
                src={"/images/forgiveness.jpg"}
                width={300}
                height={300}
                alt="Welcome Image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcement;
