declare function stripJsonComments (input: string, options?: stripJsonComments.Options): string;

declare module stripJsonComments {
  export interface Options {
    whitespace?: boolean;
  }
}

export = stripJsonComments;