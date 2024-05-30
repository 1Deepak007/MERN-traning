import * as Yup from 'yup';

export const taskformSchema = Yup.object().shape({
  user_id: Yup.number()
    .required('User ID is required')
    .integer('User ID must be an integer'),
  title: Yup.string()
    .required('Title is required')
    .max(255, 'Title cannot be longer than 255 characters'),
  description: Yup.string()
    .required('Description is required'),
  date_time: Yup.date()
    .required('Date and time are required')
    .min(new Date(), 'Date and time must be in the future'),
  status: Yup.string()
    .required('Status is required')
    .oneOf(['pending', 'progress', 'completed'], 'Invalid status')
});
