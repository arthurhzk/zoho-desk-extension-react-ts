declare const ZOHODESK: {
  request(requestObj: {
    url: string;
    headers: { 'Content-Type': string };
    postBody: {};
    type: string;
    data: {
      latitude: string;
      longitude: string;
      hourly: string;
      daily: string;
      timezone: string;
      forecast_days: string;
    };
  }): unknown;
  get(object: string): Promise<any>;
  extension: any;
};
