export declare class Example1 {
  model: {
    firstName: string;
    lastName: string;
  };
  form: ({
    type: string;
    fields: {
      key: string;
      type: string;
      templateOptions: {
        label: string;
        required: boolean;
      };
      size: string;
    }[];
    key?: undefined;
    templateOptions?: undefined;
    hide?: undefined;
  } | {
    key: string;
    type: string;
    templateOptions: {
      label: string;
      required: boolean;
      multiple?: undefined;
      options?: undefined;
    };
    fields?: undefined;
    hide?: undefined;
  } | {
    type: string;
    fields: ({
      key: string;
      type: string;
      templateOptions: {
        label: string;
        required: boolean;
        options?: undefined;
      };
    } | {
      key: string;
      type: string;
      templateOptions: {
        label: string;
        required: boolean;
        options: {
          id: number;
          value: number;
          label: string;
        }[];
      };
    })[];
    key?: undefined;
    templateOptions?: undefined;
    hide?: undefined;
  } | {
    key: string;
    type: string;
    templateOptions: {
      label: string;
      required: boolean;
      multiple: boolean;
      options: {
        value: boolean;
        label: string;
      }[];
    };
    fields?: undefined;
    hide?: undefined;
  } | {
    key: string;
    hide: (model: any) => boolean;
    type: string;
    templateOptions: {
      label: string;
      required: boolean;
      multiple?: undefined;
      options?: undefined;
    };
    fields?: undefined;
  } | {
    key: string;
    type: string;
    templateOptions: {
      label: string;
      required: boolean;
      multiple: boolean;
      options: {
        value: number;
        label: string;
      }[];
    };
    fields?: undefined;
    hide?: undefined;
  })[];
  save(): void;
  render(): any;
}
