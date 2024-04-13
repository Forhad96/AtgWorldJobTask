const Banner = () => {
    return (
      <div
        className="hero min-h-[440px] relative"
        style={{
          backgroundImage: "url(/src/assets/images/banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-neutral-content absolute left-20 bottom-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Computer Engineering</h1>
            <p className="mb-5 text-base">142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </div>
    );
};
export default Banner;