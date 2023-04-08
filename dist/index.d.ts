declare const short_json: (data: any, names?: Object) => any;

declare const deshort_json: ({ data, short_json }: {
    data: any;
    short_json: any;
}) => any;

export { deshort_json, short_json };
