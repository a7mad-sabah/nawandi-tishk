
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src="/images/book.gif" // 👈 ئەگەر لە public داناوە
        alt="loading"
        className="w-24 h-24 object-contain"
      />
    </div>
  );
};
// هه
export default Loader;
