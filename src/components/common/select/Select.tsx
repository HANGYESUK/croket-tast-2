import {ReactNode, SelectHTMLAttributes} from 'react';
import './select.css'

export interface OptionType {
    value: string;
    children?: ReactNode;
    disabled?: boolean;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>  {
    options: OptionType[];
    defaultOption: string;
}

const Select = ({ options, onChange, defaultOption, disabled = false, ...props }: SelectProps) => {
    return (
        <select className={`atom-select ${disabled && 'disabled:opacity-35'}`} onChange={onChange} disabled={disabled} {...props}>
            <option value={''}>{defaultOption}</option>
            {options.map(option => (
                <option key={option.value} disabled={option.disabled} value={option.value}>
                    { option.children ? option.children : option.value }
                </option>
            ))}
        </select>
    );
};

export default Select;