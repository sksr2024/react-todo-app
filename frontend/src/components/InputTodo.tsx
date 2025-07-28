import React from "react";

const style = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30x",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled: boolean;
};

export const InputTodo: React.FC<Props> = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div style={style}>
      <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  );
};
