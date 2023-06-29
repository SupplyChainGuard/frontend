interface AddButtonProps {
  title: string;
}

function AddButton({ title }: AddButtonProps) {
  return <div>{title}</div>;
}

export default AddButton;
