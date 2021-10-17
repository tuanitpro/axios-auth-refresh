import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface AxiosAuthRefreshOptions {
  statusCodes?: Array<number>;
  retryInstance?: AxiosInstance;
  interceptNetworkError?: boolean;
  pauseInstanceWhileRefreshing?: boolean;
  onRetry?: (requestConfig: AxiosRequestConfig) => AxiosRequestConfig
}

export interface AxiosAuthRefreshCache {
  skipInstances: AxiosInstance[];
  refreshCall: Promise<any>|undefined;
  requestQueueInterceptorId: number|undefined;
}

export interface AxiosAuthRefreshRequestConfig extends AxiosRequestConfig {
  skipAuthRefresh?: boolean;
}
