import { useQuery } from "@tanstack/react-query";

const WalletView = () => {
  const { isPending, isFetching, data, error } = useQuery({
    queryKey: ["someUniqueKey"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.github.com/repos/tanstack/query"
      );
      return await response.json();
    },
  });

  if (isPending) return "Loading...";
  if (error) return "An error occured: " + error.message;
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-8">Your Wallet Info</h1>
        <div>Wallet view</div>
      </div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>{data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </>
  );
};

export default WalletView;
