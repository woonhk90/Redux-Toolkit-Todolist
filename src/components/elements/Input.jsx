import styled from "styled-components";

const Input = (props) => {
  const { maxLength, pattern, title, fontsize, label, id, value, name, onChange, placeholder } = props;
  return (
    <InputWrap>
      <Stlabel fontsize={fontsize}>{label}</Stlabel>
      <StInput
        maxLength={maxLength}
        pattern={pattern}
        title={title}
        id={id}
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrap>
  );
};

export default Input;

const InputWrap = styled.div``;

// const InputWrap = styled.div`
//   color: green;
//   border: 1px solid blue;
//   display: flex;
//   flex-direction: column;
//   width: 100px;
//   height: 100px;
// `;

const Stlabel = styled.label`
  display: block;
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  margin-bottom: 10px;
`;

const StInput = styled.input`
  word-wrap: break-word;
  box-sizing: border-box;
  border: 1px solid rgb(238,238,238);
  margin-bottom: 40px;
  width: 100%;
  height: auto;
  padding: 12px;
  border-radius: 5px;
  font-size: 14px;
  :hover {
    border: 1px solid #457be1;
  }
`;
