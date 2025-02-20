import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/controllers/protected-routes";

export const Route = createFileRoute("/dashboard/")({
  component: () => {
    return (
      <ProtectedRoute>
        <RouteComponent />;
      </ProtectedRoute>
    );
  },
});

function RouteComponent() {
  return <div>Hello "/dashboard/"!</div>;
}
