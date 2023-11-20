import { Input } from '@components/Input'
import { TextArea } from '@components/TextArea'
import { colorOptions } from '@constants/form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useReminders } from '@hooks/useReminders'
import { validationSchema } from '@validations/AddForm'
import { format, isValid, parse } from 'date-fns'
import { Controller, Resolver, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import * as S from './styles'

interface AddFormProps {
  title: string
  description: string
  date: string
  time: string
  color: string
}
export const Add: React.FC = () => {
  const { selectedDate, handleChangeReminderMode, handleAddEvent } = useReminders()

  const resolver: Resolver<any> = yupResolver(validationSchema)

  const {
    register,
    formState: { errors },
    setValue,
    watch,
    handleSubmit,
    control,
  } = useForm<AddFormProps>({
    resolver,
    defaultValues: {
      color: colorOptions[0],
      date: format(selectedDate, 'MM/dd/yyyy'),
    },
  })

  const selectedColor = watch('color')
  const parsedDate = parse(watch('date'), 'MM/dd/yyyy', new Date())
  const eventDate = isValid(parsedDate) ? parsedDate : selectedDate

  const onSubmit = async (data: AddFormProps) => {
    handleAddEvent({
      [data.date]: [
        {
          title: data.title,
          description: data.description,
          time: data.time,
          color: data.color,
          id: uuidv4(),
        },
      ],
    })
  }
  return (
    <S.Container>
      <S.Top>
        <S.Date>Add reminder - {format(eventDate as any, 'EEEE, MMMM d, yyyy')}</S.Date>
      </S.Top>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Title" {...register('title')} error={errors?.title?.message} />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextArea {...field} label="Description" error={errors?.description?.message} />
          )}
        />
        <S.InputGroup>
          <Input
            label="Date"
            placeholder="MM/DD/YYYY"
            {...register('date')}
            mask="99/99/9999"
            defaultValue={format(selectedDate, 'MMddyyyy')}
            error={errors?.date?.message}
          />
          <Input
            label="Time"
            placeholder="HH:MM"
            mask="99:99"
            {...register('time')}
            error={errors?.time?.message}
          />
        </S.InputGroup>
        <S.Colors>
          <S.ColorLabel>Color</S.ColorLabel>
          <S.ColorGroup>
            {colorOptions.map((color) => (
              <S.ColorButton
                selected={selectedColor === color}
                color={color}
                key={color}
                type="button"
                onClick={() => setValue('color', color)}
              />
            ))}
          </S.ColorGroup>
        </S.Colors>
        <S.Break>
          <div />
        </S.Break>
        <S.ActionButtons>
          <S.CancelButton onClick={() => handleChangeReminderMode({ mode: 'list_reminder' })}>
            Cancel
          </S.CancelButton>
          <S.SaveButton type="submit">Save</S.SaveButton>
        </S.ActionButtons>
      </S.Form>
    </S.Container>
  )
}
