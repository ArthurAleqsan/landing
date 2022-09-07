export class API {
  static makeQuery(obj: any): string {
    let query = "";
    Object.keys(obj).forEach((key) => {
      query += `&${key}=${obj[key]}`;
    });
    return query;
  }

  static isOkStatus = (status: number) => [200, 201, 204].includes(status);

  static GET = (url: string, params?: {}) => {
    const queryStr: string = params ? this.makeQuery(params) : "";
    return fetch(`${process.env.REACT_APP_PUBLIC_URL}/${url}${queryStr}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
  };
  static POST = (url: string, data: any) => {
    const body = JSON.stringify(data);
    return fetch(`${process.env.REACT_APP_PUBLIC_URL}/${url}`, {
      method: "POST",
      body,
      headers: {
        "content-type": "application/json",
      },
    });
  };
}
