import classNames from 'classnames';

export const useClass = () => {
  return {
    join: (first, second) => {
      return classNames(first, second);
    },
    toggle: (first: string, iftrue: string, condition, ifFalse?: string) => {
      return classNames(
        first,
        { [iftrue]: condition },
        { [ifFalse]: !condition }
      );
    },
  };
};
