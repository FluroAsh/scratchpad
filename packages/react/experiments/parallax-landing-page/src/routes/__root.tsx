import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Navigation from "@/components/navigation";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navigation />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
