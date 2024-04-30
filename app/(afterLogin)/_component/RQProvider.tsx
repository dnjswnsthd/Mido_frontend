"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

type RQProviderProps = {
  children: React.ReactNode;
}
const RQProvider = ({children}: RQProviderProps) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: { // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false, // 해당 브라우저에 포커스가 될 경우(tab전환) 리패치
          retryOnMount: true, // 페이지 이동이나 컴포넌트가 언마운트 되었다가 다시 마운트 될 경우 리패치
          refetchOnReconnect: false, // 인터넷 연결이 재접속될 경우 리패치
          retry: false,// 데이터를 가져올 때 실패할 경우 재시도 할 횟수
        }
      }
    })
  );
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}

export default RQProvider;