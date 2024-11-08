import Image from 'next/image';

const Spinner = ({ isRoot }) => {
  const backgroundStyle = isRoot
    ? {
        background:
          "linear-gradient(to right, #87b9a5 0%, #87b9a5 34%, #C4EDED 100%)",
      }
    : {};

  return (
    <div
      role="status"
      className={`grid place-content-center bg-transparent ${
        isRoot ? "min-h-[100vh]" : "min-h-[calc(100vh-170px)]"
      }`}
      style={backgroundStyle}
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="110 50 328 140"
          className="w-[300px] h-[300px] text-black"
        >
          <style jsx>{`
            #pulsar5512 {
              stroke-dasharray: 281;
              animation: dash11432 2.5s infinite linear forwards;
            }

            @keyframes dash11432 {
              from {
                stroke-dashoffset: 814;
              }
              to {
                stroke-dashoffset: -814;
              }
            }
          `}</style>
          <path
            id="pulsar5512"
            stroke="currentColor"
            fill="none"
            strokeWidth="4"
            strokeLinejoin="round"
            d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
          />
        </svg>
    </div>
  );
};

export default Spinner;
