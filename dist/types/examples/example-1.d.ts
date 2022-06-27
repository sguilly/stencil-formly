export declare class Example1 {
  model: {
    firstName: string;
    lastName: string;
  };
  form: ({
    type: string;
    templateOptions: {
      html: string;
      label?: undefined;
      required?: undefined;
      multiple?: undefined;
      options?: undefined;
    };
    fields?: undefined;
    key?: undefined;
    hide?: undefined;
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
    templateOptions?: undefined;
    key?: undefined;
    hide?: undefined;
  } | {
    key: string;
    type: string;
    templateOptions: {
      label: string;
      required: boolean;
      html?: undefined;
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
    templateOptions?: undefined;
    key?: undefined;
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
      html?: undefined;
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
      html?: undefined;
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
      html?: undefined;
    };
    fields?: undefined;
    hide?: undefined;
  })[];
  save(): void;
  render(): any;
}
