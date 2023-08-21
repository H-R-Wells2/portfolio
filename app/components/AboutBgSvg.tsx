import Image from "next/image";


const AboutBgSvg: React.FC = () => {
  return (
    <>
      <span
        aria-hidden="true"
        className="bg-svg hidden lg:inline-block absolute bottom-12 -left-12 dark:hidden"
      >
        <Image
          src={"/extra/dots.svg"}
          width={102}
          height={153}
          alt="dots background"
        />
      </span>
      <span
        aria-hidden="true"
        className="bg-svg hidden lg:inline-block absolute top-20 -right-4 dark:hidden"
      >
        <Image
          src={"/extra/dots.svg"}
          width={102}
          height={153}
          alt="dots background"
        />
      </span>

      <span
        aria-hidden="true"
        className="bg-svg hidden lg:inline-block absolute bottom-24 right-36"
      >
        <Image src={"/extra/arrow.svg"} width={19} height={60} alt="up arrow" />
      </span>
    </>
  );
};

export default AboutBgSvg;
