const Terms = ({ data }: any) => {
  return (
    <div className="max-w-5xl mx-auto mt-[-45px] text-[#1e1e1e] mb-20 bg-white drop-shadow-md rounded-[8px] p-8">
      <div
        dangerouslySetInnerHTML={{
          __html: data?.terms_conditions,
        }}
      />
    </div>
  );
};

export default Terms;
