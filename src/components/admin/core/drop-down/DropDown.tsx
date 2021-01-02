import { FC } from 'react';
interface IDropDown {
  children?: any;
  className?: string;
}
export const DropDown: FC<IDropDown> = ({ children, className }) => {
  return (
    <div className="custom-select w-full">
      <select
        className={`w-full pr-20px bg-gray_shade-800 rounded flex items-center  text-gray_shade-300 ${className}`}
        style={{ direction: 'rtl' }}
      >
        {children}
        <style jsx>{`
          /* The container must be positioned relative: */
          .custom-select {
            position: relative;
            font-family: Arial;
          }

          .custom-select select {
            display: none; /*hide original SELECT element: */
          }

          .select-selected {
            background-color: '#414655';
          }

          /* Style the arrow inside the select element: */
          .select-selected:after {
            position: absolute;
            content: '';
            top: 14px;
            right: 10px;
            width: 0;
            height: 0;
            border: 6px solid transparent;
            border-color: #fff transparent transparent transparent;
          }

          /* Point the arrow upwards when the select box is open (active): */
          .select-selected.select-arrow-active:after {
            border-color: transparent transparent #fff transparent;
            top: 7px;
          }

          /* style the items (options), including the selected item: */
          .select-items div,
          .select-selected {
            color: #ffffff;
            padding: 8px 16px;
            border: 1px solid transparent;
            border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
            cursor: pointer;
          }

          /* Style items (options): */
          .select-items {
            position: absolute;
            background-color: '#414655';
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
          }

          /* Hide the items when the select box is closed: */
          .select-hide {
            display: none;
          }

          .select-items div:hover,
          .same-as-selected {
            background-color: rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </select>
    </div>
  );
};
