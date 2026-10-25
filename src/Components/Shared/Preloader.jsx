import React from "react";
import Image from "next/image";

const Preloader = () => {
  return (
    <div>
      <div className="text-center">
        <div className="mb-10">
          <Image
            src="/img/banner/banner-man.png"
            alt="Moon avatar"
            width={100}
            height={100}
            className="w-auto h-auto rounded-full mx-auto"
          />
        </div>
        <span className="fz-30 mati fw-600 text-uppercase">Matias</span>
      </div>
    </div>
  );
};

export default Preloader;
