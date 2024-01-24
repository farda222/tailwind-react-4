import Pricing from "../Components/card";
const pricing = () => {
  return (
    <>
      <h1 className="text-3xl font-extrabold w-72 flex container mx-auto align-middle items-center mt-10 lg:mt-40 text-center text-slate-800">Pricing Now For More Feature</h1>
      <section className="lg:flex lg:container lg:mx-auto lg:align-middle lg:items-center lg:mt-20">
        <Pricing />
        <Pricing />
        <Pricing />
      </section>
    </>
  );
};

export default pricing;
