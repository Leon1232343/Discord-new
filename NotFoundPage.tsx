import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-900 text-zinc-100">
      <h1 className="mb-2 text-4xl font-bold">404</h1>
      <p className="mb-6 text-zinc-400">Page not found</p>
      <Button asChild variant="default">
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
