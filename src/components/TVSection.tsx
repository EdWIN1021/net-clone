import Container from "../ui/Container";

const TVSection = () => {
  return (
    <Container>
      <div className="flex max-w-[1250px] flex-col  md:mx-auto md:flex-row md:items-center md:text-left">
        <div>
          <h2 className="text-[2rem] font-bold lg:text-5xl">
            Enjoy on your TV
          </h2>
          <p className="pt-4 text-lg font-normal lg:text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <img className="relative z-[100] w-[55vw]" src="/tv.png" alt="" />
          <video
            className="absolute left-[13%] top-[21%] w-[73%]"
            autoPlay
            muted
            loop
          >
            <source src="/video-tv.m4v" type="video/webm" />
          </video>
        </div>
      </div>
    </Container>
  );
};

export default TVSection;
