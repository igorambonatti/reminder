import * as yup from 'yup'

export const timeValidationSchema = yup
  .string()
  .required('Time is required')
  .test({
    name: 'isValidTime',
    exclusive: true,
    message: 'Enter a valid time in the HH:mm format',
    test: (value) => {
      const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
      return timeRegex.test(value!)
    },
  })

export const dateValidationSchema = yup
  .string()
  .required('Date is required')
  .test({
    name: 'isValidDate',
    exclusive: true,
    message: 'Enter a valid date in the MM/DD/YYYY format',
    test: (value) => {
      const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/
      return dateRegex.test(value!)
    },
  })

export const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required').max(30, 'Title must be at most 30 characters'),
  description: yup
    .string()
    .required('Description is required')
    .max(100, 'Decription must be at most 100 characters'),
  date: dateValidationSchema,
  color: yup.string().required('Color is required'),
  time: timeValidationSchema,
})
