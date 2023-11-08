import {useQuery} from "react-query";
import {getWalletBalance as getWalletBalanceCore} from "@xai-vanguard-node/core";
import {ethers} from "ethers";

export function useBalance(address: string) {
	return useQuery({
		queryKey: ["balance", address],
		queryFn: async () => {
			const wei = await getWalletBalanceCore(address);

			return {
				wei,
				ethString: ethers.formatEther(wei),
			}
		},
		cacheTime: 0,
		enabled: address?.length > 0,
	});
}
