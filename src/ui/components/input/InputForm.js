import { Form, FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap';

const InputForm = (props) => {
    
  return (
    <>
      <FormGroup controlId={props.controlId} className='mb-3'>
        <FormLabel>{props.label}</FormLabel>
        <FormControl
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          isInvalid={props.isInvalid}
          name={props.name}
        />
        <FormText type="invalid">{props.errorMessage}</FormText>
      </FormGroup>
    </>
  );
};

export default InputForm;
