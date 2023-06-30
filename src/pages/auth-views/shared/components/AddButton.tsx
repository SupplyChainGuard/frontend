interface AddButtonProps {
  title: string;
  action: () => void;
}

function AddButton(props: AddButtonProps) {
  return <div className="p-4 bg-gray-600 text-white rounded-lg hover:cursor-pointer" onClick={props.action} >{props.title} +</div>;
}

export default AddButton;
