interface AddButtonProps {
  title: string;
}

function AddButton({ title }: AddButtonProps) {
  return <div className="p-4 bg-gray-600 text-white rounded-lg">{title} +</div>;
}

export default AddButton;
