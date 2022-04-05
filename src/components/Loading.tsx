type Props = {};

function Loading(props: Props) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
      <p className="inline-block animate-bounce font-bold text-5xl">Loading</p>
    </div>
  );
}

export default Loading;
