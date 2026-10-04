import {
    Boolean,
    DialogForm,
    LongText,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
        required
    />
    <Numeric durationDays />
    <Numeric fee />
    <Text currency />
    <Boolean approvalRequired />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
