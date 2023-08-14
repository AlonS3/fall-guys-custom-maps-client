import { QueryClient } from "react-query";
import { isAxiosError } from "axios";

const MAX_RETRIES = 2;
const HTTP_STATUS_TO_NOT_RETRY = [400, 401, 403, 404];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: (failureCount, error) => {
        if (failureCount >= MAX_RETRIES) {
          return false;
        }

        if (
          isAxiosError(error) &&
          HTTP_STATUS_TO_NOT_RETRY.includes(error.response?.status ?? 0)
        ) {
          console.log(`Aborting retry due to ${error.response?.status} status`);
          return false;
        }

        return true;
      },
    },
  },
});

export default queryClient;
