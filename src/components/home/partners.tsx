export default function Partners() {
  return (
    <section className="flex flex-col gap-8 px-[8vw] md:px-[12vw] 2xl:px-[16vw] py-[1in] text-center">
      <h2 className="text-2xl xl:text-3xl">Nasi partnerzy</h2>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {Array.from(Array(7)).map((_item, key) => (
          <div className="bg-light h-[1in] flex-1" key={key} />
        ))}
      </div>
    </section>
  );
}
