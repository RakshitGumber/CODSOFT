export const Navbar = () => {
  return (
    <nav className="w-screen flex flex-col gap-2">
      <div className="h-14 px-6">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Delegate</h1>
            <div className="mx-2 text-3xl text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 5L7 19"
                />
              </svg>
            </div>
          </div>
          <div>
            {/* Navigations */}
            <div>
              {/* ThemeCOntrol */}
              {/* Notification */}
            </div>
            {/* Profile */}
          </div>
        </div>
      </div>
      <div className="h-9">second</div>
    </nav>
  );
};
