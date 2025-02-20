import { Link } from "@tanstack/react-router";
import { ModeToggle } from "../controllers/mode-toggle";
import { Button } from "../ui/button";
import { useAuthStore } from "@/store/auth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuthStore();

  return (
    <nav className="top-0 w-screen flex flex-col gap-2 px-6 border-b z-50">
      <div className="h-14 flex items-center justify-between z-50">
        <div className="flex gap-4 items-center justify-start z-50">
          <h1 className="text-3xl font-bold cursor-pointer">
            <Link to="/">Delegate</Link>
          </h1>
          {isAuthenticated() && (
            <Select>
              <SelectTrigger className="w-[180px] h-[48px]">
                <SelectValue
                  placeholder={
                    <div className="flex gap-4 items-center">
                      <img
                        src="/tick.png"
                        alt="image"
                        width="32px"
                        height={32}
                      />
                      Project - 2
                    </div>
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">
                  <div className="flex gap-4 items-center">
                    <img src="/tick.png" alt="image" width="24px" height={24} />
                    Project - 2
                  </div>
                </SelectItem>
                <SelectItem value="dark">
                  <div className="flex gap-4 items-center">
                    <img src="/tick.png" alt="image" width="24px" height={24} />
                    Project - 3
                  </div>
                </SelectItem>
                <SelectItem value="system">
                  <div className="flex gap-4 items-center">
                    <img src="/tick.png" alt="image" width="24px" height={24} />
                    Project - 4
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
        <div className="flex gap-4 items-center justify-end">
          <div>
            <Link to="/">How</Link>
          </div>
          <div>
            <Link to="/">About</Link>
          </div>
          <div>
            <Link to="/">GitHub</Link>
          </div>
          <div>
            <Link to="/">Coffee</Link>
          </div>
          <div id="action-buttons">
            <ModeToggle />
          </div>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <span>{user.username}</span>
                <button
                  onClick={logout}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/auth/login">
                <Button variant={"outline"} size="lg">
                  Log In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {window.location.pathname.split("/").includes("dashboard") && (
        <div className="h-9"></div>
      )}
    </nav>
  );
};
