const HomeFooter = () => {
  return (
    <footer className="bg-[#181d24] p-4">
      <div className="w-full mx-auto max-w-4xl p-2 flex items-center justify-between">
        <span className="text-sm text-gray-400">
          © 2023{' '}
          <a href="https://github.com/skuralll" className="hover:underline">
            skuralll
          </a>
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-400">
          <li>
            <a
              href="https://github.com/skuralll/steam-embeds_v2"
              className="hover:underline me-4 md:me-6"
            >
              ソースコード
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default HomeFooter;
