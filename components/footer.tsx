import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://github.com/kowshikjallipalli0105">Kowshik</a>. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> This is a personal portfolio website designed to enhance the frontend skills and to show case the skills,certifications,etc.... 
      </p>
    </footer>
  );
}
