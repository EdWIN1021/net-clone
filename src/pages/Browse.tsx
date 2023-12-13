import Banner from "../components/Banner";
import Header from "../components/Header";

const Browse = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="pl-[4%]">
        {/* <Row title={"Trending Now"} movies={trending?.results} type="movie" /> */}
      </div>
    </div>
  );
};

export default Browse;
