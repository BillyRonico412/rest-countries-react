import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center animate-pulse">
      <p className="inline-block font-bold text-5xl">Error 404</p>
      <Link to="/" className="text-xl underline mt-4">Back to home page</Link>
    </div>
  );
}

export default Page404;
