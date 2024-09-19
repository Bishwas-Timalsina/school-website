const Privacy = ({ data }: any) => {
  return (
    <div className="max-w-5xl mx-auto mt-[-45px] text-[#1e1e1e] mb-20 bg-white drop-shadow-md rounded-[8px] p-8">
      <div
        dangerouslySetInnerHTML={{
          __html: data?.privacy_policy,
        }}
      />
    </div>
  );
};

export default Privacy;
