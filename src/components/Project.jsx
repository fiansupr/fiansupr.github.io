import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <img
        // src="assets/undraw.svg" // Ganti dengan ilustrasi/ikon yang sesuai jika ada
        alt="Coming Soon"
        className="w-24 h-24 mb-6 opacity-60"
      />
      <p className="text-2xl font-semibold text-white">AI Projects</p>
      <p className="mt-2 text-neutral-400">Coming Soon. Stay tuned for something powerful.</p>
    </div>
  );
};

export default Project;