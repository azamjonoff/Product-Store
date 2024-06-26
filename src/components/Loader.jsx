function Loader() {
  return (
    <div className="h-screen w-full bg-gray-500 blur-sm left-0 bottom-0 top-0">
      <div className="loading loading-dots loading-lg fixed top-[50%] left-[50%] translate-[-50%, -50%] z-10"></div>
    </div>
  );
}

export default Loader;
