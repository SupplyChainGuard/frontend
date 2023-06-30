interface InputProps {
  name: string;
  labelName: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={props.name}>{props.labelName}</label>
      <input
        className="col-span-1 border-2 p-2"
        name={props.name}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;