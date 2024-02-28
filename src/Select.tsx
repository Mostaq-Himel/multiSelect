type SelectOptions = {
    label: string;
    value: string;
}

type SelectProps = {
    options: SelectOptions[];
    value?: SelectOptions;
    onChange?: (value: SelectOptions | undefined) => void;
}

const Select = ({_value, options, onChange}: SelectProps) => {
  return (
    <div className="">
        <span className="">Value</span>
        <button className="">&times;</button>
        <div className=""></div>
        <div className="">
            <ul className="">
                {options.map(option => (
                    <li>{option.label}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Select