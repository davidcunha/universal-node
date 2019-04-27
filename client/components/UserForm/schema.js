import { object, string } from 'yup';

const errorsMessages = {
  nameEmptyValue: 'Name cannot be empty',
};

export default object().shape({
  name: string().required(errorsMessages.nameEmptyValue),
});
