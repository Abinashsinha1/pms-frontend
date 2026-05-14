import React from 'react';
import { clsx } from 'clsx';
import { LuChevronDown } from 'react-icons/lu';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  fullWidth?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, fullWidth, ...props }, ref) => {
    return (
      <div className={clsx('relative inline-block', fullWidth && 'w-full')}>
        <select
          ref={ref}
          className={clsx(
            'appearance-none bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm px-5 py-2.5 pr-10 text-sm rounded-xl font-semibold transition-all outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <LuChevronDown size={16} />
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
