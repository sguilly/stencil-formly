export declare class Example1 {
  model: {
    firstName: string;
    lastName: string;
  };
  form: ({
    key: string;
    type: string;
    templateOptions: {
      label: string;
      required: boolean;
      multiple?: undefined;
      options?: undefined;
      type?: undefined;
    };
    hide?: undefined;
    disable?: undefined;
    fields?: undefined;
  } | {
    key: string;
    hide: (model: any) => boolean;
    type: string;
    templateOptions: {
      label: string;
      required: boolean;
      multiple?: undefined;
      options?: undefined;
      type?: undefined;
    };
    disable?: undefined;
    fields?: undefined;
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
      type?: undefined;
    };
    hide?: undefined;
    disable?: undefined;
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
      type?: undefined;
    };
    hide?: undefined;
    disable?: undefined;
    fields?: undefined;
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
      multiple?: undefined;
      type?: undefined;
    };
    hide?: undefined;
    disable?: undefined;
    fields?: undefined;
  } | {
    key: string;
    type: string;
    templateOptions: {
      label: string;
      type: string;
      required: boolean;
      multiple?: undefined;
      options?: undefined;
    };
    disable: (model: any) => boolean;
    hide?: undefined;
    fields?: undefined;
  } | {
    type: string;
    hide: (model: any) => boolean;
    fields: {
      key: string;
      type: string;
      templateOptions: {
        label: string;
        required: boolean;
      };
    }[];
    key?: undefined;
    templateOptions?: undefined;
    disable?: undefined;
  } | {
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
    disable?: undefined;
  })[];
  save(): void;
  render(): any;
}
