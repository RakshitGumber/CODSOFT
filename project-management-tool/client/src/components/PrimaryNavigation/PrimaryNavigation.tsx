import { useAuth } from "@/hooks/useAuth";
import { Link } from "@tanstack/react-router";

export const PrimaryNavigation = () => {
  const { auth } = useAuth(true);
  return (
    <div className="flex h-[56px] justify-between items-center w-screen px-6">
      <div>
        <Link to="/" className="text-[32px] text-semibold">
          Delegate
        </Link>
      </div>
      <div className="flex gap-3">
        {/* TODO: add user logo here, add dark ode toggle, add logout, add login, connect backend, write test, implement the design, finish the design */}
        <div className="flex gap-3 text-gray-400 text-medium">
          <Link
            to="/how"
            className="[&.active]:font-semibold [&.active]:text-white "
          >
            How
          </Link>
          <Link to="/about">About</Link>
          <div>
            <a href="https://github.com/RakshitGumber/CODSOFT">GitHub</a>
          </div>
          <Link to="/coffee">Coffee</Link>
        </div>
      </div>
    </div>
  );
};
