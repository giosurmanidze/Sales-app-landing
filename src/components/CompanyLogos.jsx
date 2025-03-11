import React, { useEffect, useRef } from "react";

const CompanyLogos = () => {
  const logos = [
    "./icons/Logo.svg",
    "./icons/Logo (1).svg",
    "./icons/Logo (2).svg",
    "./icons/Logo.svg",
    "./icons/Logo (1).svg",
    "./icons/Logo (2).svg",
    "./icons/Logo.svg",
    "./icons/Logo (1).svg",
    "./icons/Logo (2).svg",
  ];

  const allLogos = [...logos, ...logos];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Set initial position
    scrollContainer.scrollLeft = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      // Check if we need to reset the scroll position
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    // Create animation loop
    const scrollInterval = setInterval(scroll, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="mt-10 text-center w-full !px-4 !sm:px-6 !lg:px-8">
      <h3 className="text-[18px] font-normal text-[#AEC8D2] !mb-8">
        ჩვენ გვენდობიან
      </h3>

      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center w-full overflow-x-scroll scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {allLogos.map((logoSrc, index) => (
            <div
              key={index}
              className="flex-shrink-0 !px-8 flex justify-center items-center"
            >
              <img
                src={logoSrc}
                alt={`Company Logo ${(index % logos.length) + 1}`}
                className="!h-8 !sm:h-10 !md:h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CompanyLogos;