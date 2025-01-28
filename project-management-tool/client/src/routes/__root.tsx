import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { PrimaryNavigation } from "@/components/PrimaryNavigation";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <PrimaryNavigation />
      <Outlet />
    </React.Fragment>
  );
}
