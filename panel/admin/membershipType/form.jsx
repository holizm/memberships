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
        placeholder='code'
        property='code'
        required
    />
    <Numeric
        placeholder='durationDays'
        property='durationDays'
    />
    <Numeric
        placeholder='fee'
        property='fee'
    />
    <Text
        placeholder='currency'
        property='currency'
    />
    <Boolean
        placeholder='approvalRequired'
        property='approvalRequired'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
